export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading"
      className="flex min-h-[60vh] flex-col items-center justify-center gap-6 section-padding-x pt-40"
    >
      <div
        aria-hidden
        className="relative flex h-20 w-20 items-center justify-center"
      >
        <span className="absolute inset-0 rounded-full border border-tertiary-500/20" />
        <span className="absolute inset-0 animate-[spin_1.6s_linear_infinite] rounded-full border border-transparent border-t-tertiary-500" />
        <span className="block h-2 w-2 rotate-45 bg-tertiary-500" />
      </div>
      <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-tertiary-600">
        One moment
      </p>
    </div>
  );
}
