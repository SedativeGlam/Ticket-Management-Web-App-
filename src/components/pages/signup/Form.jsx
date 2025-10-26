"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function Form() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.username.trim()) newErrors.username = "Username is required.";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const existingUser = users.find(
      (user) => user.email.toLowerCase() === formData.email.toLowerCase()
    );

    if (existingUser) {
      toast.error("Email is already registered.");
      return;
    }

    users.push({
      username: formData.username,
      email: formData.email,
      password: formData.password,
    });

    localStorage.setItem("users", JSON.stringify(users));

    toast.success("Account created successfully!");
    localStorage.setItem("ticketapp_session", "true");

    setTimeout(() => router.push("/dashboard"), 2000);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Toaster position="bottom-right" reverseOrder={false} />

      <div className="flex flex-col">
        <label
          htmlFor="username"
          className="text-slate-800 dark:text-slate-200 text-sm font-bold pb-2"
        >
          Username
        </label>
        <input
          id="username"
          name="username"
          placeholder="e.g., john.doe"
          value={formData.username}
          onChange={handleChange}
          className={`w-full rounded-lg border ${
            errors.username
              ? "border-red-500"
              : "border-slate-300 dark:border-slate-700"
          } bg-white dark:bg-slate-900 p-3 text-base text-slate-800 dark:text-slate-200 focus:outline-0 focus:ring-2 focus:ring-indigo-500`}
        />
        {errors.username && (
          <span className="text-sm text-red-500 pt-1">{errors.username}</span>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="text-slate-800 dark:text-slate-200 text-sm font-bold pb-2"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full rounded-lg border ${
            errors.email
              ? "border-red-500"
              : "border-slate-300 dark:border-slate-700"
          } bg-white dark:bg-slate-900 p-3 text-base text-slate-800 dark:text-slate-200 focus:outline-0 focus:ring-2 focus:ring-indigo-500`}
        />
        {errors.email && (
          <span className="text-sm text-red-500 pt-1">{errors.email}</span>
        )}
      </div>

      {/* Password */}
      <div className="flex flex-col">
        <label
          htmlFor="password"
          className="text-slate-800 dark:text-slate-200 text-sm font-bold pb-2"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Create a strong password"
          value={formData.password}
          onChange={handleChange}
          className={`w-full rounded-lg border ${
            errors.password
              ? "border-red-500"
              : "border-slate-300 dark:border-slate-700"
          } bg-white dark:bg-slate-900 p-3 text-base text-slate-800 dark:text-slate-200 focus:outline-0 focus:ring-2 focus:ring-indigo-500`}
        />
        {errors.password && (
          <span className="text-sm text-red-500 pt-1">{errors.password}</span>
        )}
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="confirmPassword"
          className="text-slate-800 dark:text-slate-200 text-sm font-bold pb-2"
        >
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Re-enter your password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className={`w-full rounded-lg border ${
            errors.confirmPassword
              ? "border-red-500"
              : "border-slate-300 dark:border-slate-700"
          } bg-white dark:bg-slate-900 p-3 text-base text-slate-800 dark:text-slate-200 focus:outline-0 focus:ring-2 focus:ring-indigo-500`}
        />
        {errors.confirmPassword && (
          <span className="text-sm text-red-500 pt-1">
            {errors.confirmPassword}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="w-full h-12 flex items-center justify-center gap-2 rounded-lg bg-[#4F46E5] px-6 mt-6 text-base font-semibold text-white hover:bg-indigo-600 transition-colors"
      >
        Create Account
      </button>
    </form>
  );
}
