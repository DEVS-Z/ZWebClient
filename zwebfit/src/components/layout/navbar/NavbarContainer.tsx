"use client";
import { useState } from "react";
import PublicNavbarView from "./PublicNavbarView";
import AppNavbarView from "./AppNavbarView";
import { useAuth } from "@/app/context/authContext";
import { useRouter } from "next/navigation";

export default function NavbarContainer() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [isNotificationPanelOpen, setIsNotificationPanelOpen] = useState(false);
  const unreadCount = 2; // Mock unread count
  const router = useRouter();

  const toggleNotificationPanel = () => {
    setIsNotificationPanelOpen(!isNotificationPanelOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
    router.push("/login");
  };

  return isLoggedIn ? (
    <AppNavbarView 
      isNotificationPanelOpen={isNotificationPanelOpen}
      toggleNotificationPanel={toggleNotificationPanel}
      onCloseNotificationPanel={() => setIsNotificationPanelOpen(false)}
      unreadCount={unreadCount}
      onLogout={handleLogout}
    />
  ) : (
    <PublicNavbarView />
  );
}
