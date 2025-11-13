"use client";
import { useAuth } from "@/app/context/authContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
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
      <div className="flex flex-col flex-1">
        <NavbarContainer />
          <main className="bg-white flex-1 p-14">{children}</main>
        <FooterContainer />
      </div>
    </div>
  );
}
