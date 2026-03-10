import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { BackgroundAnimation } from "@/components/ui/BackgroundAnimation";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Vasu Bhalodi - Portfolio",
  description: "Modern portfolio website of Vasu Bhalodi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased font-sans`}
      >
        <BackgroundAnimation />
        {children}
      </body>
    </html>
  );
}
