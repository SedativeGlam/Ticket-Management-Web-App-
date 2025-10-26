"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Edit({ onClose, ticket = {}, onSave }) {
  const [title, setTitle] = useState(ticket.title || "");
  const [description, setDescription] = useState(ticket.description || "");
  const [status, setStatus] = useState(ticket.status || "open"); // ✅ matches your default_tickets
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const handleSave = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Title is required.");
      return;
    }

    setError("");
    setSaving(true);

    const updatedTicket = {
      ...ticket,
      title,
      description,
      status,
    };

    // Simulate saving
    setTimeout(() => {
      setSaving(false);
      onSave(updatedTicket);
      toast.success("Ticket updated successfully!");
      onClose();
    }, 1200);
  };

  const handleClose = () => onClose();

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />

      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="font-display bg-gray-100 dark:bg-background-dark text-text-light dark:text-text-dark rounded-2xl shadow-lg w-full max-w-3xl p-6 relative">
          <header className="flex items-center justify-between border-b border-gray-300 dark:border-gray-700 pb-4">
            <div className="flex items-center">
              <button
                onClick={handleClose}
                className="inline-flex items-center justify-center p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <h1 className="text-xl font-bold ml-4">
                Edit Ticket #{ticket.id || "TICK-XXXX"}
              </h1>
            </div>
          </header>

          <form onSubmit={handleSave} className="mt-6 space-y-6">
            <label className="flex flex-col">
              <p className="text-base font-bold pb-2">
                Title<span className="text-red-600">*</span>
              </p>
              <input
                className={`w-full py-2 px-4 rounded-lg bg-gray-200 border ${
                  error ? "border-red-500" : "border-gray-300"
                } outline-[#137fec]`}
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              {error && <p className="text-sm text-red-600 pt-1">{error}</p>}
            </label>

            <label className="flex flex-col">
              <p className="text-base font-bold pb-2">Description</p>
              <textarea
                className="w-full min-h-36 p-4 rounded-lg bg-gray-200 border border-gray-300 outline-[#137fec]"
                placeholder="Provide a detailed description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </label>

            <label className="flex flex-col">
              <p className="text-base font-bold pb-2">Status</p>
              <select
                className="w-full py-2 px-4 rounded-lg bg-gray-200 border border-gray-300 outline-[#137fec]"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="open">Open</option>
                <option value="in_progress">In Progress</option>
                <option value="closed">Closed</option>
              </select>
            </label>

            <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={handleClose}
                className="px-6 py-2.5 rounded-lg font-semibold text-gray-700 bg-gray-200 hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="px-6 py-2.5 rounded-lg font-semibold text-white bg-[#137fec] hover:bg-[#3291f1] transition flex items-center justify-center disabled:opacity-70"
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
                    Saving...
                  </>
                ) : (
                  "Save Changes"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
