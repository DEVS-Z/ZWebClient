"use client";
import { useState, useEffect } from "react";
import PublicNavbarView from "./PublicNavbarView";
import AppNavbarView from "./AppNavbarView";

export default function NavbarContainer() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return isLoggedIn ? <AppNavbarView /> : <PublicNavbarView />;
}
