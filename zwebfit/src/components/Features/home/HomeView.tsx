import FooterContainer from "@/components/layout/footer/FooterContainer";
import NavbarContainer from "@/components/layout/navbar/NavbarContainer"

export default function HomeView(){
    return(
        <div>
            <NavbarContainer></NavbarContainer> 
            <div className="flex">
            </div>  
            <FooterContainer></FooterContainer>
        </div>
    );
}