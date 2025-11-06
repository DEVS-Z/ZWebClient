import React from "react";

export interface TimelineRange {
  start: string;
  end: string;
}

export interface TimelineSelectorViewProps {
  ranges: TimelineRange[];
  value: TimelineRange | null;
  onSelect?: (range: TimelineRange) => void;
}

/**
 * 🎨 Vista del TimelineSelector
 * Muestra los rangos de tiempo y cuál está seleccionado.
 */
const TimelineSelectorView: React.FC<TimelineSelectorViewProps> = ({ ranges, value, onSelect }) => {
  const cx = (...c: Array<string | false | null | undefined>) => c.filter(Boolean).join(" ");

  return (
    <section className="w-full max-w-sm rounded-2xl bg-white p-4 shadow-sm dark:bg-neutral-900 dark:text-neutral-100">
      {/* Encabezado */}
      <header className="mb-3">
        <p className="text-sm font-semibold tracking-wide text-violet-500">Timeline</p>
        <h2 className="text-xl font-semibold leading-tight">Select a time to view</h2>
      </header>

      {/* Lista de rangos */}
      <ul className="space-y-2">
        {ranges.map((r, i) => {
          const active = value?.start === r.start && value?.end === r.end;
          return (
            <li key={`${r.start}-${r.end}`}>
              <button
                onClick={() => onSelect?.(r)}
                className={cx(
                  "flex w-full items-center justify-between rounded-lg border px-3 py-2 text-left text-sm",
                  "border-neutral-200 dark:border-neutral-700",
                  active
                    ? "bg-neutral-200 font-semibold dark:bg-neutral-800"
                    : "hover:bg-neutral-100 dark:hover:bg-neutral-800/60"
                )}
              >
                <span className="tabular-nums">{r.start} — {r.end}</span>
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border text-xs font-semibold dark:border-neutral-600">
                  {i + 1}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TimelineSelectorView;
