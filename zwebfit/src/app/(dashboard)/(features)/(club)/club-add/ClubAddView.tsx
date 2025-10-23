import ClubFormAddContainer from "@/components/feactures/module/clubs/forms/ClubFormAdd/ClubFormAddContainer"


export default function ClubAddView({ onSubmit }: { onSubmit: (event: React.FormEvent<HTMLFormElement>, formData: FormData) => void }){
    return(
        <div className="w-full">
            <div className="mb-8">
                <h5 className="text-xl text-black font-bold mb-2">Sessions</h5>
                <p className="text-gray-600">All</p>
            </div>
            <ClubFormAddContainer onSubmit={onSubmit}/>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1">
            </div>
        </div>
    )
}