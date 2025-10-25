import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden bg-linear-to-br from-indigo-50 via-purple-50 to-blue-50 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-blue-900/30">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"
        data-alt="A large, soft, circular gradient blur effect for decoration."
      ></div>
      <div
        className="absolute -bottom-48 -right-48 w-96 h-96 bg-primary/5 rounded-full"
        data-alt="A large decorative circle overlapping the hero section."
      ></div>
      <div className="relative z-10 px-4">
        <div className="max-w-3xl mx-auto flex flex-col gap-6 text-center items-center justify-center pt-16">
          <div className="flex flex-col gap-4">
            <h1 className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-tighter md:text-6xl">
              The Effortless Way to Manage Customer Support
            </h1>
            <h2 className="text-slate-600 dark:text-slate-400 text-lg font-normal leading-normal md:text-xl">
              SupportFlow centralizes your customer conversations, automates
              workflows, and provides real-time reporting to help your team
              deliver exceptional service.
            </h2>
          </div>

          <Link href={"/signup"}>
            <div className="flex flex-wrap gap-4 justify-center  bg-[#4F46E5] rounded-full">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary text-white text-base font-bold shadow-lg  transition-transform hover:scale-105">
                <span className="truncate">Get Started Free</span>
              </button>
            </div>
          </Link>
        </div>
      </div>
      <div
        className="absolute -bottom-px left-0 right-0 w-full h-24 text-background-light dark:text-background-dark"
        data-alt="A smooth wave shape separating the hero from the content below."
      >
        <svg
          className="w-full h-full fill-current"
          preserveAspectRatio="none"
          viewBox="0 0 1440 100"
        >
          <path d="M0,50 C400,100 1000,0 1440,50 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
    </section>
  );
}
