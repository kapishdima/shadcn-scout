import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Scout",
  description:
    "Keep your components from multiple registries up to date — safely and automatically.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
