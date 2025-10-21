import ClubCardContainer from "@/components/feactures/module/clubs/clubCard/ClubCardContainer";
import { IClub } from "@/models/modules/IClub";


export default function ClubHomeView({clubs} : {clubs : IClub[]}){
    return(
        <div className="w-full">
            <div className="mb-8">
                <h5 className="text-xl text-black font-bold mb-2">Your Clubs</h5>
                <p className="text-gray-600">All</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-14">
                {clubs.map((club) => (
                    <ClubCardContainer club={club} key={club.id} />
                ))}
            </div>
        </div>
    );
}