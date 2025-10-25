import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <main className="font-display bg-background-light dark:bg-background-dark">
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark p-6 pb-24 group/design-root">
        <div className="w-full max-w-md mx-auto">
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center justify-center h-16 w-16 bg-primary rounded-full mb-4">
              <span className="material-symbols-outlined text-white text-4xl bg-[#4F46E5] p-3 rounded-full">
                confirmation_number
              </span>
            </div>
            <h1 className="text-slate-800 dark:text-slate-100 tracking-tight text-3xl font-bold leading-tight text-center font-display">
              Get Started
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-base font-bold leading-normal pt-2 text-center font-display">
              Create your account to start managing tickets.
            </p>
          </div>
          <div className="w-full bg-white dark:bg-slate-900/50 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="space-y-4">
              <button className="flex w-full min-w-0 flex-1 resize-none items-center justify-center gap-3 overflow-hidden rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-base font-medium leading-normal text-slate-800 dark:text-slate-200 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.35 11.1H12.18V12.83H18.68C18.36 14.66 17.26 16.09 15.68 17.13C14.77 17.72 13.6 18.09 12.18 18.09C9.55 18.09 7.42 16.27 6.74 13.91H4.88V15.7C5.78 17.63 7.6 19.14 9.88 19.96V22H11.96V19.94C12.08 19.94 12.18 19.94 12.18 19.94C14.49 19.94 16.59 19.11 18.2 17.76C20.48 15.82 21.62 13.2 21.62 10.52C21.62 10.32 21.62 10.12 21.6 9.92H21.35V11.1Z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M6.74 10.09C7.42 7.73 9.55 5.91 12.18 5.91C13.44 5.91 14.59 6.33 15.48 7.08L17.24 5.32C15.82 4.04 14.09 3.33 12.18 3.33C8.6 3.33 5.53 5.46 4.29 8.61L6.15 10.31C6.44 10.23 6.59 10.16 6.74 10.09Z"
                    fill="#EA4335"
                  ></path>
                  <path
                    d="M4.29 15.39L6.15 13.69C6.44 13.77 6.59 13.84 6.74 13.91C6.71 14.15 6.68 14.38 6.68 14.62C6.68 14.86 6.71 15.09 6.74 15.33L4.88 17.1C4.45 16.25 4.21 15.31 4.21 14.33C4.21 13.35 4.45 12.41 4.88 11.56L6.74 10.09C6.59 10.16 6.44 10.23 6.15 10.31L4.29 8.61C3.12 10.75 3.12 13.25 4.29 15.39Z"
                    fill="#FABB05"
                  ></path>
                  <path
                    d="M21.6 1.99998H11.96V4.11998H21.6V1.99998Z"
                    fill="#4285F4"
                  ></path>
                </svg>

                <span className="font-bold">Continue with Google</span>
              </button>
              <button className="flex w-full min-w-0 flex-1 resize-none items-center justify-center gap-3 overflow-hidden rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-base font-medium leading-normal text-slate-800 dark:text-slate-200 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 23 23"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8359 1.10742H1.10742V10.8359H10.8359V1.10742Z"
                    fill="#F25022"
                  ></path>
                  <path
                    d="M22.0195 1.10742H12.291V10.8359H22.0195V1.10742Z"
                    fill="#7FBA00"
                  ></path>
                  <path
                    d="M10.8359 12.291H1.10742V22.0195H10.8359V12.291Z"
                    fill="#00A4EF"
                  ></path>
                  <path
                    d="M22.0195 12.291H12.291V22.0195H22.0195V12.291Z"
                    fill="#FFB900"
                  ></path>
                </svg>
                <span className="font-bold">Continue with Microsoft</span>
              </button>
            </div>
            <div className="flex items-center my-6">
              <hr className="w-full border-slate-200 dark:border-slate-700" />
              <p className="px-3 text-sm font-bold text-slate-500 dark:text-slate-400">
                OR
              </p>
              <hr className="w-full border-slate-200 dark:border-slate-700" />
            </div>
            <form className="space-y-4">
              <div className="flex flex-col">
                <label
                  htmlFor="username"
                  className="text-slate-800 dark:text-slate-200 text-sm font-bold leading-normal pb-2"
                >
                  Username
                </label>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-800 dark:text-slate-200 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:border-primary dark:focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-3 text-base font-normal leading-normal"
                  id="username"
                  placeholder="e.g., john.doe"
                  //   value=""
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-slate-800 dark:text-slate-200 text-sm font-bold leading-normal pb-2"
                >
                  Email
                </label>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-800 dark:text-slate-200 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:border-primary dark:focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-3 text-base font-normal leading-normal"
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  //   value=""
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="text-slate-800 dark:text-slate-200 text-sm font-bold leading-normal pb-2"
                >
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-800 dark:text-slate-200 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:border-primary dark:focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-3 pr-10 text-base font-normal leading-normal"
                    id="password"
                    placeholder="Create a strong password"
                    type="password"
                    // value=""
                  />
                  <button
                    className="absolute right-0 mr-3 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-xl">
                      visibility_off
                    </span>
                  </button>
                </div>
                {/* <div className="mt-2 flex items-center gap-x-2">
                  <div className="h-1.5 flex-1 rounded-full bg-slate-200 dark:bg-slate-700">
                    <div className="h-1.5 w-1/4 rounded-full bg-red-500"></div>
                  </div>
                  <p className="text-xs text-red-500 font-bold">Weak</p>
                </div> */}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="confirm-password"
                  className="text-slate-800 dark:text-slate-200 text-sm font-bold leading-normal pb-2"
                >
                  Confirm Password
                </label>
                <div className="relative flex items-center">
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-800 dark:text-slate-200 focus:outline-0 focus:ring-2 focus:ring-red-500/50 border border-red-500 bg-white dark:bg-slate-900 focus:border-red-500 dark:focus:border-red-500 h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-3 pr-10 text-base font-normal leading-normal"
                    id="confirm-password"
                    placeholder="Re-enter your password"
                    type="password"
                    // value=""
                  />
                  <button
                    className="absolute right-0 mr-3 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-xl">
                      visibility_off
                    </span>
                  </button>
                </div>
                {/* <p className="text-red-600 dark:text-red-500 text-xs font-normal leading-normal pt-1">
                  Passwords do not match.
                </p> */}
              </div>
              <button
                className="flex h-12 w-full flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-primary px-6 mt-8 text-base font-semibold leading-normal text-white bg-[#4F46E5] transition-colors hover:bg-primary/90 disabled:bg-primary/50 disabled:cursor-not-allowed"
                type="submit"
              >
                Create Account
              </button>
              {/* Loading state button example 
 
                    <button type="submit" className="flex h-12 w-full flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-primary/80 px-6 text-base font-semibold leading-normal text-white cursor-wait" disabled>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Creating Account...
                    </button>  */}
            </form>
          </div>

          <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal pt-6 text-center">
            Already have an account?{" "}
            <Link href={"/login"}>
              <span className="font-semibold text-primary hover:underline">
                Sign In
              </span>
            </Link>
          </p>
        </div>

        {/* Toast/Snackbar Notification   */}
        {/* <div className="fixed bottom-13 right-6 flex items-center gap-3 rounded-lg bg-red-600 px-5 py-3 text-white shadow-lg">
          <span className="material-symbols-outlined">error</span>
          <p className="text-sm font-bold">Email is already registered.</p>
        </div> */}

        <footer className="fixed bottom-0 left-0 w-full p-4 bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800">
          <p className="text-center text-xs text-slate-500 dark:text-slate-400">
            © 2024 TicketFlow |{" "}
            <a className="hover:underline" href="#">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a className="hover:underline" href="#">
              Terms of Service
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
