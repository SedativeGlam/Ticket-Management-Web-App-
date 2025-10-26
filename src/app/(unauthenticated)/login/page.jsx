import TicketSphereFooter from "@/components/pages/landing/TicketSphereFooter";
import Form from "@/components/pages/login/Form";
import React from "react";

export default function page() {
  return (
    <main className="font-display bg-background-light dark:bg-background-dark">
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4">
        <div className="w-full max-w-md">
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

          <Form />
        </div>

        <footer className="absolute bottom-4 w-full text-center">
          <TicketSphereFooter />
        </footer>
      </div>
    </main>
  );
}
