import { CustomSelectProps } from "@/models/common/select/ISelect";
import Select2DynamicView from "./Select2DynamicView";


export default function Select2DynamicContainer({ select2 } : {select2 : CustomSelectProps}){
    return <Select2DynamicView select2={select2}/>
}