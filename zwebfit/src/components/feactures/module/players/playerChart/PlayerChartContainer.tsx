import { ChartOptions } from "chart.js";
import PlayerChartView from "./PlayerChartView";


export default function PlayerChartContainer({data, options }: { data: any; options: ChartOptions<"line">; }){
    return <PlayerChartView data={data} options={options} />
}