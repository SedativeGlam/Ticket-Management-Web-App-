"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import TicketSphereFooter from "@/components/pages/landing/TicketSphereFooter";
import Edit from "@/components/pages/management/Edit";

export default function ManageTicket() {
  const [tickets, setTickets] = useState([]);

  const [showEdit, setShowEdit] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const [deleteConfirm, setDeleteConfirm] = useState(null); // holds the ticket to delete

  const getTickets = () => {
    const tickets = JSON.parse(localStorage?.getItem("default_tickets")) || [];
    setTickets(tickets);
  };

  const handleOpenEdit = (ticket) => {
    setSelectedTicket(ticket);
    setShowEdit(true);
  };

  const handleCloseEdit = () => {
    setShowEdit(false);
    setSelectedTicket(null);
  };

  const handleSaveEdit = (updatedTicket) => {
    setTickets((prev) => {
      const newTickets = prev.map((t) =>
        t.id === updatedTicket.id ? { ...t, ...updatedTicket } : t
      );
      localStorage.setItem("default_tickets", JSON.stringify(newTickets));
      return newTickets;
    });

    handleCloseEdit();
  };

  // Show delete confirmation
  const handleConfirmDelete = (ticket) => {
    setDeleteConfirm(ticket);
  };

  // Delete confirmed
  const handleDelete = () => {
    setTickets((prev) => {
      const newTickets = prev.filter((t) => t.id !== deleteConfirm.id);
      localStorage.setItem("default_tickets", JSON.stringify(newTickets));
      return newTickets;
    });
    setDeleteConfirm(null);
  };

  // Cancel delete
  const handleCancelDelete = () => {
    setDeleteConfirm(null);
  };

  useEffect(() => {
    getTickets();
  }, []);

  return (
    <article className="bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-200 relative">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        {/* Header */}
        <header className="sticky top-0 z-10 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
                  <span className="material-symbols-outlined text-[#137fec] text-3xl">
                    apps
                  </span>
                  <span>TicketSphere</span>
                </div>
                <nav className="hidden md:flex items-center gap-2">
                  <Link
                    href="/dashboard"
                    className="px-3 py-2 rounded-md text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-[#137fec]"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="#"
                    className="px-3 py-2 rounded-md text-sm font-bold bg-[#137fec1a] text-[#137fec]"
                  >
                    Tickets
                  </Link>
                  <Link
                    href="#"
                    className="px-3 py-2 rounded-md text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-[#137fec]"
                  >
                    Reports
                  </Link>
                  <Link
                    href="#"
                    className="px-3 py-2 rounded-md text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-[#137fec]"
                  >
                    Settings
                  </Link>
                </nav>
              </div>
              <div className="flex items-center gap-4">
                <button className="flex items-center justify-center rounded-full h-10 w-10 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400">
                  <span className="material-symbols-outlined">
                    notifications
                  </span>
                </button>
                <button className="flex items-center justify-center rounded-full h-10 w-10 cursor-pointer">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8bhccTgq7MRFzq4aB9zhKvXgxGJtPIvizzVzviib1Ljtnf84uZJ-9DOerX9xLexAq7zcAFXu5vApRIsVOkPmREOIugLu73yu-4Y8kUCKnJHyMill4WjwIING6ho1ZnLx79KEs111156nbO6GHpmoqUh842LmRJrGZDrGlmuXzMsgL_yAE_8R8f0uLnzdc2E-ZVsF4149nNnRyHNyu3shU679q8blFcB9ejkgMyGWLpfq7aXwQwK0FCFhWncfbXrg7StSIBl7JpVc"
                    alt="user"
                  />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <h1 className="text-slate-900 dark:text-white text-[32px] font-bold tracking-tight">
              Manage Tickets
            </h1>

            <div className="flex items-center gap-3">
              <Link href={"/management/new-ticket"}>
                <button className="flex min-w-[84px] items-center justify-center rounded-lg h-12 px-5 bg-[#137fec] text-white text-sm font-bold hover:bg-primary/90 transition-colors gap-2 cursor-pointer">
                  <span className="material-symbols-outlined">add</span>
                  <span className="truncate">Create New Ticket</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Ticket Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {tickets.map((t) => (
              <div
                key={t.id}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 flex flex-col gap-4 transition-all hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                      {t.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {t.id} · Created: {t.created}
                    </p>
                  </div>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                      t.status === "in_progress"
                        ? "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300"
                        : t.status === "open"
                        ? "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300"
                        : "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300"
                    }`}
                  >
                    {t.status === "in_progress"
                      ? "In Progress"
                      : t.status === "open"
                      ? "Open"
                      : "Closed"}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={
                      t.assignee === "Jane Doe"
                        ? "https://i.pravatar.cc/40?img=1"
                        : t.assignee === "John Smith"
                        ? "https://i.pravatar.cc/40?img=2"
                        : "https://i.pravatar.cc/40?img=3"
                    }
                    alt={t.assignee}
                  />
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Assigned to
                    </p>
                    <p className="font-bold text-slate-700 dark:text-slate-300">
                      {t.assignee}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-2 border-t border-slate-100 dark:border-slate-700 pt-4">
                  <div className="flex items-center gap-1 text-sm font-bold text-red-600 dark:text-red-400">
                    <span className="material-symbols-outlined text-base">
                      priority_high
                    </span>
                    <span>
                      {t.priority === "high"
                        ? "High Priority"
                        : t.priority === "low"
                        ? "Low Priority"
                        : "Medium Priority"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      aria-label="Edit ticket"
                      onClick={() => handleOpenEdit(t)}
                      className="flex items-center justify-center h-9 w-9 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-primary transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-xl">
                        edit
                      </span>
                    </button>

                    <button
                      aria-label="Delete ticket"
                      onClick={() => handleConfirmDelete(t)}
                      className="flex items-center justify-center h-9 w-9 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-red-500 transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-xl">
                        delete
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Edit Modal */}
          {showEdit && selectedTicket && (
            <Edit
              ticket={selectedTicket}
              onClose={handleCloseEdit}
              onSave={handleSaveEdit}
            />
          )}

          {/* Delete Confirmation Modal */}
          {deleteConfirm && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center w-[90%] max-w-sm">
                <h2 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">
                  Delete Ticket?
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Are you sure you want to delete{" "}
                  <strong>{deleteConfirm.title}</strong>? This action cannot be
                  undone.
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={handleDelete}
                    className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
                  >
                    Continue
                  </button>
                  <button
                    onClick={handleCancelDelete}
                    className="bg-gray-300 dark:bg-slate-700 text-slate-900 dark:text-slate-100 px-5 py-2 rounded-lg hover:bg-gray-400 dark:hover:bg-slate-600"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>

        <footer className="w-full mt-auto">
          <div className="max-w-[1440px] mx-auto border-t border-slate-200 dark:border-slate-700 py-8 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
              <TicketSphereFooter />
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
}
