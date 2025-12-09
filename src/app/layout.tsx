// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Head from "next/head";
import React from "react";
import GoogleAnalytics from "@/components/GoogleAnalytics";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "DODO Academy",
  description:
    "DODO is a research-driven design consultancy, based out of Africa. We’re built to help businesses discover their market’s true needs and bring valuable solutions to market.",
  applicationName: "DODO Academy",
  authors: [{ name: "DODO Design Team", url: "https://dododesign.africa" }],
  creator: "DODO Design - Africa",
  publisher: "DODO Design - Africa",
  openGraph: {
    title: "Contact DODO",
    description:
      "DODO is a research-driven design consultancy, based out of Africa...",
    url: "https://dododesign.africa/contact",
    images: [
      {
        url: "https://dododesign.africa/favicon_new.png",
        width: 1200,
        height: 630,
        alt: "contact DODO Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact DODO",
    description:
      "DODO is a research-driven design consultancy, based out of Africa...",
    images: ["https://dododesign.africa/favicon_new.png"],
  },
  metadataBase: new URL("https://dododesign.africa"),
  icons: [
    {
      url: "/favicon_new.svg",
      type: "image/svg+xml",
      sizes: "512x512",
    },
    {
      url: "/favicon_new.png",
      type: "image/png",
      sizes: "512x512",
    },
    {
      url: "/favicon_new.ico",
      type: "image/png",
      sizes: "512x512",
    },
  ],
};

const isProduction = process.env.NODE_ENV === "production";
export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon_new.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon_new.png"
          sizes="512x512"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon_new.svg" />
        <link
          rel="preload"
          href="/fonts/HelveticaNeue-Light.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/HelveticaNeue-Roman.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/HelveticaNeueBold.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/HelveticaNeueMedium.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              url: "https://dododesign.africa/",
              logo: "https://dododesign.africa/favicon.svg",
              name: "Dodo Design Africa",
            }),
          }}
        />
      </Head>
      <body className={`mx-auto font-helvetica antialiased `}>
        <NavBar />
        {children}
        <Footer />
        {isProduction && <GoogleAnalytics />}
      </body>
    </html>
  );
}
