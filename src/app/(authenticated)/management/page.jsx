import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <article className="bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-200">
      <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <header className="sticky top-0 z-10 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
                  <span className="material-symbols-outlined text-[#137fec] text-3xl">
                    apps
                  </span>
                  <span>TicketFlow</span>
                </div>
                <nav className="hidden md:flex items-center gap-2">
                  <Link
                    href="/dashboard"
                    className="px-3 py-2 rounded-md text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-[#137fec] transition-colors"
                  >
                    Dashboard
                  </Link>
                  <a
                    className="px-3 py-2 rounded-md text-sm font-bold bg-[#137fec1a] text-[#137fec]"
                    href="#"
                  >
                    Tickets
                  </a>
                  <a
                    className="px-3 py-2 rounded-md text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-[#137fec] transition-colors"
                    href="#"
                  >
                    Reports
                  </a>
                  <a
                    className="px-3 py-2 rounded-md text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-[#137fec] transition-colors"
                    href="#"
                  >
                    Settings
                  </a>
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
                    data-alt="User profile avatar"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8bhccTgq7MRFzq4aB9zhKvXgxGJtPIvizzVzviib1Ljtnf84uZJ-9DOerX9xLexAq7zcAFXu5vApRIsVOkPmREOIugLu73yu-4Y8kUCKnJHyMill4WjwIING6ho1ZnLx79KEs111156nbO6GHpmoqUh842LmRJrGZDrGlmuXzMsgL_yAE_8R8f0uLnzdc2E-ZVsF4149nNnRyHNyu3shU679q8blFcB9ejkgMyGWLpfq7aXwQwK0FCFhWncfbXrg7StSIBl7JpVc"
                  />
                </button>
              </div>
            </div>
          </div>
        </header>
        <main className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
          {/* <div className="fixed top-20 right-6 z-50 w-full max-w-sm">
            <div className="bg-green-500/95 dark:bg-green-600/95 text-white p-4 rounded-lg shadow-lg flex items-center gap-3 backdrop-blur-sm">
              <span className="material-symbols-outlined">check_circle</span>
              <p className="text-sm font-bold">
                Ticket #TICK-5819 deleted successfully.
              </p>
              <button className="ml-auto text-green-100 hover:text-white">
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>
          </div> */}

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <h1 className="text-slate-900 dark:text-white text-[32px] font-bold tracking-tight">
              Manage Tickets
            </h1>
            <div className="flex items-center gap-3">
              <div className="flex-1 md:flex-initial">
                <label className="flex flex-col min-w-40 h-12 w-full">
                  <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                    <div className="text-slate-500 dark:text-slate-400 flex border-none bg-white dark:bg-slate-800 border dark:border-slate-700 items-center justify-center pl-4 rounded-l-lg border-r-0">
                      <span className="material-symbols-outlined">search</span>
                    </div>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border dark:border-slate-700 bg-white dark:bg-slate-800 h-full placeholder:text-slate-500 dark:placeholder:text-slate-400 px-4 text-base font-normal leading-normal"
                      placeholder="Search tickets..."
                    />
                  </div>
                </label>
              </div>

              <Link href={"/management/new-ticket"}>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#137fec] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors gap-2">
                  <span className="material-symbols-outlined">add</span>
                  <span className="truncate">Create New Ticket</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mb-8">
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 pl-4 pr-3 hover:bg-[#137fec1a] cursor-pointer">
              <p className="text-slate-700 dark:text-slate-300 text-sm font-bold leading-normal">
                Status: All
              </p>
              <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 text-base">
                expand_more
              </span>
            </button>
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 pl-4 pr-3 hover:hover:bg-[#137fec1a] cursor-pointer">
              <p className="text-slate-700 dark:text-slate-300 text-sm font-bold leading-normal">
                Priority: All
              </p>
              <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 text-base">
                expand_more
              </span>
            </button>
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 pl-4 pr-3 hover:hover:bg-[#137fec1a] cursor-pointer">
              <p className="text-slate-700 dark:text-slate-300 text-sm font-bold leading-normal">
                Assignee: Anyone
              </p>
              <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 text-base">
                expand_more
              </span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 flex flex-col gap-4 transition-all hover:shadow-md hover:-translate-y-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                    API connection is failing intermittently
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    #TICK-5821 · Created: Oct 26, 2023
                  </p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300">
                  In Progress
                </span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  className="w-8 h-8 rounded-full"
                  data-alt="Jane Doe's avatar"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEsmJGPt7Fvn5_cV4J6lAsDz9rt8aZ19EhytWFqzm2VJkTre8MqZOtAq0sxTAs1Kuh2sf5fpRHb4OTygaLSm7kGjv6I9XEja4lmwEdWX7gwSipzkJ47X0wJ2BXnkfoLVstEIP2fzdi6qb9bZA1ClRtETSn6GWCGjaJ3gfCFpbR_g-fNwqaHuk2DdK6_GZ-9gp9wfxCK7rPLLB-rCW8yllyQDclE3ShtWGhOPVleLPn25Fxio4hRNpDTQ88YS6uaNAps1uyKfp1F_Q"
                />
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Assigned to
                  </p>
                  <p className="font-bold text-slate-700 dark:text-slate-300">
                    Jane Doe
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-2 border-t border-slate-100 dark:border-slate-700 pt-4">
                <div className="flex items-center gap-1 text-sm font-bold text-red-600 dark:text-red-400">
                  <span className="material-symbols-outlined text-base">
                    priority_high
                  </span>
                  <span>High Priority</span>
                </div>

                <div className="flex items-center gap-2">
                  <Link href={"/management/edit"}>
                    <button
                      aria-label="Edit ticket"
                      className="flex items-center justify-center h-9 w-9 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      <span className="material-symbols-outlined text-xl cursor-pointer">
                        edit
                      </span>
                    </button>
                  </Link>

                  <Link href={"/management/delete"}>
                    <button
                      aria-label="Delete ticket"
                      className="flex items-center justify-center h-9 w-9 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-red-500 dark:hover:text-red-500 transition-colors"
                    >
                      <span className="material-symbols-outlined text-xl cursor-pointer">
                        delete
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 flex flex-col gap-4 transition-all hover:shadow-md hover:-translate-y-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                    Cannot reset user password from admin
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    #TICK-5820 · Created: Oct 25, 2023
                  </p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300">
                  Open
                </span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  className="w-8 h-8 rounded-full"
                  data-alt="John Smith's avatar"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuALJyWzuW87vJWuEt6Bts8HSv19eawf-h0KUJnXC1YNHg5Vg1AQ66XJrwImdEfnAQfOkfiviDORljYhT8Z5RVI7cP9v3KItU_YgS1Q9ZYLLbLcyF878mPNvSpHfyeAq839W4V1oaQblayfEDxzBTzpsXIF9YVXjh0js6YFzXxlb5UXwEUJbtZ6C1ievki45ebhHg8KDryq5ZhoDq4T1vwyVhuK6k5vLEqnBmE9M0wWEhCLRSmu-Gqk14XSFJ0Co60fAbskBDLJFoHs"
                />
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Assigned to
                  </p>
                  <p className="font-bold text-slate-700 dark:text-slate-300">
                    John Smith
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-2 border-t border-slate-100 dark:border-slate-700 pt-4">
                <div className="flex items-center gap-1 text-sm font-bold text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-base">
                    arrow_downward
                  </span>
                  <span>Low Priority</span>
                </div>

                <div className="flex items-center gap-2">
                  <Link href={"/management/edit"}>
                    <button
                      aria-label="Edit ticket"
                      className="flex items-center justify-center h-9 w-9 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      <span className="material-symbols-outlined text-xl cursor-pointer">
                        edit
                      </span>
                    </button>
                  </Link>

                  <Link href={"/management/delete"}>
                    <button
                      aria-label="Delete ticket"
                      className="flex items-center justify-center h-9 w-9 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-red-500 dark:hover:text-red-500 transition-colors"
                    >
                      <span className="material-symbols-outlined text-xl cursor-pointer">
                        delete
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 flex flex-col gap-4 transition-all hover:shadow-md hover:-translate-y-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                    Dashboard analytics not loading
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    #TICK-5819 · Created: Oct 24, 2023
                  </p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300">
                  Closed
                </span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  className="w-8 h-8 rounded-full"
                  data-alt="Sara Connor's avatar"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJfXvWIHxUThmkVjzNOXHd9co9PAxYw7Wl5Bexl_HsM3H4xfGS96GnFDP_-kZ6wYsrHfFWVzeyVPQfvhvuJQ2hna3DfmN4QPoShAtprGnsvUbH1odeSZmLEn_vxO08aRo1NnAUDjoLUhbCh-WWxTOP59xhXEjxe2Oj7Q5izrHi1zIr2nsS_KAcAPbkmwky-jEcDReGeKikAwpIJYW41Q9tGlEE9Ft8bgVM1DpfhK5fknhUDZIVfR2tZn0AwA_8uYUHJ3HxOCDmFwY"
                />
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Assigned to
                  </p>
                  <p className="font-bold text-slate-700 dark:text-slate-300">
                    Sara Connor
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-2 border-t border-slate-100 dark:border-slate-700 pt-4">
                <div className="flex items-center gap-1 text-sm font-bold text-orange-600 dark:text-orange-400">
                  <span className="material-symbols-outlined text-base">
                    arrow_upward
                  </span>
                  <span>Medium Priority</span>
                </div>
                <div className="flex items-center gap-2">
                  <Link href={"/management/edit"}>
                    <button
                      aria-label="Edit ticket"
                      className="flex items-center justify-center h-9 w-9 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      <span className="material-symbols-outlined text-xl cursor-pointer">
                        edit
                      </span>
                    </button>
                  </Link>

                  <Link href={"/management/delete"}>
                    <button
                      aria-label="Delete ticket"
                      className="flex items-center justify-center h-9 w-9 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-red-500 dark:hover:text-red-500 transition-colors"
                    >
                      <span className="material-symbols-outlined text-xl cursor-pointer">
                        delete
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <nav
            aria-label="Pagination"
            className="flex items-center justify-between border-t border-slate-200 dark:border-slate-700 mt-10 pt-6"
          >
            <div className="hidden sm:block">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Showing <span className="font-bold">1</span> to{" "}
                <span className="font-bold">3</span> of{" "}
                <span className="font-bold">27</span> results
              </p>
            </div>
            <div className="flex flex-1 justify-between sm:justify-end">
              <a
                className="relative inline-flex items-center rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2 text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
                href="#"
              >
                Previous
              </a>
              <a
                className="relative ml-3 inline-flex items-center rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2 text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
                href="#"
              >
                Next
              </a>
            </div>
          </nav>
        </main>
        <footer className="w-full mt-auto">
          <div className="max-w-[1440px] mx-auto border-t border-slate-200 dark:border-slate-700 py-8 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                © 2024 TicketFlow Inc. All rights reserved.
              </p>
              <div className="flex justify-center gap-x-6">
                <a
                  className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary"
                  href="#"
                >
                  About Us
                </a>
                <a
                  className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary"
                  href="#"
                >
                  Contact Support
                </a>
                <a
                  className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary"
                  href="#"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
}
