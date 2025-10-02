import type { Metadata } from "next";
import NavBar from "./_components/navBar";

import "./globals.css";

export const metadata: Metadata = {
  title: "Revise Next.js",
  description: "Contact manager sort of web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-50">
          <NavBar />
          <main className="container mx-auto px-4 py-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
