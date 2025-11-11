import { IClub } from "@/models/modules/IClub";
import { faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function ClubCardView({club} : {club : IClub}){
    return(
        <div  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-110 border border-gray-200">
            <div className="relative h-75 bg-green flex items-center justify-center">
                <img
                src={club.clubImage}
                alt={club.Nombre}
                className="w-4/6 h-full"
                />
            </div>
            <div className="p-4 border-t border-gray-200">
                <h3 className="font-bold text-black text-lg">{club.Nombre}</h3>
                <p className="font-bold text-black text-lg">{club.Pais}</p>
                <div className="flex items-center justify-between mt-2">
  
                    <div className="flex flex-col gap-1">
                        <p className="text-xs text-gray-500">{club.tagName}</p> 
                        <p className="text-xs text-gray-500">Owned by: {club.OwnerId}</p>
                    </div>

                    <div className="flex flex-col items-center gap-1 border border-gray-300 rounded px-3 py-2 w-12 h-14">
                        <FontAwesomeIcon icon={faUsers} className="text-sm text-gray-600" />
                        <div className="text-sm font-semibold text-black text-center leading-tight">
                        {club.members}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}