// PlayerChartView.tsx
import { ChartOptions } from "chart.js";
import { Line } from "react-chartjs-2";

export default function PlayerChartView({data, options}: { data: any; options: ChartOptions<"line">;}) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">BPM</h2>
        <select className="text-sm border border-gray-300 rounded-md px-2 py-1 text-gray-600">
          <option>All</option>
        </select>
      </div>

      <div className="h-[320px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
