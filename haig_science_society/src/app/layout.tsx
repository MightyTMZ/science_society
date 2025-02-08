import type { Metadata } from "next";
import Head from "next/head";
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import NavBar from "@/components/NavBar";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const bebas_neue = Bebas_Neue({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas-neue",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Earl Haig Science Society",
  description:
    "Here for Earl Haig STEM Opportunities, Labs, & Contest Help🥼🔬",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.jpg" sizes="any" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${bebas_neue.variable} antialiased`}
      >
        <Analytics />
        <NavBar />

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
