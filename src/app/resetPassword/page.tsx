"use client";

import { useState } from "react";
import { apiFetch } from "@/lib/api";
import { useRouter } from "next/navigation";
import TitlePage from "../_componets/TitlePage/TitlePage";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // جوة ResetPasswordPage
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await apiFetch("/auth/resetPassword", {
        method: "PUT",
        body: JSON.stringify({ email, newPassword: password }),
      });
      setMessage("✅ Password reset successfully! You can now log in.");
      router.push("/Signin");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setMessage("❌" + err.message);
      } else {
        setMessage("❌ An unexpected error occurred");
      }
    }
  }

  return (
    <>
      <TitlePage title="Reset Password" />
      <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
          <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
            Reset Password
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="email"
              placeholder="Enter your email again"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="password"
              placeholder="New password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white  hover:bg-blue-700 hover:scale-95 transition-all duration-200"
            >
              Reset Password
            </button>

            {message && (
              <p
                className={`text-center text-sm font-medium ${
                  message.startsWith("✅") ? "text-green-600" : "text-red-600"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
