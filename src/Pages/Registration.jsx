import { NavLink } from "react-router";
import { useState } from "react";

export default function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess("Registration successful! You can now login.");
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } else {
        setError(data.message || "Registration failed");
      }
    } catch {
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="flex h-[700px] w-full">
      {/* Left Image */}
      <div className="w-1/2 hidden md:block">
        <img
          src="https://images.unsplash.com/photo-1606046604972-77cc76aee944"
          className="h-full w-full object-cover"
          alt="Hotel"
        />
      </div>

      {/* Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-80 md:w-96 flex flex-col"
        >
          <h2 className="text-4xl font-medium text-center">Sign up</h2>
          <p className="text-sm text-gray-500 text-center mt-2">
            Welcome! Please sign up to continue
          </p>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-sm text-gray-400">Sign up with email</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-full px-5 h-12 text-sm mb-4 outline-none"
            required
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-full px-5 h-12 text-sm mb-4 outline-none"
            required
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-full px-5 h-12 text-sm mb-4 outline-none"
            required
          />

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border rounded-full px-5 h-12 text-sm mb-4 outline-none"
            required
          />

          {/* Messages */}
          {error && (
            <p className="text-red-600 text-sm mb-3 text-center">{error}</p>
          )}
          {success && (
            <p className="text-green-600 text-sm mb-3 text-center">{success}</p>
          )}

          <button
            type="submit"
            className="h-11 rounded-full bg-indigo-500 text-white font-medium hover:opacity-90 transition"
          >
            Sign up
          </button>

          <p className="text-sm text-gray-500 text-center mt-4">
            Already have an account?{" "}
            <NavLink to="/Login" className="text-indigo-500 hover:underline">
              Sign in
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}
