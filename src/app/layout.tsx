import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import {Header, Footer} from "./components/navigation"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mayhem Industries",
  description: "Connect, discuss, and conquer in a community made for gamers.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900 h-screen text-white fadeInQuickly`}>
        <Header />
          <div className="bg-gradient-to-b from-purple-800 to-slate-950 min-h-screen">
            {children}
          </div>
        <Footer />
      </body>
    </html>
  );
}
