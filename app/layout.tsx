import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Al Grey's Cleaning Services | Birmingham & Midlands",
    template: "%s | Al Grey's Cleaning Services",
  },
  description:
    "Professional gutter cleaning, window cleaning, pressure washing and property maintenance across Birmingham and the Midlands. Trusted since 2010. Free quotes, fully insured.",
  keywords: [
    "gutter cleaning Birmingham",
    "window cleaning Birmingham",
    "pressure washing Midlands",
    "property maintenance Birmingham",
    "Al Grey's Cleaning Services",
    "gutter cleaning Midlands",
  ],
  metadataBase: new URL("https://www.algreyscleaningservices.co.uk"),
  openGraph: {
    siteName: "Al Grey's Cleaning Services",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}