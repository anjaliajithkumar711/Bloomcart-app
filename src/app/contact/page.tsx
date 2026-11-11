"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setStatus("Message sent successfully!");

      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("Something went wrong. Please try again.");
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold text-center text-emerald-700">
        Contact Us
      </h1>

      <p className="text-center text-gray-500 mt-3 mb-10">
        Have questions? We would love to hear from you.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 space-y-5"
      >

        <div>
          <label className="block font-medium mb-2">
            Full Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border rounded-lg p-3"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Email Address
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border rounded-lg p-3"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Message
          </label>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="w-full border rounded-lg p-3"
            placeholder="Write your message"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-700 text-white py-3 rounded-lg hover:bg-emerald-800"
        >
          Send Message
        </button>

        {status && (
          <p className="text-center text-emerald-700">
            {status}
          </p>
        )}

      </form>

    </section>
  );
}