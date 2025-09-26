"use client";

import { useState } from "react";
import UserHomeContainer from "@/components/Features/users/user-home/UserHomeContainer";

export default function HomePage() {
  const [showUserHome, setShowUserHome] = useState(false);

  if (showUserHome) {
    return <UserHomeContainer />;
  }

  return (
    <div>
      
    </div>
  );
}
