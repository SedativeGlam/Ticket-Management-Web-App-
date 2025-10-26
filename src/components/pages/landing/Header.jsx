import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center p-4 justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#4F46e5] text-3xl">
              confirmation_number
            </span>
            <h2 className="text-text-light dark:text-text-dark text-xl font-bold">
              TicketSphere
            </h2>
          </div>
          <div className="flex items-center bg-[#4F46E51A] rounded-full">
            <Link href={"/login"}>
              <button className="text-[#4F46E5] flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-5 bg-primary/10 text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-[#463fcf1a]">
                <span className="truncate">Login</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
