import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { Metadata } from "next";
import Head from "next/head";

import Header from "@/components/Header";

export const metadata: Metadata = {
  title: {
    default: "E-commerce",
    template: "%s | E-commerce",
  },
  description: "A simple e-commerce app",
  keywords: ["e-commerce", "shop", "store"],
  openGraph: {
    images: [
      "https://res.cloudinary.com/duhg69iln/image/upload/w_1024/b5xxwg66e5ixboms4gb7.webp",
    ],
    description: "A simple e-commerce app",
  },
};

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Head>
          <link rel="icon" href="/logo/logo.png" />
        </Head>
        <body>
          <Header />
          {children}
          <ToastContainer />
        </body>
      </html>
    </ClerkProvider>
  );
}
