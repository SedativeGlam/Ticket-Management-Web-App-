"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Page() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");
  const [status, setStatus] = useState("open");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // --- Handle form submission ---
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!title.trim()) {
      setError("Title is required.");
      toast.error("Title is required.");
      return;
    }

    if (!status.trim()) {
      setError("Status is required.");
      toast.error("Status is required.");
      return;
    }

    setError("");
    setSaving(true);

    // Simulate creating a ticket
    setTimeout(() => {
      const previousTicketsJson = localStorage?.getItem("default_tickets");
      let previousTickets = JSON?.parse(previousTicketsJson) || [];
      let newTickets = [
        ...previousTickets,
        {
          title,
          description,
          priority,
          status,
          id: previousTickets.length + 1,
        },
      ];
      setSaving(false);
      localStorage.setItem("default_tickets", JSON.stringify(newTickets));
      toast.success("Ticket created successfully!");
      // reset form
      setTitle("");
      setDescription("");
      setPriority("low");
      setStatus("open");
      router.push("/management");
    }, 1500);
  };

  // --- Handle cancel ---
  const handleCancel = () => {
    setTitle("");
    setDescription("");
    setPriority("low");
    setStatus("open");
    setError("");
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-200">
      <Toaster position="bottom-right" reverseOrder={false} />

      <div className="relative flex min-h-screen w-full flex-col items-center justify-start sm:justify-center p-4 sm:p-6 lg:p-8">
        {/* Form Container */}
        <main className="w-full max-w-2xl">
          <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="p-6 sm:p-8">
              {/* Header */}
              <h1 className="text-slate-900 dark:text-white tracking-tight text-2xl sm:text-3xl font-bold text-left pb-6">
                Create New Ticket
              </h1>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title Field */}
                <div>
                  <label className="flex flex-col" htmlFor="title">
                    <p className="text-slate-700 dark:text-slate-300 text-base font-bold leading-normal pb-2">
                      Title *
                    </p>
                    <input
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="e.g., Fix login button on homepage"
                      className={`form-input w-full rounded-lg h-12 px-4 text-base font-normal leading-normal border ${
                        error && !title.trim()
                          ? "border-red-500"
                          : "border-slate-300 dark:border-slate-600"
                      } bg-background-light dark:bg-slate-700/50 focus:ring-2 focus:ring-primary/50 focus:border-primary focus:outline-0 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500`}
                    />
                  </label>
                  {error && !title.trim() && (
                    <p className="text-red-500 text-sm mt-2">
                      Title is required.
                    </p>
                  )}
                </div>

                {/* Description Field */}
                <div>
                  <label className="flex flex-col" htmlFor="description">
                    <p className="text-slate-700 dark:text-slate-300 text-base font-bold leading-normal pb-2">
                      Description
                    </p>
                    <textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Provide a detailed description of the issue..."
                      className="form-textarea w-full min-h-36 rounded-lg p-4 text-base font-normal leading-normal border border-slate-300 dark:border-slate-600 bg-background-light dark:bg-slate-700/50 focus:ring-2 focus:ring-primary/50 focus:border-primary focus:outline-0 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                    ></textarea>
                  </label>
                </div>

                {/* Priority & Status Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Priority */}
                  <div>
                    <label className="flex flex-col" htmlFor="priority">
                      <p className="text-slate-700 dark:text-slate-300 text-base font-bold leading-normal pb-2">
                        Priority
                      </p>
                      <select
                        id="priority"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="form-select w-full h-12 rounded-lg border border-slate-300 dark:border-slate-600 bg-background-light dark:bg-slate-700/50 px-4 text-base font-normal leading-normal text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary focus:outline-0"
                      >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                      </select>
                    </label>
                  </div>

                  {/* Status */}
                  <div>
                    <label className="flex flex-col" htmlFor="status">
                      <p className="text-slate-700 dark:text-slate-300 text-base font-bold leading-normal pb-2">
                        Status *
                      </p>
                      <select
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className={`form-select w-full h-12 rounded-lg border ${
                          error && !status.trim()
                            ? "border-red-500"
                            : "border-slate-300 dark:border-slate-600"
                        } bg-background-light dark:bg-slate-700/50 px-4 text-base font-normal leading-normal text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary focus:outline-0`}
                      >
                        <option value="open">Open</option>
                        <option value="in_progress">In Progress</option>
                        <option value="closed">Closed</option>
                      </select>
                    </label>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="flex h-12 w-full sm:w-auto items-center justify-center rounded-lg border border-slate-300 dark:border-slate-600 bg-transparent px-6 text-base font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={saving}
                    className="flex h-12 w-full sm:w-auto items-center justify-center rounded-lg bg-[#137fec] px-6 text-base font-bold text-white shadow-sm hover:bg-[#1285f8] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {saving ? (
                      <>
                        <svg
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
                        </svg>
                        Creating...
                      </>
                    ) : (
                      "Create Ticket"
                    )}
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
      </div>
    </div>
  );
}
