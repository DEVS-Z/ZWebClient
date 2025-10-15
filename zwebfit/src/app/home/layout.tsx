import FooterContainer from "@/components/layout/footer/FooterContainer";
import NavbarContainer from "@/components/layout/navbar/NavbarContainer";


export default function PublicLayout({ children }: { children: React.ReactNode }){
    return(
        <div className="flex min-h-screen">
            <div className="flex flex-col flex-1">
                <NavbarContainer />
                    <main className="bg-white flex-1 p-14">{children}</main>
                <FooterContainer />
            </div>
        </div>
    );
}