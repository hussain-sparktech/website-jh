import { getDefaultLocalePayload } from "./defaults";
import { getByPath, humanizePath as formatPath, setByPath } from "./paths";
import type { CmsFieldDef, CmsPageId, FieldType } from "./types";
import type { Language } from "@/lib/i18n";

/** Not editable in admin — always taken from code (like header/footer). */
const FIXED_CONTENT_KEY_LIST = ["cta", "primaryCta", "secondaryCta", "submit"] as const;
const FIXED_CONTENT_KEYS = new Set<string>(FIXED_CONTENT_KEY_LIST);
const SKIP_KEYS = new Set<string>(["accent", "url", ...FIXED_CONTENT_KEY_LIST]);

const MAX_DISCOVERY_DEPTH = 12;

const pageFieldDefCache = new Map<string, CmsFieldDef[]>();

function inferFieldType(value: string): FieldType {
  if (value.includes("\n")) {
    return "paragraph";
  }

  if (value.length > 120) {
    return "paragraph";
  }

  return "text";
}

type DiscoveredField = CmsFieldDef & { order: number };

function discoverFieldsOrdered(
  value: unknown,
  basePath: string,
  depth: number,
  order: { current: number }
): DiscoveredField[] {
  if (depth > MAX_DISCOVERY_DEPTH || value === null || value === undefined) {
    return [];
  }

  if (typeof value === "string") {
    const path = basePath;
    return [
      {
        path,
        label: formatPath(path),
        type: inferFieldType(value),
        hint: "New lines are preserved.",
        order: order.current++
      }
    ];
  }

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return [];
    }

    if (value.every((item) => typeof item === "string")) {
      return [
        {
          path: basePath,
          label: formatPath(basePath),
          type: "lines",
          hint: "One item per line.",
          order: order.current++
        }
      ];
    }

    return value.flatMap((item, index) =>
      discoverFieldsOrdered(item, `${basePath}.${index}`, depth + 1, order)
    );
  }

  if (typeof value === "object") {
    return Object.keys(value as Record<string, unknown>).flatMap((key) => {
      if (SKIP_KEYS.has(key)) {
        return [];
      }

      const child = (value as Record<string, unknown>)[key];
      const path = basePath ? `${basePath}.${key}` : key;
      return discoverFieldsOrdered(child, path, depth + 1, order);
    });
  }

  return [];
}

/** Stable field list for admin — order never changes between refreshes. */
export function getPageFieldDefs(pageId: CmsPageId, language: Language): CmsFieldDef[] {
  const cacheKey = `${pageId}:${language}`;
  const cached = pageFieldDefCache.get(cacheKey);
  if (cached) {
    return cached;
  }

  const template = getDefaultLocalePayload(pageId, language);
  const discovered = discoverFieldsOrdered(template, "", 0, { current: 0 }).sort(
    (a, b) => a.order - b.order || a.path.localeCompare(b.path, "en")
  );

  const fields = discovered.map(({ path, label, type, hint }) => ({ path, label, type, hint }));
  pageFieldDefCache.set(cacheKey, fields);
  return fields;
}

/** @deprecated Use getPageFieldDefs for admin UI. */
export function discoverFields(value: unknown, basePath = "", depth = 0): CmsFieldDef[] {
  return discoverFieldsOrdered(value, basePath, depth, { current: 0 }).map(
    ({ path, label, type, hint }) => ({ path, label, type, hint })
  );
}

export function readFieldValue(payload: Record<string, unknown>, field: CmsFieldDef): string {
  const raw = getByPath(payload, field.path);

  if (field.type === "lines") {
    return Array.isArray(raw) ? raw.map(String).join("\n") : "";
  }

  return typeof raw === "string" ? raw : "";
}

export function writeFieldValue(
  payload: Record<string, unknown>,
  field: CmsFieldDef,
  raw: string
): Record<string, unknown> {
  if (field.type === "lines") {
    const lines = raw
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
    return setByPath(payload, field.path, lines);
  }

  return setByPath(payload, field.path, raw);
}

function mergeFixedContentKeys(target: unknown, template: unknown): void {
  if (template === null || template === undefined || typeof template !== "object") {
    return;
  }

  if (Array.isArray(template)) {
    if (!Array.isArray(target)) {
      return;
    }

    template.forEach((templateItem, index) => {
      mergeFixedContentKeys(target[index], templateItem);
    });
    return;
  }

  const templateRecord = template as Record<string, unknown>;

  for (const [key, templateValue] of Object.entries(templateRecord)) {
    if (FIXED_CONTENT_KEYS.has(key) && typeof templateValue === "string") {
      if (target && typeof target === "object" && !Array.isArray(target)) {
        (target as Record<string, unknown>)[key] = templateValue;
      }
      continue;
    }

    if (templateValue !== null && typeof templateValue === "object") {
      const targetChild =
        target && typeof target === "object" && !Array.isArray(target)
          ? (target as Record<string, unknown>)[key]
          : undefined;
      mergeFixedContentKeys(targetChild, templateValue);
    }
  }
}

/** Overlays button labels from code so Firestore cannot override them. */
export function applyFixedContentFields(
  pageId: CmsPageId,
  language: Language,
  payload: Record<string, unknown>
): Record<string, unknown> {
  const template = getDefaultLocalePayload(pageId, language);
  const merged = structuredClone(payload) as Record<string, unknown>;
  mergeFixedContentKeys(merged, template);
  return merged;
}
