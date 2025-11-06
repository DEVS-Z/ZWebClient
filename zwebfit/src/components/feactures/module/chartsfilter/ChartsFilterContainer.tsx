import React from "react";
import CheckboxContainer from "../checkbox/CheckboxContainer";

export interface ChartsState {
  bmp: boolean;
  calories: boolean;
  gps: boolean;
}

export interface ChartsFilterViewProps {
  value: ChartsState;
  onChange?: (next: ChartsState) => void;
}

/**
 * 🎨 Vista del ChartsFilter
 * Solo muestra los tres checkboxes con su estilo.
 */
const ChartsFilterView: React.FC<ChartsFilterViewProps> = ({ value, onChange }) => {
  const toggle = (key: keyof ChartsState, checked: boolean) => {
    onChange?.({ ...value, [key]: checked });
  };

  return (
    <section className="w-full max-w-sm rounded-lg border bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100">
      <h3 className="mb-2 text-sm font-semibold">Charts</h3>
      <div className="space-y-1">
        <CheckboxContainer label="BMP" defaultChecked={value.bmp} onChange={(v) => toggle("bmp", v)} />
        <CheckboxContainer label="Calories Burnt" defaultChecked={value.calories} onChange={(v) => toggle("calories", v)} />
        <CheckboxContainer label="GPS" defaultChecked={value.gps} onChange={(v) => toggle("gps", v)} />
      </div>
    </section>
  );
};

export default ChartsFilterView;
