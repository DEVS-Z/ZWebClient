import React, { useMemo, useState } from "react";
import PlayersFilterView, { Player } from "./PlayersFilterView";

/**
 * 🧠 Container de PlayersFilter — maneja estado y datos.
 */
const PlayersFilterContainer: React.FC = () => {
  // Lista de jugadores (puedes reemplazarla por tus datos reales)
  const players = useMemo<Player[]>(
    () => [
      { id: 1, name: "Chicharito Hernandez" },
      { id: 2, name: "El CR7" },
      { id: 3, name: "Messi" },
      { id: 4, name: "Pedro Marquez" },
      { id: 5, name: "Cuau Blanco" },
      { id: 6, name: "Cuau Moreno" },
    ],
    []
  );

  // Estado: IDs de jugadores seleccionados
  const [selected, setSelected] = useState<number[]>(players.map((p) => p.id));

  // Renderiza la vista, pasándole los datos y el manejador de cambios
  return (
    <PlayersFilterView
      players={players}
      selected={selected}
      onChange={setSelected}
    />
  );
};

export default PlayersFilterContainer;
