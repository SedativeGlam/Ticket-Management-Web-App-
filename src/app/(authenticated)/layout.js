"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const default_tickets = [
  {
    id: "TICK-5821",
    title: "API connection is failing intermittently",
    description: "Connection drops randomly during calls.",
    created: "Oct 26, 2023",
    priority: "high",
    assignee: "Jane Doe",
    status: "in_progress",
  },
  {
    id: "TICK-5820",
    title: "Cannot reset user password from admin",
    description: "Admin reset flow returns 500 on some accounts.",
    created: "Oct 25, 2023",
    priority: "low",
    assignee: "John Smith",
    status: "open",
  },
  {
    id: "TICK-5819",
    title: "Dashboard analytics not loading",
    description: "Charts return empty dataset intermittently.",
    created: "Oct 24, 2023",
    priority: "medium",
    assignee: "Sara Connor",
    status: "closed",
  },
];

export default function AuthenticatedLayout({ children }) {
  const router = useRouter();

  const setDefaultTickets = () => {
    const defaultTicketsSet = localStorage.getItem("default_tickets_set");
    let defaultTickets;
    if (defaultTicketsSet === "true") {
      defaultTickets = localStorage?.getItem("default_tickets")
        ? JSON.parse(localStorage?.getItem("default_tickets"))
        : [];
    } else {
      localStorage.setItem("default_tickets", JSON.stringify(default_tickets));
      localStorage.setItem("default_tickets_set", "true");
    }
  };

  const handleRedirect = () => {
    const isLoggedIn = localStorage.getItem("ticketapp_session");

    if (isLoggedIn !== "true") {
      router.push("/login");
    }
  };

  useEffect(() => {
    setDefaultTickets();
  }, []);

  useEffect(() => {
    handleRedirect();
  }, [router]);

  return <>{children}</>;
}
