export function getByPath(source: unknown, path: string): unknown {
  if (!path) {
    return source;
  }

  return path.split(".").reduce<unknown>((current, key) => {
    if (current === null || current === undefined) {
      return undefined;
    }

    if (Array.isArray(current)) {
      const index = Number(key);
      return Number.isNaN(index) ? undefined : current[index];
    }

    if (typeof current === "object") {
      return (current as Record<string, unknown>)[key];
    }

    return undefined;
  }, source);
}

export function setByPath(source: Record<string, unknown>, path: string, value: unknown): Record<string, unknown> {
  const keys = path.split(".");
  const root = structuredClone(source) as Record<string, unknown>;
  let current: Record<string, unknown> | unknown[] = root;

  keys.forEach((key, index) => {
    const isLast = index === keys.length - 1;

    if (isLast) {
      if (Array.isArray(current)) {
        current[Number(key)] = value;
      } else {
        (current as Record<string, unknown>)[key] = value;
      }
      return;
    }

    const nextKey = keys[index + 1];
    const nextIsIndex = nextKey !== undefined && /^\d+$/.test(nextKey);

    if (Array.isArray(current)) {
      const arrayIndex = Number(key);
      if (current[arrayIndex] === undefined) {
        current[arrayIndex] = nextIsIndex ? [] : {};
      }
      current = current[arrayIndex] as Record<string, unknown> | unknown[];
      return;
    }

    const record = current as Record<string, unknown>;
    if (record[key] === undefined || record[key] === null) {
      record[key] = nextIsIndex ? [] : {};
    }
    current = record[key] as Record<string, unknown> | unknown[];
  });

  return root;
}

export function humanizePath(path: string): string {
  return path
    .split(".")
    .map((part) => (/^\d+$/.test(part) ? `#${Number(part) + 1}` : part.replace(/([A-Z])/g, " $1")))
    .join(" · ")
    .replace(/^\w/, (c) => c.toUpperCase());
}
