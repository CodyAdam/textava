import Link from "next/link";

const INITIAL_JOINS = 25;
const INITIAL_DATE = new Date("2025-10-08T16:00:00");
const NEW_JOINS_AFTER_MINUTES = 113; // after X minutes, increment new joins by 1
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

      {/* CTA Button */}
      <Link
        href="/get-started"
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
        Share your portfolio on WhatsApp
      </Link>
      <span className="text-black/40 text-sm mt-4">
        {JOINED_COUNT} Designers using their network as an unfair advantage
      </span>
    </main>
  );
}
