"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [email, setEmail] = useState("");
  const [joinedCount, setJoinedCount] = useState(65);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission here
    console.log("Email submitted:", email);
  };

  useEffect(() => {
    const calculateJoinedCount = () => {
      // Reference date: October 8, 2025, 00:00:00
      const referenceDate = new Date("2025-10-08T00:00:00");
      const now = new Date();

      // Calculate difference in milliseconds
      const diffMs = now.getTime() - referenceDate.getTime();

      // Calculate number of 30-minute intervals (1800000 ms = 30 minutes)
      const intervals = Math.floor(diffMs / (30 * 60 * 1000));

      // Start at 65 and add intervals
      setJoinedCount(65 + intervals);
    };

    // Calculate immediately
    calculateJoinedCount();

    // Update every minute to keep it current
    const interval = setInterval(calculateJoinedCount, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <div className="absolute top-6 left-6 z-20 flex items-center">
        <Image
          src="/logo.png"
          alt="Ava Logo"
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
          priority
        />
        <span className="ml-3 text-2xl font-semibold font-sans text-black tracking-tight select-none">
          Ava
        </span>
      </div>

      {/* Background image with blur */}
      <div className="absolute inset-0">
        <Image
          src="/bg3.png"
          alt="Background"
          fill
          className="object-cover blur-[100px] scale-110"
          priority
        />
        {/* Light overlay to brighten the background */}
        <div className="absolute inset-0 bg-white/40" />
      </div>

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Badge */}
        <div className="mb-8">
          <span className="inline-block px-4 py-2 text-sm font-medium text-black/80 bg-black/5 backdrop-blur-sm rounded-full border border-black/20">
            currently working with 19 handpicked freelancers
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-black text-center mb-6 max-w-4xl">
          Do you find it{" "}
          <em className="font-serif not-italic font-medium">hard</em> to
          <br />
          find <em className="font-serif not-italic font-medium">
            freelance{" "}
          </em>{" "}
          work?
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-black/70 text-center mb-12 max-w-2xl">
          Ava analyzes your network to surface the most relevant freelance jobs
          and contacts, so you spend less time searching and more time working.
          Invite-only access. Join the waitlist to be the first to try it out.
        </p>

        {/* Email form */}
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="flex items-center gap-2 bg-black/5 backdrop-blur-sm rounded-xl p-1.5 border border-black/20">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent text-black placeholder:text-black/50 px-4 py-2.5 outline-none"
              required
            />
            <button
              type="submit"
              className="px-6 py-2.5 bg-black text-white font-medium rounded-md hover:bg-black/90 transition-colors whitespace-nowrap"
            >
              Join waitlist
            </button>
          </div>
        </form>
        <span className="text-black/40 text-sm mt-4">
          {joinedCount} already joined
        </span>
      </main>
      <footer className="absolute bottom-6 left-0 right-0 z-20 flex items-center w-full justify-center">
        <span className="text-black/40 text-sm flex items-center gap-2">
          <a
            href="https://www.linkedin.com/company/avalonfutureofwork"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-black/40 hover:text-black transition-colors ml-2"
            aria-label="Ava on LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="inline-block align-middle size-8"
            >
              <path
                fill="currentColor"
                d="M18.336 18.339h-2.665v-4.177c0-.996-.02-2.278-1.39-2.278c-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387c2.7 0 3.2 1.778 3.2 4.092v4.714M7.004 8.575a1.546 1.546 0 0 1-1.548-1.549a1.548 1.548 0 1 1 1.547 1.549m1.336 9.764H5.667V9.75H8.34zM19.67 3H4.33C3.594 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.339C20.4 21 21 20.42 21 19.703V4.297C21 3.581 20.4 3 19.666 3z"
              />
            </svg>
          </a>
        </span>
      </footer>
    </div>
  );
}
