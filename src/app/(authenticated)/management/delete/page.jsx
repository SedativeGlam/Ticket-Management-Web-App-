import React from "react";

export default function page() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark p-4 group/design-root overflow-x-hidden">
      {/* Background Content (Dimmed) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-black/50"
      ></div>
      <div className="absolute inset-0 z-0 h-full w-full bg-slate-200 dark:bg-slate-800 backdrop-blur-sm"></div>
      Modal Container
      <div className="relative z-10 flex w-full max-w-md flex-col items-center rounded-xl bg-white dark:bg-[#1C2A38] shadow-2xl">
        {/* Icon Container  */}

        <div className="flex h-20 w-full items-center justify-center rounded-t-xl bg-red-50 dark:bg-red-900/20 ">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30 cursor-pointer">
            <span className="material-symbols-outlined text-3xl text-red-600 dark:text-red-400">
              delete_forever
            </span>
          </div>
        </div>

        {/* Content  */}

        <div className="flex w-full flex-col items-center justify-center p-6 text-center">
          <h2 className="font-display text-[#0d141b] dark:text-slate-50 tracking-tight text-[28px] font-bold leading-tight pb-3">
            Confirm Deletion
          </h2>
          <p className="font-display text-[#374151] dark:text-slate-300 text-base font-normal leading-normal">
            Are you sure you want to permanently delete Ticket #TKT-451? This
            action cannot be undone.
          </p>
        </div>

        {/* Button Group  */}

        <div className="flex w-full justify-stretch border-t border-slate-200 dark:border-slate-700 p-4">
          <div className="flex flex-1 flex-col-reverse sm:flex-row gap-3">
            <button className="flex flex-1 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-slate-100 dark:bg-slate-700 text-[#0d141b] dark:text-slate-50 text-base font-bold leading-normal tracking-[0.015em] hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
              <span className="truncate">Cancel</span>
            </button>
            <button className="flex flex-1 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-red-600 text-slate-50 text-base font-bold leading-normal tracking-[0.015em] hover:bg-red-700 transition-colors">
              <span className="truncate">Delete Ticket</span>
            </button>
          </div>
        </div>
      </div>
      {/* For demonstration purposes: this is a copy of the modal component from the component list to show what a bottom sheet style could look like, it's not part of the main design.  */}
      <div className="fixed bottom-0 left-0 right-0 z-20 md:hidden">
        <div className="flex flex-col items-stretch rounded-t-2xl bg-white dark:bg-[#1C2A38] shadow-2xl">
          <button className="flex h-5 w-full items-center justify-center pt-3">
            <div className="h-1 w-9 rounded-full bg-[#cfdbe7] dark:bg-slate-600"></div>
          </button>
          <div className="flex flex-col items-center justify-center p-6 text-center">
            <h2 className="font-display text-[#0d141b] dark:text-slate-50 tracking-tight text-xl font-bold leading-tight pb-2">
              Confirm Deletion
            </h2>
            <p className="font-display text-[#374151] dark:text-slate-300 text-sm font-normal leading-normal">
              Are you sure you want to permanently delete this ticket? This
              action cannot be undone.
            </p>
          </div>
          <div className="flex w-full justify-stretch px-4 pb-4 pt-2">
            <div className="flex flex-1 flex-col gap-3">
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-red-600 text-slate-50 text-base font-bold leading-normal tracking-[0.015em] hover:bg-red-700 transition-colors">
                <span className="truncate">Delete</span>
              </button>
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-slate-100 dark:bg-slate-700 text-[#0d141b] dark:text-slate-50 text-base font-bold leading-normal tracking-[0.015em] hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                <span className="truncate">Cancel</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
