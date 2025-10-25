import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <main className="font-display bg-background-light dark:bg-background-dark">
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4">
        {/* Login Card  */}
        <div className="w-full max-w-md">
          {/* Logo and Header  */}
          <div className="mb-6 text-center">
            <div
              className="inline-block"
              data-alt="Company logo for ticket management application"
            >
              <svg
                className="h-12 w-12 text-[#0A4D68]"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.5 3.75a2.25 2.25 0 0 0-2.25 2.25v.191C16.88 4.31 14.549 3 12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9v-1.75a2.25 2.25 0 0 0-4.5 0v1.75a4.5 4.5 0 1 1-4.5-4.5A4.5 4.5 0 0 1 16.5 12h1.75a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-1-1.936Z"></path>
              </svg>
            </div>
            <h1 className="text-[#212529] tracking-light text-3xl font-bold leading-tight pt-4">
              Sign in to your account
            </h1>
          </div>

          {/* Form Container  */}

          <div className="rounded-xl bg-card-light p-6 shadow-sm dark:bg-card-dark sm:p-8">
            <form action="#" className="space-y-6" method="POST">
              {/* Email Field  */}

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold leading-6 text-[#6c757d]"
                >
                  Email or Username
                </label>
                <div className="relative mt-2">
                  <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="material-symbols-outlined text-[#6c757d]">
                      person
                    </span>
                  </span>
                  <input
                    autoComplete="email"
                    className="form-input block w-full rounded-lg border-0 bg-gray-50 py-3 pl-10 pr-3 text-[#6C757D] ring-1 ring-inset ring-gray-300 placeholder:text-text-secondary-light focus:ring-2 outline-[#0a4d68]"
                    id="email"
                    name="email"
                    placeholder="Enter your email or username"
                    required=""
                    type="email"
                  />
                </div>
              </div>

              {/* Password Field with Error Example  */}

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-bold leading-6 text-[#6c757d]"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <Link className="font-semibold text-[#0a4d68]" href="#">
                      Forgot your password?
                    </Link>
                  </div>
                </div>
                <div className="relative mt-2">
                  <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="material-symbols-outlined text-[#6c757d]">
                      lock
                    </span>
                  </span>
                  <input
                    autoComplete="current-password"
                    className="form-input block w-full rounded-lg border-0 bg-gray-50 py-3 pl-10 pr-3 text-[#6C757D] ring-1 ring-inset ring-gray-300 placeholder:text-text-secondary-light focus:ring-2 outline-[#0a4d68]"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    required=""
                    type="password"
                  />
                  <button
                    className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 text-text-secondary-light hover:text-[#5b6268] text-[#6C757D]"
                    type="button"
                  >
                    <span className="material-symbols-outlined">
                      visibility_off
                    </span>
                  </button>
                </div>
                <p className="mt-2 text-sm text-[#d93b38]">
                  Password cannot be empty.
                </p>
              </div>
              {/* Sign In Button  */}

              <div>
                <button
                  className="flex w-full justify-center rounded-lg bg-[#0a4d68] px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#3a6172]  focus-visible:outline-primary cursor-pointer"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Toast/Snackbar Notification  */}
        <div className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 transform items-center gap-3 rounded-lg bg-[#212529] px-4 py-3 text-white shadow-lg">
          <span className="material-symbols-outlined text-[#d93b38]">
            error
          </span>
          <p className="text-sm font-medium">
            The username or password you entered is incorrect.
          </p>
        </div>

        {/* Footer  */}
        <footer className="absolute bottom-4 w-full text-center">
          <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
            © 2024 TicketFlow | Privacy Policy | Terms of Service
          </p>
        </footer>
      </div>
    </main>
  );
}
