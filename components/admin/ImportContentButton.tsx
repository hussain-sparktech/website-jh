"use client";

import { useState } from "react";
import { seedAllPagesFromDefaults } from "@/lib/cms/firestore";

export function ImportContentButton() {
  const [seeding, setSeeding] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSeed() {
    setSeeding(true);
    setMessage(null);
    setError(null);

    try {
      await seedAllPagesFromDefaults();
      setMessage("Imported.");
    } catch (seedError) {
      console.error(seedError);
      setError("Import failed. Check Firestore rules.");
    } finally {
      setSeeding(false);
    }
  }

  return (
    <div className="admin-import">
      <button className="admin-button primary" disabled={seeding} type="button" onClick={handleSeed}>
        {seeding ? "Importing…" : "Import site to Firestore"}
      </button>
      {message ? <p className="admin-success">{message}</p> : null}
      {error ? <p className="admin-error">{error}</p> : null}
    </div>
  );
}
