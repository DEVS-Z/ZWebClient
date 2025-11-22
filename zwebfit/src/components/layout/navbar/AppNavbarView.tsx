"use client";
import Link from "next/link";
import { Bell, User } from "lucide-react";
import NotificationPanelContainer from "@/components/feactures/module/notifications/notificationPanel/NotificationPanelContainer";

type AppNavbarViewProps = {
  playerName?: string;
  isNotificationPanelOpen: boolean;
  toggleNotificationPanel: () => void;
  onCloseNotificationPanel: () => void;
  unreadCount: number;
};

export default function AppNavbarView({ 
  playerName = "__________________",
  isNotificationPanelOpen,
  toggleNotificationPanel,
  onCloseNotificationPanel,
  unreadCount
}: AppNavbarViewProps) {
  return (
    <header className="bg-white border-b border-gray-200 relative z-50">
  <div className="w-full grid grid-cols-[auto_1fr_auto] items-center px-4 sm:px-6 lg:px-8 h-24">
   {/* IZQUIERDA: Logo */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
            <span className="text-white text-xs">⚽</span>
          </div>
          <span className="text-xl font-bold text-black">ZFut</span>
        </div>

        {/* CENTRO: Espaciador */}
        <div />

        {/* DERECHA: Bienvenida + Acciones */}
        <div className="flex items-center gap-8 justify-end">
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900 text-sm hover:underline underline-offset-4">Planes</Link>
          </nav>
          <p className="hidden sm:block text-sm text-gray-800">
            <span className="font-medium">Bienvenido,</span> {playerName}
          </p>

          <div className="relative">
            <button
              onClick={toggleNotificationPanel}
              className="p-2 rounded-full hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 relative"
              aria-label="Notificaciones"
            >
              <Bell className="w-5 h-5 text-gray-700" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 bg-red-600 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>
            
            <NotificationPanelContainer
              isOpen={isNotificationPanelOpen}
              onClose={onCloseNotificationPanel}
            />
          </div>

          <Link
            href="/profile"
            aria-label="Perfil"
            className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300"
          >
            <User className="w-4 h-4" />
          </Link>

          <Link
            href="/logout"
            className="px-4 py-2 text-sm font-medium bg-neutral-900 text-white rounded-md hover:bg-neutral-800 transition-colors"
          >
            Cerrar sesión
          </Link>
        </div>
      </div>
    </header>
  );
}
