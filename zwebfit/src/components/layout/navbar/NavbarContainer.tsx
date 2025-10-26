"use client";
import PublicNavbarView from "./PublicNavbarView";
import AppNavbarView from "./AppNavbarView";

//CAMBIAR TRUE O FALSE PARA PROBAR NAVBAR PUBLICA O DE APP
export default function NavbarContainer({ isLoggedIn = false }:
    
    
    { isLoggedIn?: boolean }) {
  return isLoggedIn ? <AppNavbarView /> : <PublicNavbarView />;
}
