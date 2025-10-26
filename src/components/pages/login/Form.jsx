"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function Form() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email or username is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const fakeUser = {
      email: "demo@example.com",
      password: "password123",
    };

    if (
      formData.email === fakeUser.email &&
      formData.password === fakeUser.password
    ) {
      toast.success("Login successful!");
      localStorage.setItem("ticketapp_session", "true");
      setTimeout(() => {
        router.push("/dashboard");
      }, 500);
    } else {
      toast.error("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="rounded-xl bg-card-light p-6 shadow-sm dark:bg-card-dark sm:p-8">
      <Toaster position="bottom-right" reverseOrder={false} />

      <form onSubmit={handleSubmit} className="space-y-6">
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
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email or username"
              className={`form-input block w-full rounded-lg border-0 bg-gray-50 py-3 pl-10 pr-3 text-[#6C757D] ring-1 ring-inset ${
                errors.email ? "ring-[#d93b38]" : "ring-gray-300"
              } placeholder:text-text-secondary-light focus:ring-2 outline-[#0a4d68]`}
            />
          </div>
          {errors.email && (
            <p className="mt-2 text-sm text-[#d93b38]">{errors.email}</p>
          )}
        </div>

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
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className={`form-input block w-full rounded-lg border-0 bg-gray-50 py-3 pl-10 pr-3 text-[#6C757D] ring-1 ring-inset ${
                errors.password ? "ring-[#d93b38]" : "ring-gray-300"
              } placeholder:text-text-secondary-light focus:ring-2 outline-[#0a4d68]`}
            />
          </div>
          {errors.password && (
            <p className="mt-2 text-sm text-[#d93b38]">{errors.password}</p>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-lg bg-[#0a4d68] px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#3a6172] focus-visible:outline-primary cursor-pointer"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
