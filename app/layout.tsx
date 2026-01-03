import type { Metadata } from "next";
import { Oswald, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "shadcn/scout - Update components from all registries",
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
    </html>
  );
}
