"use client";
import Link from "next/link";
import { useState } from "react";

export default function SidebarView() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`h-screen bg-gray-900 text-gray-100 transition-all duration-300 ${isOpen ? "w-64" : "w-20"} flex flex-col`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 text-gray-300 hover:text-green-400 focus:outline-none"
      >
        {isOpen ? "⬅" : "➡"}
      </button>

      <nav className="flex-1 px-2 space-y-4">
        <Link href="/" className="block py-2 px-3 rounded hover:bg-gray-800 transition">
          {isOpen ? "🏠 Home" : "🏠"}
        </Link>
        <Link href="/dashboard" className="block py-2 px-3 rounded hover:bg-gray-800 transition">
          {isOpen ? "📊 Dashboard" : "📊"}
        </Link>
        <Link href="/settings" className="block py-2 px-3 rounded hover:bg-gray-800 transition">
          {isOpen ? "⚙ Configuración" : "⚙"}
        </Link>
      </nav>
    </div>
  );
}
