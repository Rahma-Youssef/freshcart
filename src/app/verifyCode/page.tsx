"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiFetch } from "@/lib/api";
import TitlePage from "../_componets/TitlePage/TitlePage";

export default function VerifyCodePage() {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await apiFetch("/auth/verifyResetCode", {
        method: "POST",
        body: JSON.stringify({ resetCode: code }),
      });

      setMessage("✅ Code verified! Redirecting...");
   
      setTimeout(() => {
        router.push("/resetPassword");
      }, 1500);
    } catch (err: any) {
      setMessage("❌ " + err.message);
    }
  }

  return (
   <>
    <TitlePage title="Verify Reset Code" />
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Verify Reset Code
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Enter reset code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white  hover:bg-blue-700 hover:scale-95 transition-all duration-200"
          >
            Verify
          </button>

          {message && (
            <p
              className={`text-center text-sm font-medium ${
                message.startsWith("✅")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </div></>
  );
}
