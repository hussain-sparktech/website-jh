"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { getPageImageConfig } from "@/lib/cms/pageImages";
import type { CmsPageId } from "@/lib/cms/types";

export function PageImageUploads({ pageId }: { pageId: CmsPageId }) {
  const { panelTitle, slots } = useMemo(() => getPageImageConfig(pageId), [pageId]);
  const [previews, setPreviews] = useState<Record<string, string>>(() =>
    Object.fromEntries(slots.map((slot) => [slot.id, slot.defaultSrc]))
  );
  const objectUrlsRef = useRef<string[]>([]);

  useEffect(() => {
    setPreviews(Object.fromEntries(slots.map((slot) => [slot.id, slot.defaultSrc])));
  }, [slots]);

  useEffect(() => {
    return () => {
      objectUrlsRef.current.forEach((url) => URL.revokeObjectURL(url));
    };
  }, []);

  if (slots.length === 0) {
    return null;
  }

  function handleFileChange(slotId: string, file: File | undefined) {
    if (!file?.type.startsWith("image/")) {
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    objectUrlsRef.current.push(objectUrl);
    setPreviews((current) => ({ ...current, [slotId]: objectUrl }));
  }

  return (
    <section className="admin-image-panel">
      <header className="admin-image-panel__header">
        <p className="admin-eyebrow">Images</p>
        <h2>{panelTitle}</h2>
      </header>

      <div className={`admin-image-grid admin-image-grid--count-${slots.length}`}>
        {slots.map((slot, index) => (
          <article className="admin-image-card" key={slot.id}>
            <div className="admin-image-card__preview">
              <Image
                alt={`${panelTitle} ${index + 1}`}
                className="admin-image-card__img"
                fill
                sizes="(max-width: 900px) 100vw, 320px"
                src={previews[slot.id] ?? slot.defaultSrc}
                unoptimized
              />
            </div>

            <div className="admin-image-card__body">
              <label className="admin-image-card__file">
                <span>Choose image</span>
                <input
                  accept="image/png,image/jpeg,image/webp"
                  type="file"
                  onChange={(event) => handleFileChange(slot.id, event.target.files?.[0])}
                />
              </label>

              <button className="admin-button primary" disabled type="button">
                Upload to Storage
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
