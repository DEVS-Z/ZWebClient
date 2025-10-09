"use client";
import { useAuth } from "@/app/context/authContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import SidebarContainer from "@/components/layout/sidebar/SidebarContainer";
import NavbarContainer from "@/components/layout/navbar/NavbarContainer";
import FooterContainer from "@/components/layout/footer/FooterContainer";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/home"); // redirige si no está logueado
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) return null;

  return (
    <div className="flex min-h-screen">
      <SidebarContainer />
      <div className="flex flex-col flex-1">
        <NavbarContainer />
        <main className="flex-1 p-6">{children}</main>
        <FooterContainer />
      </div>
    </div>
  );
}
