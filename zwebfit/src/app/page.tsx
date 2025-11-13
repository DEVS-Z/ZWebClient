"use client";
import { useEffect } from "react";
import { useAuth } from "./context/authContext";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/events");
    } else {
      router.push("/events");
    }
  }, [isLoggedIn, router]);

  return null;
}
