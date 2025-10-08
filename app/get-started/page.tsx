"use client";

import Image from "next/image";
import { useState } from "react";

export default function GetStarted() {
  const [copied, setCopied] = useState(false);

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText("+1 (628) 800-6615");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="relative bg-white overflow-hidden p-6 flex flex-col items-center justify-center min-h-screen">
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
      <main className="relative z-10 flex flex-col items-center justify-center px-4">
        {/* Heading */}
        <h1 className="text-4xl font-medium tracking-tight text-black text-center max-w-4xl text-pretty">
          To get started, just text Ava on WhatsApp
        </h1>

        {/* Phone number */}
        <p className="text-3xl font-mono bg-black/5 backdrop-blur-sm rounded-3xl py-4 px-6 font-medium text-black mb-8 mt-8">
          +1 (628) 800-6615
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <a
            href="https://wa.me/16288006615"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 bg-black text-white font-medium rounded-3xl hover:bg-black/70 transition-colors text-lg flex items-center justify-center gap-3 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="size-6"
            >
              <path
                fill="currentColor"
                d="m7.254 18.494l.724.423A7.95 7.95 0 0 0 12.001 20a8 8 0 1 0-8-8a7.95 7.95 0 0 0 1.084 4.024l.422.724l-.653 2.401zM2.005 22l1.352-4.968A9.95 9.95 0 0 1 2.001 12c0-5.523 4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10a9.95 9.95 0 0 1-5.03-1.355zM8.392 7.308q.202-.014.403-.004q.081.006.162.016c.159.018.334.115.393.249q.447 1.015.868 2.04c.062.152.025.347-.093.537c-.06.097-.154.233-.263.372c-.113.145-.356.411-.356.411s-.099.118-.061.265c.014.056.06.137.102.205l.059.095c.256.427.6.86 1.02 1.268c.12.116.237.235.363.346c.468.413.998.75 1.57 1l.005.002c.085.037.128.057.252.11q.093.039.191.066q.036.01.073.011a.35.35 0 0 0 .295-.142c.723-.876.79-.933.795-.933v.002a.48.48 0 0 1 .378-.127q.092.004.177.04c.531.243 1.4.622 1.4.622l.582.261c.098.047.187.158.19.265c.004.067.01.175-.013.373c-.032.259-.11.57-.188.733a1.2 1.2 0 0 1-.21.302a2.4 2.4 0 0 1-.33.288q-.124.092-.125.09a5 5 0 0 1-.383.22a2 2 0 0 1-.833.23c-.185.01-.37.024-.556.014c-.008 0-.568-.087-.568-.087a9.45 9.45 0 0 1-3.84-2.046c-.226-.199-.436-.413-.65-.626c-.888-.885-1.561-1.84-1.97-2.742a3.5 3.5 0 0 1-.33-1.413a2.73 2.73 0 0 1 .565-1.68c.073-.094.142-.192.261-.305c.126-.12.207-.184.294-.228a1 1 0 0 1 .371-.1"
              />
            </svg>
            Open in WhatsApp
          </a>
          <button
            onClick={copyNumber}
            className="px-6 py-4 bg-black/60 text-white font-medium rounded-3xl hover:bg-black/40 transition-colors text-lg flex items-center justify-center gap-3 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="size-6"
            >
              <path
                fill="currentColor"
                d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
              />
            </svg>
            {copied ? "Copied!" : "Copy number"}
          </button>
        </div>

        {/* Next step info */}
        <p className="text-base md:text-lg text-black/60 text-center max-w-xl">
          Ava will greet you with the next step
        </p>
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
