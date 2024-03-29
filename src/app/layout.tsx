import { AuthUserProvoder } from "@/context/useContext";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: "500", style: "normal" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthUserProvoder>
      <html lang="fr">
        <body className={inter.className}>
          <ToastContainer position="top-center" />
          {children}
          <SpeedInsights />
          <Analytics />
        </body>
      </html>
    </AuthUserProvoder>
  );
}
