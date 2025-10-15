export default function PublicHomePage() {
    // Datos de ejemplo - reemplaza con tus datos reales
    const players = [
        {
            id: 1,
            name: "Chicharito Hernandez",
            age: "37 Años",
            image: "/path-to-image.jpg", // Reemplaza con tu ruta
            positions: ["Delantero", "Defensa"]
        },
        {
            id: 2,
            name: "Chicharito Hernandez",
            age: "37 Años",
            image: "/path-to-image.jpg",
            positions: ["Delantero", "Defensa"]
        },
        {
            id: 3,
            name: "Chicharito Hernandez",
            age: "37 Años",
            image: "/path-to-image.jpg",
            positions: ["Delantero", "Defensa"]
        },
        {
            id: 4,
            name: "Chicharito Hernandez",
            age: "37 Años",
            image: "/path-to-image.jpg",
            positions: ["Delantero", "Defensa"]
        },
        {
            id: 5,
            name: "Chicharito Hernandez",
            age: "37 Años",
            image: "/path-to-image.jpg",
            positions: ["Delantero", "Defensa"]
        },
        {
            id: 6,
            name: "Chicharito Hernandez",
            age: "37 Años",
            image: "/path-to-image.jpg",
            positions: ["Delantero", "Defensa"]
        }
    ];

    return (
        <div className="w-full">
            <div className="mb-8">
                <h5 className="text-xl text-black font-bold mb-2">Player Roaster</h5>
                <p className="text-gray-600">All</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
                {players.map((player) => (
                    <div 
                        key={player.id} 
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-130"
                    >
                        {/* Imagen del jugador */}
                        <div className="relative h-75 bg-gradient-to-br from-blue-900 to-red-900">
                            <img 
                                src="https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0108%2Fr1274969_1296x729_16%2D9.jpg"
                                alt={player.name}
                                className="w-full h-full object-cover"

                            />
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-black text-lg mb-1">{player.name}</h3>
                            <p className="text-gray-500 text-sm mb-3">{player.age}</p>
                            
                            <div className="border-t border-gray-200 pt-3 mb-3">
                                <p className="text-xs text-gray-500 mb-2">Scores - Stats</p>
                            </div>
                            <div>
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
                ))}
            </div>
        </div>
    );
}