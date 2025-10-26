"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function UnauthenticatedLayout({ children }) {
  const router = useRouter();

  const handleRedirectDashboard = () => {
    const isLoggedIn = localStorage.getItem("ticketapp_session");

    if (isLoggedIn == "true") {
      router.push("/dashboard");
    }
  };

  useEffect(() => {
    handleRedirectDashboard();
  }, [router]);

  return <>{children}</>;
}
