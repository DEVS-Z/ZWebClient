"use client";
import { useEffect, useState } from "react";
import ClubHomeView from "./ClubHomeView";
import { IClub } from "@/models/modules/IClub";
import { ClubService } from "../Services/ClubService";

export default function ClubHomePage(){
    const service = new ClubService();
    const [data, setData] = useState<IClub[]>([]);
    const [loading, setLoading] = useState(true);
    
        useEffect(() => {
            const fetchData = async () => {
                const res = await service.GetAll();
                setData(res.data);
                setLoading(false);
            };
            
            fetchData(); 
        }, []);
    return <ClubHomeView clubs={data}/>
}