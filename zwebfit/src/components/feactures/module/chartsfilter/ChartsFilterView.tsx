import React, { useState } from "react";
import ChartsFilterView, { ChartsState } from "./ChartsFilterView";

/**
 * 🧠 Container del ChartsFilter
 * Controla qué filtros están activos.
 */
const ChartsFilterContainer: React.FC = () => {
  const [filters, setFilters] = useState<ChartsState>({
    bmp: true,
    calories: true,
    gps: true,
  });

  return <ChartsFilterView value={filters} onChange={setFilters} />;
};

export default ChartsFilterContainer;
