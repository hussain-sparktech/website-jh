"use client";

import { useEffect, useState } from "react";
import { fetchPageDocument, resolveLocalePayload } from "@/lib/cms/firestore";
import { getDefaultLocalePayload } from "@/lib/cms/defaults";
import type { CmsPageId } from "@/lib/cms/types";
import type { Language } from "@/lib/i18n";
import { isFirebaseConfigured } from "@/lib/firebase/config";

type UseCmsPageResult<T> = {
  data: T;
  loading: boolean;
  source: "firestore" | "local";
  error: string | null;
};

export function useCmsPage<T>(pageId: CmsPageId, language: Language): UseCmsPageResult<T> {
  const [data, setData] = useState<T>(() => getDefaultLocalePayload(pageId, language) as T);
  const [loading, setLoading] = useState(isFirebaseConfigured());
  const [source, setSource] = useState<"firestore" | "local">("local");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fallback = getDefaultLocalePayload(pageId, language) as T;

    if (!isFirebaseConfigured()) {
      setLoading(false);
      setSource("local");
      setData(fallback);
      return;
    }

    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);

      try {
        const document = await fetchPageDocument(pageId);
        if (cancelled) {
          return;
        }

        if (document) {
          setData(resolveLocalePayload<T>(pageId, language, document));
          setSource("firestore");
        } else {
          setData(fallback);
          setSource("local");
        }
      } catch (loadError) {
        if (cancelled) {
          return;
        }

        console.error(`CMS load failed for ${pageId}/${language}`, loadError);
        setData(fallback);
        setSource("local");
        setError("Could not load content from Firebase. Showing saved defaults.");
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

  return { data, loading, source, error };
}
