import SuscriptionFormView from "./SuscriptionFormView";


export default function SuscriptionFormContainer({onSubmit, }: { onSubmit: (event: React.FormEvent<HTMLFormElement>, formData: FormData) => void; }){
    return <SuscriptionFormView onSubmit={onSubmit}/>
}