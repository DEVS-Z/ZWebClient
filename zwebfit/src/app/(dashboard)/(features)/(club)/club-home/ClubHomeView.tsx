import ClubCardContainer from "@/components/feactures/module/clubs/clubCard/ClubCardContainer";
import { IClub } from "@/models/modules/IClub";
import Link from "next/link";

export default function ClubHomeView({ clubs }: { clubs: IClub[] }) {
    return (
        <div className="w-full">
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h5 className="text-xl text-black font-bold mb-2">Your Clubs</h5>
                    <p className="text-gray-600">All</p>
                </div>

                <Link href="/club-add">
                    <button className="bg-black text-white font-medium px-4 py-2 rounded-md hover:bg-gray-800 transition">
                        Crear
                    </button>
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-14">
                {clubs.map((club) => (
                    <ClubCardContainer club={club} key={club.ClubId} />
                ))}
            </div>
        </div>
    );
}
