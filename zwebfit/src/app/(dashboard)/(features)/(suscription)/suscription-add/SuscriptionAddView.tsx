import SuscriptionFormContainer from "@/components/feactures/module/suscription/suscriptionForm/SuscriptionFormContainer";


export default function SuscriptionAddView({ onSubmit }: { onSubmit: (event: React.FormEvent<HTMLFormElement>, formData: FormData) => void }){
    return(
        <div className="w-full">
            <div className="mb-8">
                <h5 className="text-xl text-black font-bold mb-2">Suscripcion</h5>
                <p className="text-gray-600">Crear nueva suscripcion</p>
            </div>
                
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1">
                <SuscriptionFormContainer onSubmit={onSubmit}/>
            </div>
        </div>
    );
}