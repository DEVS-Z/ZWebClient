"use client";
import { FormHelper } from "@/lib/helpers/formhelper";
import ClubSuscriptionView from "./ClubSuscriptionView";
import { ClubSuscriptionService } from "./Service/ClubSuscriptionService";
import { IClubSuscription } from "@/models/modules/ISuscription";
import { useEffect, useState } from "react";


export default function ClubSuscriptionPage(){
    const service = new ClubSuscriptionService();
    const [data, setData] = useState<IClubSuscription[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            console.log("1. useEffect ejecutándose");
        console.log("2. typeof window:", typeof window);
        console.log("3. Token en localStorage:", localStorage.getItem("token"));
            const res = await service.GetAll();
            setData(res.data);
            setLoading(false);
        };
        
        fetchData(); 
    }, []);

    
    return <ClubSuscriptionView clubSuscriptions={data}  /> 
}