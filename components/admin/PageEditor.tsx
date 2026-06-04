"use client";

import { useEffect, useMemo, useState } from "react";
import { getDefaultLocalePayload } from "@/lib/cms/defaults";
import {
  applyFixedContentFields,
  getPageFieldDefs,
  readFieldValue,
  writeFieldValue
} from "@/lib/cms/fields";
import { fetchPageDocument, savePageDocument } from "@/lib/cms/firestore";
import type { CmsFieldDef, CmsPageDocument, CmsPageId } from "@/lib/cms/types";
import type { Language } from "@/lib/i18n";
import { useAdminAuth } from "@/hooks/useAdminAuth";

export function PageEditor({ pageId, pageLabel }: { pageId: CmsPageId; pageLabel: string }) {
  const { user } = useAdminAuth();
  const [language, setLanguage] = useState<Language>("en");
  const [document, setDocument] = useState<CmsPageDocument | null>(null);
  const [draft, setDraft] = useState<Record<string, unknown>>(() =>
    getDefaultLocalePayload(pageId, "en")
  );
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fields = useMemo<CmsFieldDef[]>(() => getPageFieldDefs(pageId, language), [pageId, language]);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);

      try {
        const remote = await fetchPageDocument(pageId);
        if (cancelled) {
          return;
        }

        const payload = applyFixedContentFields(
          pageId,
          language,
          (remote?.[language] ?? getDefaultLocalePayload(pageId, language)) as Record<string, unknown>
        );
        setDocument(remote);
        setDraft(structuredClone(payload) as Record<string, unknown>);
      } catch (loadError) {
        console.error(loadError);
        if (!cancelled) {
          setError("Could not load page from Firestore.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [pageId, language]);

  function updateField(field: CmsFieldDef, value: string) {
    setDraft((current) => writeFieldValue(current, field, value));
    setStatus(null);
  }

  async function handleSave() {
    setSaving(true);
    setError(null);
    setStatus(null);

    try {
      const normalizedDraft = applyFixedContentFields(pageId, language, draft);
      const nextDocument: CmsPageDocument = {
        en:
          language === "en"
            ? normalizedDraft
            : applyFixedContentFields(
                pageId,
                "en",
                (document?.en ?? getDefaultLocalePayload(pageId, "en")) as Record<string, unknown>
              ),
        de:
          language === "de"
            ? normalizedDraft
            : applyFixedContentFields(
                pageId,
                "de",
                (document?.de ?? getDefaultLocalePayload(pageId, "de")) as Record<string, unknown>
              ),
        updatedAt: new Date().toISOString(),
        updatedBy: user?.email ?? undefined
      };

      await savePageDocument(pageId, nextDocument, user?.email ?? undefined);
      setDocument(nextDocument);
      setStatus("Saved to Firestore.");
    } catch (saveError) {
      console.error(saveError);
      setError("Save failed. Check Firestore rules and that you are logged in.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return <p className="admin-muted">Loading page content…</p>;
  }

  return (
    <div className="admin-editor">
      <header className="admin-editor__header">
        <div>
          <p className="admin-eyebrow">Editing</p>
          <h1>{pageLabel}</h1>
          <p className="admin-muted">Plain text only. Use new lines for paragraphs or list items.</p>
        </div>
        <div className="admin-editor__actions">
          <div className="admin-lang-toggle" role="tablist" aria-label="Content language">
            <button
              className={language === "en" ? "active" : ""}
              type="button"
              onClick={() => setLanguage("en")}
            >
              English
            </button>
            <button
              className={language === "de" ? "active" : ""}
              type="button"
              onClick={() => setLanguage("de")}
            >
              Deutsch
            </button>
          </div>
          <button className="admin-button primary" disabled={saving} type="button" onClick={handleSave}>
            {saving ? "Saving…" : "Save changes"}
          </button>
        </div>
      </header>

      {error ? <p className="admin-error">{error}</p> : null}
      {status ? <p className="admin-success">{status}</p> : null}

      <div className="admin-field-grid">
        {fields.map((field) => (
          <label className="admin-field" key={field.path}>
            <span>{field.label}</span>
            {field.type === "paragraph" || field.type === "lines" ? (
              <textarea
                rows={field.type === "lines" ? 4 : 6}
                value={readFieldValue(draft, field)}
                onChange={(event) => updateField(field, event.target.value)}
              />
            ) : (
              <input
                type="text"
                value={readFieldValue(draft, field)}
                onChange={(event) => updateField(field, event.target.value)}
              />
            )}
            {field.hint ? <small>{field.hint}</small> : null}
          </label>
        ))}
      </div>
    </div>
  );
}
