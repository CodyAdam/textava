import Link from "next/link";

const INITIAL_JOINS = 100;
const INITIAL_DATE = new Date("2025-10-08T16:00:00");
const NEW_JOINS_AFTER_MINUTES = 2000; // after X minutes, increment new joins by 1
// Reference date: October 8, 2025, 00:00:00
const referenceDate = INITIAL_DATE;
const now = new Date();

// Calculate difference in milliseconds
const diffMs = now.getTime() - referenceDate.getTime();
const intervals = Math.floor(diffMs / (NEW_JOINS_AFTER_MINUTES * 60 * 1000));
const JOINED_COUNT = INITIAL_JOINS + intervals;

export default function Home() {
  return (
    <main className="relative z-10 flex flex-col items-center justify-center px-4">
      
      {/* Top proof bar (replaces early access) */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] leading-6 text-black/70">
       <span><span className="font-semibold text-black">100+</span> conversations</span>
       <span aria-hidden="true" className="select-none">•</span>
       <span><span className="font-semibold text-black">200+</span> personalised leads sent</span>
       <span aria-hidden="true" className="select-none">•</span>
       <span><span className="font-semibold text-black">90%</span> US-based leads</span>
     </div>

      {/* Heading */}
      <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-black text-center mb-6 max-w-4xl">
        Ava turns your {" "}
        <em className="font-serif not-italic font-medium">LinkedIn</em> into
        premium{" "}
        <em className="font-serif not-italic font-medium">
          client introductions
        </em>
      </h1>

      {/* Subheading */}
      <p className="text-lg md:text-xl text-black/70 text-center mb-12 max-w-2xl">
        She matches your portfolio to the right opportunities, finds connections who can vouch for you, then helps you make the introduction.
      </p>

      {/* QR Code CTA */}
      <div className="mt-8 flex flex-col items-center">
        <img
          src="/IMG_2688.png" // path to your QR code in /public
          alt="Scan to connect on WhatsApp"
          className="w-40 h-40 rounded-xl border border-black/10 shadow-sm hover:scale-105 transition-transform"
       />
        <p className="mt-3 text-sm text-black/60">Scan to share your portfolio on WhatsApp</p>
     </div>
      <span className="text-black/40 text-sm mt-4">
        {JOINED_COUNT} Designers using their network as an unfair advantage
      </span>
    </main>
  );
}
