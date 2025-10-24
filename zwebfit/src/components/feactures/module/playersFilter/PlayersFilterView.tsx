import React from "react";
import CheckboxContainer from "../checkbox/CheckboxContainer";

export interface Player {
  id: number;
  name: string;
}

export interface PlayersFilterViewProps {
  players: Player[];
  selected: number[];                 // IDs seleccionados
  onChange?: (ids: number[]) => void; // callback cuando cambia la selección
}

/**
 * 🎨 Vista de PlayersFilter — solo UI.
 */
const PlayersFilterView: React.FC<PlayersFilterViewProps> = ({
  players,
  selected,
  onChange,
}) => {
  // Agrega o quita un id del conjunto seleccionado
  const setOne = (id: number, checked: boolean) => {
    const next = new Set(selected);
    checked ? next.add(id) : next.delete(id);
    onChange?.(Array.from(next));
  };

  // Select all / Clear
  const allSelected = selected.length === players.length;
  const toggleAll = () => onChange?.(allSelected ? [] : players.map((p) => p.id));

  return (
    <section className="w-full max-w-sm rounded-lg border bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-sm font-semibold">Players ({players.length})</h3>
        <button
          onClick={toggleAll}
          className="text-xs font-medium text-violet-600 hover:underline"
        >
          {allSelected ? "Clear" : "Select all"}
        </button>
      </div>

      <div className="max-h-72 space-y-1 overflow-auto pr-1">
        {players.map((p) => (
          <CheckboxContainer
            key={p.id}
            label={p.name}
            defaultChecked={selected.includes(p.id)}
            onChange={(v) => setOne(p.id, v)}
          />
        ))}
      </div>
    </section>
  );
};

export default PlayersFilterView;
