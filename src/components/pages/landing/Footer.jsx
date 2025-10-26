import React from "react";
import TicketSphereFooter from "./TicketSphereFooter";

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-gray-900/50">
      <div className="max-w-5xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
          <div className="col-span-1 md:col-span-1 flex flex-col gap-2">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="material-symbols-outlined text-[#4F46e5] text-2xl">
                confirmation_number
              </span>
              <h2 className="text-text-light dark:text-text-dark text-lg font-bold">
                TicketSphere
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Stop dreaming, start seeing.
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="font-bold text-text-light dark:text-text-dark mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                  href="#"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                  href="#"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="font-bold text-text-light dark:text-text-dark mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                  href="#"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="font-bold text-text-light dark:text-text-dark mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                  href="#"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <TicketSphereFooter />
      </div>
    </footer>
  );
}
