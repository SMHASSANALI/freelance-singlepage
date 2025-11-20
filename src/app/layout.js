import { Mulish } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

export const metadata = {
  title: "AYLUX | Australia - Asia Trade & Logistics",
  description:
    "Aylux specializes in FMCG sourcing, global logistics, medical goods supply, and Australian market entry services.",
  openGraph: {
    title: "AYLUX - Global Trade Partner",
    description:
      "Australian-headquartered import-export experts in Medical Goods & FMCG",
    url: "https://aylux.com.au",
    siteName: "Aylux Pvt Ltd",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon_io/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />

        <link
          rel="android-chrome-192x192"
          sizes="192x192"
          href="/favicon_io/android-chrome-192x192.png"
        />
        <link
          rel="android-chrome-512x512"
          sizes="512x512"
          href="/favicon_io/android-chrome-512x512.png"
        />

        <link rel="preload" href="/favicon_io/favicon.ico" as="image" />
      </head>

      <body className={`${mulish.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
