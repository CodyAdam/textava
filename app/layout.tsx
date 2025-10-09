import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
  style: "italic",
});

export const metadata: Metadata = {
  title: "Ava - Find freelance work",
  description:
    "Let Ava do the heavy lifting for you, make freelance work easy to find.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <div
          className="pointer-events-none fixed inset-0 z-50 opacity-20 dark:opacity-[15%]"
          style={{
            background: "url(/grain-106px.png) repeat",
            backgroundSize: "106px 106px",
            mixBlendMode: "soft-light",
          }}
        ></div>

        <div className="relative bg-white overflow-hidden p-6 flex flex-col items-center justify-center min-h-screen">
          {/* Logo */}
          <Link
            href="/"
            className="absolute top-6 left-6 z-20 flex items-center"
          >
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
          </Link>

          {/* Background image with blur */}
          <div className="absolute inset-0">
            <Image
              src="/bg.png"
              alt="Background"
              fill
              className="object-cover blur-[100px] scale-110"
              priority
            />
            {/* Light overlay to brighten the background */}
            <div className="absolute inset-0 bg-white/40" />
          </div>

          {/* Page content */}
          {children}

          {/* Footer */}
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
      </body>
    </html>
  );
}
