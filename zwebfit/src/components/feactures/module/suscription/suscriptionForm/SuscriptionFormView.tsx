

export default function SuscriptionFormView({onSubmit, }: { onSubmit: (event: React.FormEvent<HTMLFormElement>, formData: FormData) => void; }){
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();                 
        const formData = new FormData(event.currentTarget);
        onSubmit(event, formData);              
    };
    return(
        <div className="flex flex-col md:flex-row gap-6">
            <form onSubmit={handleSubmit} className="flex-1 bg-white border border-gray-200 rounded-xl p-6 space-y-4">
                <div>
                    <label htmlFor="name" className="block font-medium text-gray-800 mb-1">Nombre la suscription</label>
                    <input type="text" name="Nombre" id="Nombre" placeholder="Value" className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"/>
                </div>
                <div>
                    <label className="block font-medium text-gray-800 mb-1">Precio</label>
                    <input
                        type="number"
                        name="Precio"
                        placeholder="Value"
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                </div>
                <div>
                    <label className="block font-medium text-gray-800 mb-1">Cantidad de jugadores</label>
                    <input
                        type="number"
                        name="CantPlayers"
                        placeholder="Value"
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                </div>
                <button type="submit" className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors">
                Submit
                </button>
            </form>
        </div>
    )
}