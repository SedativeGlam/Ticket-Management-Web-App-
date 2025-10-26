"use client";

import TicketSphereFooter from "@/components/pages/landing/TicketSphereFooter";
import Link from "next/link";
import { useRouter } from "next/navigation";

import toast, { Toaster } from "react-hot-toast";

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.setItem("ticketapp_session", "false");
    router.push("/login");
  };

  return (
    <main className="font-display bg-background-light dark:bg-background-dark">
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="flex min-h-screen w-full flex-col">
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col">
          <header className="flex items-center justify-between border-b border-slate-200 bg-background-light dark:border-slate-800 dark:bg-background-dark px-6 py-4">
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#137fec] text-3xl">
                  confirmation_number
                </span>
                <h1 className="text-slate-900 dark:text-slate-50 text-xl font-bold">
                  TicketMaster
                </h1>
              </div>
              <nav className="hidden items-center gap-6 md:flex">
                <Link
                  className="text-[#137fec] text-base font-semibold"
                  href={"/dashboard"}
                >
                  Dashboard
                </Link>
              </nav>
            </div>
            <button
              onClick={handleLogout}
              className="flex h-10 items-center justify-center rounded-lg bg-[#137fec] px-4 text-sm font-bold text-white hover:bg-[#1783ee] focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer"
            >
              Logout
            </button>
          </header>

          <main className="flex flex-1 flex-col p-6 lg:p-8">
            <section className="flex flex-col gap-6 md:flex-row">
              <div className="flex flex-1 flex-col gap-4 rounded-xl bg-white dark:bg-slate-800 p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-slate-600 dark:text-slate-400 text-base font-bold">
                    Total Tickets
                  </p>
                  <span className="material-symbols-outlined text-[#137fec] text-3xl">
                    style
                  </span>
                </div>
                <p className="text-slate-900 dark:text-slate-50 text-4xl font-bold">
                  2,450
                </p>
              </div>

              <div className="flex flex-1 flex-col gap-4 rounded-xl bg-white dark:bg-slate-800 p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-slate-600 dark:text-slate-400 text-base font-bold">
                    Open Tickets
                  </p>
                  <span className="material-symbols-outlined text-orange-500 text-3xl">
                    drafts
                  </span>
                </div>
                <p className="text-slate-900 dark:text-slate-50 text-4xl font-bold">
                  85
                </p>
              </div>

              <div className="flex flex-1 flex-col gap-4 rounded-xl bg-white dark:bg-slate-800 p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-slate-600 dark:text-slate-400 text-base font-bold">
                    Resolved Tickets
                  </p>
                  <span className="material-symbols-outlined text-green-500 text-3xl">
                    task_alt
                  </span>
                </div>
                <p className="text-slate-900 dark:text-slate-50 text-4xl font-bold">
                  2,110
                </p>
              </div>
            </section>

            <section>
              <Link href={"/management"} className=" px-0 py-3">
                <button className="flex justify-center items-center w-full max-w-[440px] mx-auto h-12 rounded-lg bg-[#1175da] text-white text-base font-bold hover:bg-[#1783ee] mt-12 cursor-pointer">
                  Manage Tickets
                </button>
              </Link>
            </section>
          </main>

          <footer className="flex flex-col gap-6 px-5 py-10 text-center">
            <TicketSphereFooter />
          </footer>
        </div>
      </div>
    </main>
  );
}
