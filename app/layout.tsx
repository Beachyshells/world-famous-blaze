import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Rubik_Dirt, Kaushan_Script } from "next/font/google";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { AgeGate } from "./components/AgeGate";
import { BagProvider } from './context/BagContext'
import BagDrawer from './components/BagDrawer'
import './globals.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const rubikDirt = Rubik_Dirt({
  variable: "--font-rubik-dirt",
  subsets: ["latin"],
  weight: "400",
});

const kaushanScript = Kaushan_Script({
  variable: "--font-kaushan",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "World-Famous-Blaze | Premium Cannabis",
  description: "World-Famous-Blaze dispensary. For adults 21 and older.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${rubikDirt.variable} ${kaushanScript.variable} h-full antialiased overflow-x-hidden`}    >
      <body className="min-h-full flex flex-col">
        <AgeGate />
        <BagProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <BagDrawer />
        </BagProvider>
      </body>
    </html>
  );
}
