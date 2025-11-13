"use client";
import { IPlayer } from "@/models/modules/IPlayer";
import { PlayerService } from "../Services/PlayerService";
import PlayerHomeView from "./PlayerHomeView";
import { useEffect, useState } from "react";

export default function PlayerHomePage(){
    const service = new PlayerService();
        const [data, setData] = useState<IPlayer[]>([]);
        const [loading, setLoading] = useState(true);
        
            useEffect(() => {
                const fetchData = async () => {
                    const res = await service.GetAll();
                    setData(res.data);
                    setLoading(false);
                };
                
                fetchData(); 
            }, []);
    return <PlayerHomeView players={data} />
}