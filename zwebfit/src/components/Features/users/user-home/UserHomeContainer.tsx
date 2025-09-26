// src/components/Features/users/user-home/UserHomeContainer.tsx
"use client";

import { useEffect, useState } from "react";
import UserHomeView from "./UserHomeView";

export default function UserHomeContainer() {
  const [username, setUsername] = useState("Invitado");
  const [stats, setStats] = useState(0);

  useEffect(() => {
    // Simulación de API call
    setTimeout(() => {
      setUsername("Antonio");
      setStats(42);
    }, 1000);
  }, []);

  return <UserHomeView username={username} stats={stats} />;
}
