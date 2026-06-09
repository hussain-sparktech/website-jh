import { doc, getDoc, setDoc } from "firebase/firestore";
import { getFirestoreDb } from "@/lib/firebase/client";
import { applyFixedContentFields } from "./fields";
import { buildAllDefaultDocuments, buildDefaultPageDocument, getDefaultLocalePayload } from "./defaults";
import type { CmsPageDocument, CmsPageId } from "./types";
import type { Language } from "@/lib/i18n";

const COLLECTION = "cmsPages";

export async function fetchPageDocument(pageId: CmsPageId): Promise<CmsPageDocument | null> {
  const db = getFirestoreDb();
  if (!db) {
    return null;
  }

  const snapshot = await getDoc(doc(db, COLLECTION, pageId));
  if (!snapshot.exists()) {
    return null;
  }

  return snapshot.data() as CmsPageDocument;
}

export async function fetchLocalePayload(
  pageId: CmsPageId,
  language: Language
): Promise<Record<string, unknown> | null> {
  const document = await fetchPageDocument(pageId);
  if (!document) {
    return null;
  }

  const payload = document[language];
  return payload && typeof payload === "object" ? (payload as Record<string, unknown>) : null;
}

export function resolveLocalePayload<T>(
  pageId: CmsPageId,
  language: Language,
  document: CmsPageDocument | null
): T {
  const fallback = getDefaultLocalePayload(pageId, language) as T;

  if (!document) {
    return fallback;
  }

  const remote = document[language];
  if (!remote || typeof remote !== "object") {
    return fallback;
  }

  return applyFixedContentFields(pageId, language, remote as Record<string, unknown>) as T;
}

export async function savePageDocument(
  pageId: CmsPageId,
  document: CmsPageDocument,
  updatedBy?: string
): Promise<void> {
  const db = getFirestoreDb();
  if (!db) {
    throw new Error("Firebase is not configured.");
  }

  await setDoc(
    doc(db, COLLECTION, pageId),
    {
      ...document,
      updatedAt: new Date().toISOString(),
      updatedBy: updatedBy ?? null
    },
    { merge: true }
  );
}

export async function seedAllPagesFromDefaults(): Promise<void> {
  const documents = buildAllDefaultDocuments();

  for (const pageId of Object.keys(documents) as CmsPageId[]) {
    await savePageDocument(pageId, documents[pageId], "seed");
  }
}

export async function seedSinglePage(pageId: CmsPageId): Promise<void> {
  await savePageDocument(pageId, buildDefaultPageDocument(pageId), "seed");
}
