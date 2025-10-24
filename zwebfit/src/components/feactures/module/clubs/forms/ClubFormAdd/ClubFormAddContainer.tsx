"use client";
import ClubFormAddView from "./ClubFormAddView";
import { IClub } from "@/models/modules/IClub";

export default function ClubFormAddContainer({onSubmit, }: { onSubmit: (event: React.FormEvent<HTMLFormElement>, formData: FormData) => void; }) 
{
  return <ClubFormAddView onSubmit={onSubmit} />;
}
