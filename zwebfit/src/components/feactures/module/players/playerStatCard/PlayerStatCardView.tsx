import { IPlayerStat } from "@/models/modules/IPlayerStat";

export default function PlayerStatCardView({ playerStat }: { playerStat: IPlayerStat }) {
  return (
    <div className="flex items-center justify-between bg-white border border-gray-200 rounded-2xl shadow-sm p-6 w-full">
      <div className="flex items-center gap-4">
        <img
          src={playerStat.player.image}
          alt={playerStat.player.name}
          className="w-20 h-20 rounded-xl object-cover"
        />
        <div>
          <p className="text-sm text-gray-500">
             {playerStat.player.positions }
          </p>
          <h2 className="text-lg font-semibold text-gray-900">
            {playerStat.player.name } –{" "}
            {playerStat.player.age } Years Old
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Recorded stats: Heart rate, burnt calories, GPS trayectory, oxygen in blood
          </p>
        </div>
      </div>
    </div>
  );
}
