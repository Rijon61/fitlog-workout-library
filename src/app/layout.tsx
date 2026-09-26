import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";
import NavBer from "@/components/shared/NavBer/NavBer";
import FooTer from "@/components/shared/Footer/Footer";
import WorkoutsProvider from "@/context/WorkoutsProvider";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitLog | Workout & Fitness Tracker",
  description:
    "Explore workouts, discover exercises, and track your fitness journey with FitLog.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="black"
      className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#0C0D10] text-white">
        <WorkoutsProvider>
          <NavBer />

          <main className="flex-1">{children}</main>
          <FooTer />
          <ToastContainer />
        </WorkoutsProvider>
      </body>
    </html>
  );
}
