"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  children: React.ReactNode;
};

export function AdminNavLink({ href, children }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const base = "flex items-center gap-2 px-4 py-2 rounded-md font-medium";
  const active = isActive
    ? "bg-gray-700 text-white"
    : "text-gray-300 hover:bg-gray-700 hover:text-white";

  return (
    <Link href={href} className={`${base} ${active}`}>
      {children}
    </Link>
  );
}
