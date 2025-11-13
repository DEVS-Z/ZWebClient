"use client";
import ClubAddView from "./ClubAddView";


export default function ClubAddPage(){
    const handleClubSubmit = (event: React.FormEvent<HTMLFormElement>, formData: FormData) => {
        const data = Object.fromEntries(formData.entries());
        console.log("Datos recibidos en la página:", data);
    };
    return <ClubAddView onSubmit={handleClubSubmit}/>
}