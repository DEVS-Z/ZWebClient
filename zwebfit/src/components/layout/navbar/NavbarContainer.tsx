"use client";
import { useState, useEffect } from "react";
import PublicNavbarView from "./PublicNavbarView";
import AppNavbarView from "./AppNavbarView";

export default function NavbarContainer() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isNotificationPanelOpen, setIsNotificationPanelOpen] = useState(false);
  const unreadCount = 2; // Mock unread count

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const toggleNotificationPanel = () => {
    setIsNotificationPanelOpen(!isNotificationPanelOpen);
  };

  return isLoggedIn ? (
    <AppNavbarView 
      isNotificationPanelOpen={isNotificationPanelOpen}
      toggleNotificationPanel={toggleNotificationPanel}
      onCloseNotificationPanel={() => setIsNotificationPanelOpen(false)}
      unreadCount={unreadCount}
    />
  ) : (
    <PublicNavbarView />
  );
}
