"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiFetch } from "@/lib/api";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState("");

  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setInfo("");
    try {
 
      await apiFetch("/auth/forgotPasswords", {
        method: "POST",
        body: JSON.stringify({ email }),
      });
 
      setInfo("send");
      router.push("/verifyCode")
    } catch (erorr:unknown) {
      setInfo(error.message || " Try again");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto  p-6 shadow-lg rounded-lg border mt-30">
      <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border px-3 py-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 hover:scale-95 text-white py-2 rounded transition-all duration-200 cursor-pointer"
        >
          Send Reset Link
        </button>
        {info && <p>{info}</p>}
      </form>
    </div>
  );
}
