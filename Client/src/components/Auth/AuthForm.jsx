"use client";

import { useState } from "react";
import Button from "../Common/Button";
import { useNavigate } from "react-router-dom";

export default function AuthForm({ title, onSubmit, type }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isLogin = type === "login";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">

        <h2 className="text-2xl font-semibold text-center mb-6">
          {title}
        </h2>

        {/* Email */}
        <div className="mb-4">
          <label className="text-sm text-gray-500">Email</label>
          <input
            type="email"
            className="border p-2 rounded w-full"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="text-sm text-gray-500">Password</label>
          <input
            type="password"
            className="border p-2 rounded w-full"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button
          className="w-full bg-black text-white py-2 rounded"
          onClick={() => onSubmit(email, password)}
        >
          {title}
        </Button>

        {/* 🔁 Login / Signup Switch */}
        <p className="text-center text-sm text-gray-600 mt-4">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <span
                className="text-black font-semibold cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                Sign up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                className="text-black font-semibold cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </>
          )}
        </p>

      </div>
    </div>
  );
}
