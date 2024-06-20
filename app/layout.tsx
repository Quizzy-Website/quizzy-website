import "./globals.css";
import type { Metadata } from "next";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "Quizzy",
  description: "Powerhouse for Remote Team Collaboration",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-T8CB9ZX7" />
      <body>{children}</body>
    </html>
  );
}
