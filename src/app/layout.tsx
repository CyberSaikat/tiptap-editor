import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tiptap Editor",
  description: "A customizable and feature-rich text editor built with Tiptap and React, designed for seamless integration with Next.js.",
  openGraph: {
    title: "Tiptap Editor",
    description: "A feature-rich, customizable text editor for React and Next.js.",
    url: new URL("https://tiptap-editor-next.vercel.app/"),
    siteName: "Tiptap Editor",
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle",
    title: "Tiptap Editor",
    description: "A customizable and feature-rich text editor for React and Next.js.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`p-5`}>{children}</body>
    </html>
  );
}
