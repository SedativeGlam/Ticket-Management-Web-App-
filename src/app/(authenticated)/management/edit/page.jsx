import React from "react";

export default function page() {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <div className="flex flex-col min-h-screen">
        {/* Main Content  */}

        <main className="grow">
          {/* Top App Bar  */}
          <header className="bg-container-light dark:bg-container-dark shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <button className="inline-flex items-center justify-center p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                    <span className="material-symbols-outlined">
                      arrow_back
                    </span>
                  </button>
                  <h1 className="text-xl font-bold ml-4 text-text-light dark:text-text-dark">
                    Edit Ticket #TICK-123
                  </h1>
                </div>
              </div>
            </div>
          </header>
          {/* Form Container  */}
          <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="bg-container-light dark:bg-container-dark p-6 sm:p-8 rounded-xl shadow-md space-y-6">
              {/* Title Field  */}

              <label className="flex flex-col">
                <p className="text-base font-bold pb-2 text-text-light dark:text-text-dark">
                  Title<span className="text-[#D0021B]">*</span>
                </p>
                <input
                  className="form-input flex w-full py-2 px-4 min-w-0 flex-1 resize-none overflow-hidden rounded-lg bg-gray-200 border border-gray-300 outline-[#137fec]"
                  //   value="Fix login button not working on Safari"
                />
                {/* <p className="text-sm text-error pt-1 text-[#D0021B]">
                  Title is required.
                </p> */}
              </label>

              {/* Description Field  */}

              <label className="flex flex-col">
                <p className="text-base font-bold pb-2 text-text-light dark:text-text-dark">
                  Description
                </p>
                <textarea
                  className="form-input flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg border bg-gray-200 border-gray-300 outline-[#137fec] min-h-36 p-4  placeholder:text-gray-400"
                  placeholder="Provide a detailed description of the issue..."
                ></textarea>
              </label>

              {/* Priority Field  */}

              <label className="flex flex-col">
                <p className="text-base font-bold pb-2 text-text-light dark:text-text-dark">
                  Priority
                </p>
                <select
                  defaultValue="high"
                  aria-label="Select priority"
                  className="form-input flex w-full py-2 px-4 min-w-0 flex-1 resize-none overflow-hidden rounded-lg bg-gray-200 border border-gray-300 outline-[#137fec]"
                >
                  <option value="low">Low</option>
                  <option value="bold">bold</option>
                  <option>High</option>
                </select>
              </label>

              {/* Status Field  */}

              <div>
                <p className="text-base font-bold pb-2 text-text-light dark:text-text-dark">
                  Status<span className="text-error">*</span>
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <label className="flex items-center justify-center p-3 rounded-lg border-2 border-gray-300 has-checked:border-[#137fec] has-checked:bg-[#c3dcf5] cursor-pointer transition-colors">
                    <input
                      className="form-radio h-4 w-4 text-primary focus:ring-primary border-gray-300"
                      name="status"
                      type="radio"
                      value="open"
                    />
                    <span className="ml-3 font-bold text-text-light dark:text-text-dark">
                      Open
                    </span>
                  </label>
                  <label className="flex items-center justify-center p-3 rounded-lg border-2 border-[#137fec] bg-[#c3dcf5] cursor-pointer transition-colors">
                    <input
                      className="form-radio h-4 w-4 text-primary focus:ring-primary border-gray-300"
                      name="status"
                      type="radio"
                      defaultChecked="in_progress"
                    />
                    <span className="ml-3 font-bold text-text-light dark:text-text-dark">
                      In Progress
                    </span>
                  </label>
                  <label className="flex items-center justify-center p-3 rounded-lg border-2 border-gray-300 has-checked:border-[#137fec] has-checked:bg-[#c3dcf5] cursor-pointer transition-colors">
                    <input
                      className="form-radio h-4 w-4 text-primary focus:ring-primary border-gray-300"
                      name="status"
                      type="radio"
                      value="closed"
                    />
                    <span className="ml-3 font-bold text-text-light dark:text-text-dark">
                      Closed
                    </span>
                  </label>
                </div>
                {/* <p className="text-sm text-[#D0021B] pt-1 hidden">
                  A status must be selected.
                </p> */}
              </div>

              {/* Action Buttons  */}

              <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-4">
                <button className="px-6 py-2.5 rounded-lg font-semibold text-center text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer">
                  Cancel
                </button>
                <button className="px-6 py-2.5 rounded-lg font-semibold text-center text-white bg-[#137fec] hover:bg-[#3291f1] transition-colors flex items-center justify-center cursor-pointer">
                  {/* <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg> */}
                  {/* Processing...  */}
                  Save Changes
                </button>
              </div>
            </div>
          </div>

          {/* Toast/Snackbar Notification */}
          <div className="fixed top-5 right-5 z-50 ">
            <div
              className="flex items-center bg-green-500 text-white text-sm font-bold px-4 py-3 rounded-lg shadow-lg"
              role="alert"
            >
              <span className="material-symbols-outlined mr-2">
                check_circle
              </span>
              <p>Ticket updated successfully.</p>
            </div>
          </div>
        </main>

        {/* Footer  */}

        <footer className="bg-container-light dark:bg-container-dark mt-auto">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              © 2024 Your Company Name. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
