"use client";
import { useAuth } from "./context/authContext";
import UserHomeContainer from "@/components/Features/users/user-home/UserHomeContainer";
import HomeContainer from "@/components/Features/home/HomeContainer";

export default function HomePage() {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <UserHomeContainer /> : <HomeContainer />;
}
