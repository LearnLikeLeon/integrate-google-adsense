import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Google Ads in a Next App",
  description: "Generated by leon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="google-adsense-account"
        // content="ca-pub-8911907858821489"
        content="${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID}"
      ></meta>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/*   The snippet from Google adsense */}

        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID}`}
          crossOrigin="anonymous"
        ></Script>

        {/* The body of the normal page.jsx  */}
        {children}
      </body>
    </html>
  );
}
