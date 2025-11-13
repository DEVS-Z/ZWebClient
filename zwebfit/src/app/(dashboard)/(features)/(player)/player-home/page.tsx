import PlayerHomeView from "./PlayerHomeView";
const players = [
        {
            id: 1,
            name: "Chicharito Hernandez",
            age: "37 Años",
            image: "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0108%2Fr1274969_1296x729_16%2D9.jpg", // Reemplaza con tu ruta
            positions: ["Delantero", "Defensa"]
        },
        {
            id: 2,
            name: "Chicharito Hernandez",
            age: "37 Años",
            image: "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0108%2Fr1274969_1296x729_16%2D9.jpg",
            positions: ["Delantero", "Defensa"]
        },
        {
            id: 3,
            name: "Chicharito Hernandez",
            age: "37 Años",
            image: "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0108%2Fr1274969_1296x729_16%2D9.jpg",
            positions: ["Delantero", "Defensa"]
        },
        {
            id: 4,
            name: "Chicharito Hernandez",
            age: "37 Años",
            image: "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0108%2Fr1274969_1296x729_16%2D9.jpg",
            positions: ["Delantero", "Defensa"]
        },
        {
            id: 5,
            name: "Chicharito Hernandez",
            age: "37 Años",
            image: "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0108%2Fr1274969_1296x729_16%2D9.jpg",
            positions: ["Delantero", "Defensa"]
        },
        {
            id: 6,
            name: "Chicharito Hernandez",
            age: "37 Años",
            image: "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0108%2Fr1274969_1296x729_16%2D9.jpg",
            positions: ["Delantero", "Defensa"]
        }
    ];

export default function PlayerHomePage(){
    return <PlayerHomeView players={players} />
}