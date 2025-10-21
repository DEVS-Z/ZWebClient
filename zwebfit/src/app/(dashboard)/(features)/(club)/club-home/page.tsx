import ClubHomeView from "./ClubHomeView";

const clubs = [
        {
            id: 1,
            name: "Chivas",
            tagName: "Club deportivo de Guadalajara",
            clubImage: "https://1000marcas.net/wp-content/uploads/2020/03/Chivas-Logo-2017.png",
            ownerName: "La Pulga",
            members : 16
        },
        {
            id: 2,
            name: "Chivas",
            tagName: "Club deportivo de Guadalajara",
            clubImage: "https://1000marcas.net/wp-content/uploads/2020/03/Chivas-Logo-2017.png", 
            ownerName: "La Pulga",
            members : 16
        },
        {
            id: 3,
            name: "Chivas",
            tagName: "Club deportivo de Guadalajara",
            clubImage: "https://1000marcas.net/wp-content/uploads/2020/03/Chivas-Logo-2017.png", 
            ownerName: "La Pulga",
            members : 16
        },
        {
            id: 4,
            name: "Chivas",
            tagName: "Club deportivo de Guadalajara",
            clubImage: "https://1000marcas.net/wp-content/uploads/2020/03/Chivas-Logo-2017.png", 
            ownerName: "La Pulga",
            members : 16
        }
    ];

export default function ClubHomePage(){
    return <ClubHomeView clubs={clubs}/>
}