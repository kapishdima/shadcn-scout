import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Scout",
  description:
    "Keep your components from multiple registries up to date — safely and automatically.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://scoutcn.dev",
    title: "Scout",
    description:
      "Keep your components from multiple registries up to date — safely and automatically.",
    siteName: "Scout",
    images: [
      {
        url: `https://scoutcn.dev/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Scout",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scout",
    description:
      "Keep your components from multiple registries up to date — safely and automatically.",
    images: [`https://scoutcn.dev/opengraph-image.png`],
    creator: "@kapish_dima",
  },
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
