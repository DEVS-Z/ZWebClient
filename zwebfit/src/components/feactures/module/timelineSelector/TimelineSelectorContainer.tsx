import React, { useMemo, useState } from "react";
import TimelineSelectorView, { TimelineRange } from "./TimelineSelectorView";

/**
 * 🧠 Container del TimelineSelector
 * Controla el estado del rango seleccionado y los datos base.
 */
const TimelineSelectorContainer: React.FC = () => {
  // Define los rangos de tiempo una sola vez
  const ranges = useMemo<TimelineRange[]>(() => [
    { start: "00:00", end: "10:00" },
    { start: "10:01", end: "20:00" },
    { start: "20:01", end: "30:00" },
    { start: "30:01", end: "40:00" },
  ], []);

  // Estado local del rango seleccionado
  const [selected, setSelected] = useState<TimelineRange | null>(ranges[0]);

  // Renderiza la vista con los datos y la función para cambiar el rango
  return <TimelineSelectorView ranges={ranges} value={selected} onSelect={setSelected} />;
};

export default TimelineSelectorContainer;
