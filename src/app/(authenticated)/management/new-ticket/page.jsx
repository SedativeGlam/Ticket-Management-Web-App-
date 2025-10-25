import React from "react";

export default function page() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-200">
      <div className="relative flex min-h-screen w-full flex-col items-center justify-start sm:justify-center p-4 sm:p-6 lg:p-8">
        {/* Form Container  */}
        <main className="w-full max-w-2xl">
          <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="p-6 sm:p-8">
              {/* Header  */}

              <h1 className="text-slate-900 dark:text-white tracking-tight text-2xl sm:text-3xl font-bold text-left pb-6">
                Create New Ticket
              </h1>
              <form className="space-y-6">
                {/* Title Field */}
                <div>
                  <label className="flex flex-col" htmlFor="title">
                    <p className="text-slate-700 dark:text-slate-300 text-base font-bold leading-normal pb-2">
                      Title *
                    </p>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-600 bg-background-light dark:bg-slate-700/50 focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 px-4 text-base font-normal leading-normal pt-3 pb-3"
                      id="title"
                      placeholder="e.g., Fix login button on homepage"
                      // value=""
                    />
                  </label>

                  {/* Error State Example  */}

                  {/* <p className="text-red-500 text-sm mt-2">
                    Title is a required field.
                  </p> */}
                </div>
                {/* Description Field  */}
                <div>
                  <label className="flex flex-col" htmlFor="description">
                    <p className="text-slate-700 dark:text-slate-300 text-base font-bold leading-normal pb-2">
                      Description
                    </p>
                    <textarea
                      className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-600 bg-background-light dark:bg-slate-700/50 focus:border-primary min-h-36 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-4 text-base font-normal leading-normal"
                      id="description"
                      placeholder="Provide a detailed description of the issue..."
                    ></textarea>
                  </label>
                </div>
                {/* Priority and Status Fields  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="flex flex-col" htmlFor="priority">
                      <p className="text-slate-700 dark:text-slate-300 text-base font-bold leading-normal pb-2">
                        Priority
                      </p>
                      <select
                        className="form-select flex w-full min-w-0 flex-1 appearance-none rounded-lg text-slate-900 pt-2 pb-2 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-600 bg-background-light dark:bg-slate-700/50 focus:border-primary h-12 bg-no-repeat bg-right-3 px-4 text-base font-normal leading-normal"
                        id="priority"
                        defaultValue="bold"
                      >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                      </select>
                    </label>
                  </div>
                  <div>
                    <label className="flex flex-col" htmlFor="status">
                      <p className="text-slate-700 dark:text-slate-300 text-base font-bold leading-normal pb-2">
                        Status *
                      </p>
                      <select
                        className="form-select flex w-full min-w-0 flex-1 appearance-none rounded-lg text-slate-900 pt-2 pb-2 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-600 bg-background-light dark:bg-slate-700/50 focus:border-primary h-12 bg-no-repeat bg-right-3 px-4 text-base font-normal leading-normal"
                        id="status"
                        defaultValue="open"
                      >
                        <option value="open">Open</option>
                        <option value="in_progress">In Progress</option>
                        <option value="closed">Closed</option>
                      </select>
                    </label>
                  </div>
                </div>
                {/* Action Buttons  */}
                <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-4">
                  <button
                    className="flex h-12 w-full sm:w-auto items-center justify-center rounded-lg border border-slate-300 dark:border-slate-600 bg-transparent px-6 text-base font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                    type="button"
                  >
                    Cancel
                  </button>
                  <button
                    className="flex h-12 w-full sm:w-auto items-center justify-center rounded-lg bg-[#137fec] px-6 text-base font-bold text-white shadow-sm hover:bg-[#1285f8] cursor-pointer disabled:cursor-not-allowed"
                    type="submit"
                  >
                    {/* Loading state spinner: hidden by default
                    <span
                      className="material-symbols-outlined animate-spin-slow mr-2"
                      data-icon="progress_activity"
                    ></span> */}
                    Create Ticket
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* Footer */}
          <footer className="w-full text-center py-8">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              © 2024 Acme Inc. ·{" "}
              <a className="hover:underline" href="#">
                Help Center
              </a>{" "}
              ·{" "}
              <a className="hover:underline" href="#">
                Terms of Service
              </a>
            </p>
          </footer>
        </main>

        {/* Toast / Snackbar Notifications 
 Success Notification  */}

        {/* <div
          className="fixed bottom-5 right-5 z-50 flex items-center gap-4 w-full max-w-sm p-4 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700"
          role="alert"
        >
          <span
            className="material-symbols-outlined text-green-500"
            data-icon="check_circle"
          >
            check_circle
          </span>
          <div className="flex-1">
            <p className="text-sm font-bold text-slate-900 dark:text-white">
              Ticket created successfully!
            </p>
          </div>
          <button className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200">
            <span className="material-symbols-outlined" data-icon="close">
              close
            </span>
          </button>
        </div> */}

        {/* Error Notification (example, typically hidden)  */}

        {/* <div
          role="alert"
          className="fixed bottom-5 right-5 z-50 flex items-center gap-4 w-full max-w-sm p-4 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <span
            className="material-symbols-outlined text-red-500"
            data-icon="error"
          >
            error
          </span>
          <div className="flex-1">
            <p className="text-sm font-bold text-slate-900 dark:text-white">
              Failed to create ticket.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Please check the form and try again.
            </p>
          </div>
          <button className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 cursor-pointer">
            <span className="material-symbols-outlined" data-icon="close">
              close
            </span>
          </button>
        </div> */}
      </div>
    </div>
  );
}
