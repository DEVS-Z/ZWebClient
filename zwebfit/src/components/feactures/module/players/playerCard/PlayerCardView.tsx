import { IPlayer } from "@/models/modules/IPlayer";

export default function PlayerView({ player }: { player: IPlayer }) {
  return (
    <div key={player.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-64 bg-gradient-to-br from-blue-900 to-red-900">
        <img
          src={player.image}
          alt={player.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-black text-lg mb-1">{player.name}</h3>
        <p className="text-gray-500 text-sm mb-3">{player.age}</p>

        {/* Stats section */}
        {player.stats && (
          <div className="border-t border-gray-200 pt-3 mb-3">
            <div className="grid grid-cols-2 gap-2 text-xs">
              {player.stats.running !== undefined && (
                <p className="text-gray-700">
                  <span className="font-semibold">Running:</span> {player.stats.running}
                </p>
              )}
              {player.stats.stamina !== undefined && (
                <p className="text-gray-700">
                  <span className="font-semibold">Stamina:</span> {player.stats.stamina}
                </p>
              )}
              {player.stats.speed !== undefined && (
                <p className="text-gray-700">
                  <span className="font-semibold">Speed:</span> {player.stats.speed}
                </p>
              )}
              {player.stats.strength !== undefined && (
                <p className="text-gray-700">
                  <span className="font-semibold">Strength:</span> {player.stats.strength}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Positions section */}
        <div className="border-t border-gray-200 pt-3">
          <p className="text-xs font-semibold text-gray-700 mb-2">Posiciones</p>
          <div className="flex gap-2 flex-wrap">
            {player.positions.map((position, index) => (
              <span
                key={index}
                className="text-black px-3 py-1 text-xs border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
              >
                {position}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
