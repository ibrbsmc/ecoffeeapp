"use client";
import React, { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Gönderim durumu: "idle" | "sending" | "success" | "error"
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="rounded-2xl border border-mauve-800/50 p-6 sm:p-8">
      <h3 className="font-(family-name:--font-merienda) text-lg font-bold mb-6">
        Send a Message
      </h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs uppercase tracking-wider text-mauve-500">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="bg-transparent border border-mauve-800 rounded-lg px-4 py-2.5 text-sm text-mauve-100 placeholder:text-mauve-600 focus:outline-none focus:border-mauve-500 transition-colors duration-300"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs uppercase tracking-wider text-mauve-500">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className="bg-transparent border border-mauve-800 rounded-lg px-4 py-2.5 text-sm text-mauve-100 placeholder:text-mauve-600 focus:outline-none focus:border-mauve-500 transition-colors duration-300"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs uppercase tracking-wider text-mauve-500">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="What is this about?"
            className="bg-transparent border border-mauve-800 rounded-lg px-4 py-2.5 text-sm text-mauve-100 placeholder:text-mauve-600 focus:outline-none focus:border-mauve-500 transition-colors duration-300"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs uppercase tracking-wider text-mauve-500">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Write your message here..."
            className="bg-transparent border border-mauve-800 rounded-lg px-4 py-2.5 text-sm text-mauve-100 placeholder:text-mauve-600 focus:outline-none focus:border-mauve-500 transition-colors duration-300 resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 bg-mauve-100 text-black px-5 py-2.5 rounded-md text-sm font-(family-name:--font-merienda) hover:bg-mauve-300 transition-colors duration-300 cursor-pointer w-full sm:w-auto sm:self-end disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
          <Send size={14} />
        </button>

        {status === "success" && (
          <p className="text-green-400 text-sm text-right">
            Message sent successfully!
          </p>
        )}

        {status === "error" && (
          <p className="text-red-400 text-sm text-right">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}