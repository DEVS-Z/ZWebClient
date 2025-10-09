"use client";
import { useEffect } from "react";
import { useAuth } from "./context/authContext";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/(dashboard)/dashboard-home");
    } else {
      router.push("/home");
    }
  }, [isLoggedIn, router]);

  return null;
}
