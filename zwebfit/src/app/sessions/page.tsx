
import SessionSelectorContainer from "@/components/feactures/module/sessions/sessionSelector/SessionSelectorContainer";
{/*import SessionCardContainer from "@/components/feactures/module/sessions/sessionCard/SessionCardContainer";
*/

/*Las cards las converti a listar para que se genereen en 
sessionlistview, despues ahiu consumiremos el api */}
import SectionHeaderContainer from "@/components/common/sectionHeader/SectionHeaderContainer";
import SessionListContainer from "@/components/feactures/module/sessions/sessionList/SessionListContainer";


export default function SessionsPage() {
  return ( 
      <main className="p-6 flex flex-col gap-6">
      
      <SessionSelectorContainer />
      <SectionHeaderContainer />
      {/*<SessionCardContainer /> Lo movi a listas que se mapean, para despues cuando 
      llegue el uso de las apis*/}      
      <SessionListContainer />     
    </main>
  );
}



 