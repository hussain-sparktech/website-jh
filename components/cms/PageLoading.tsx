export function PageLoading({ label = "Loading content…" }: { label?: string }) {
  return (
    <div className="cms-page-loading" role="status" aria-live="polite">
      <span className="cms-page-loading__spinner" aria-hidden="true" />
      <p>{label}</p>
    </div>
  );
}
