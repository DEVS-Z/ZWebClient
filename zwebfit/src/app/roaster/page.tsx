import SessionSelectorContainer from "@/components/feactures/module/sessions/sessionSelector/SessionSelectorContainer";
import PlayerCardContainer from "@/components/feactures/module/players/playerCard/PlayerCardContainer";
import { IPlayer } from "@/models/modules/IPlayer";

// Mock players data with different soccer players
const mockPlayers: IPlayer[] = [
  {
    id: 1,
    name: "Javier Hernández",
    age: "37 Años",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=400&fit=crop",
    positions: ["Delantero", "Defensa"],
    stats: {
      running: 75,
      stamina: 80,
      speed: 85,
      strength: 70,
    },
  },
  {
    id: 2,
    name: "Guillermo Ochoa",
    age: "39 Años",
    image: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400&h=400&fit=crop",
    positions: ["Portero"],
    stats: {
      running: 60,
      stamina: 85,
      speed: 55,
      strength: 75,
    },
  },
  {
    id: 3,
    name: "Raúl Jiménez",
    age: "33 Años",
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=400&h=400&fit=crop",
    positions: ["Delantero", "Mediocampista"],
    stats: {
      running: 80,
      stamina: 78,
      speed: 82,
      strength: 85,
    },
  },
  {
    id: 4,
    name: "Héctor Moreno",
    age: "36 Años",
    image: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=400&h=400&fit=crop",
    positions: ["Defensa"],
    stats: {
      running: 70,
      stamina: 82,
      speed: 68,
      strength: 88,
    },
  },
  {
    id: 5,
    name: "Hirving Lozano",
    age: "29 Años",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=400&fit=crop",
    positions: ["Delantero", "Mediocampista"],
    stats: {
      running: 88,
      stamina: 85,
      speed: 92,
      strength: 72,
    },
  },
  {
    id: 6,
    name: "Andrés Guardado",
    age: "38 Años",
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=400&h=400&fit=crop",
    positions: ["Mediocampista", "Defensa"],
    stats: {
      running: 72,
      stamina: 88,
      speed: 70,
      strength: 75,
    },
  },
  {
    id: 7,
    name: "Diego Lainez",
    age: "26 Años",
    image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400&h=400&fit=crop",
    positions: ["Delantero", "Mediocampista"],
    stats: {
      running: 85,
      stamina: 80,
      speed: 90,
      strength: 65,
    },
  },
  {
    id: 8,
    name: "Edson Álvarez",
    age: "27 Años",
    image: "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?w=400&h=400&fit=crop",
    positions: ["Mediocampista", "Defensa"],
    stats: {
      running: 78,
      stamina: 86,
      speed: 75,
      strength: 82,
    },
  },
  {
    id: 9,
    name: "Jesús Corona",
    age: "31 Años",
    image: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=400&h=400&fit=crop",
    positions: ["Defensa", "Mediocampista"],
    stats: {
      running: 76,
      stamina: 84,
      speed: 78,
      strength: 80,
    },
  },
];

export default function RoasterPage() {
  return (
    <main className="p-6 flex flex-col gap-6">
      
      <SessionSelectorContainer />
      
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold text-black mb-2">Player Roaster</h2>
        <p className="text-gray-600">All</p>
      </div>

      {/* Players grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockPlayers.map((player) => (
          <PlayerCardContainer player={player} key={player.id} />
        ))}
      </div>
    </main>
  );
}
