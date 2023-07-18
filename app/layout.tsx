import Head from "next/head";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quizzy",
  description: "Powerhouse for Remote Team Collaboration",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
