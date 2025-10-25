import React from "react";

export default function page() {
  return (
    <main className="font-display bg-background-light dark:bg-background-dark">
      <div className="flex min-h-screen w-full flex-col">
        <div className="mx-auto w-full max-w-7xl">
          {/* Top App Bar  */}
          <header className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10">
            <div className="flex size-12 shrink-0 items-center justify-start">
              <span className="material-symbols-outlined text-slate-800 dark:text-slate-200 cursor-pointer">
                menu
              </span>
            </div>
            <h1 className="text-slate-900 dark:text-slate-50 text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
              Dashboard
            </h1>
            <div className="flex w-12 items-center justify-end">
              <p className="text-[#137fec] text-base font-bold leading-normal tracking-[0.015em] shrink-0 cursor-pointer">
                Logout
              </p>
            </div>
          </header>
          <main className="flex flex-col gap-6 p-4">
            {/* Stats Cards  */}

            <section className="flex flex-col gap-4 md:flex-row md:flex-wrap">
              <div className="flex min-w-[158px] flex-1 flex-col gap-4 rounded-xl bg-white dark:bg-slate-800 p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-slate-600 dark:text-slate-400 text-base font-medium leading-normal">
                    Total Tickets
                  </p>
                  <span className="material-symbols-outlined text-[#137fec] text-3xl">
                    style
                  </span>
                </div>
                <p className="text-slate-900 dark:text-slate-50 tracking-light text-4xl font-bold leading-tight">
                  2,450
                </p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-4 rounded-xl bg-white dark:bg-slate-800 p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-slate-600 dark:text-slate-400 text-base font-medium leading-normal">
                    Open Tickets
                  </p>
                  <span className="material-symbols-outlined text-orange-500 text-3xl">
                    drafts
                  </span>
                </div>
                <p className="text-slate-900 dark:text-slate-50 tracking-light text-4xl font-bold leading-tight">
                  85
                </p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-4 rounded-xl bg-white dark:bg-slate-800 p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-slate-600 dark:text-slate-400 text-base font-medium leading-normal">
                    Resolved Tickets
                  </p>
                  <span className="material-symbols-outlined text-green-500 text-3xl">
                    task_alt
                  </span>
                </div>
                <p className="text-slate-900 dark:text-slate-50 tracking-light text-4xl font-bold leading-tight">
                  2,110
                </p>
              </div>
            </section>

            {/* CTA Button  */}

            <section className="flex px-0 py-3">
              <button className="flex min-w-[84px] w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 mx-auto bg-[#1175da] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#1783ee] mt-4">
                <span className="truncate">Manage Tickets</span>
              </button>
            </section>
          </main>
          Footer
          <footer className="flex flex-col gap-6 px-5 py-10 text-center mt-auto">
            <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">
              © 2024 TicketMaster Inc.
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}
