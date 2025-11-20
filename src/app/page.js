import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Explore from "@/components/Explore";
import InsightsSlider from "@/components/InsightsSlider";
import Services from "@/components/Services";
import Link from "next/link";

export const metadata = {
  title: "AYLUX | Medical Goods & FMCG Import Export Australia - South Asia",
  description:
    "Australian-headquartered import-export specialists in Medical Goods (TGA compliant) and Fast-Moving Consumer Goods (FMCG). Seamless trade between Australia, Sri Lanka, Malaysia, USA, Canada & South Asia.",
  keywords:
    "medical goods import Australia, FMCG export South Asia, TGA compliance Australia, Australian medical supplier, FMCG trade Australia, import export Australia South Asia, medical devices Australia, consumer goods logistics",
  authors: [{ name: "Aylux Pvt Ltd" }],
  publisher: "Aylux Pvt Ltd",
  alternates: {
    canonical: "https://www.aylux.com.au",
  },
  openGraph: {
    title:
      "AYLUX - Global Trade Partner | Medical & FMCG Australia - South Asia",
    description:
      "Trusted Australian importer of medical goods & exporter of FMCG to South Asia. Full regulatory compliance • End-to-end logistics • Market entry support.",
    url: "https://www.aylux.com.au",
    siteName: "Aylux",
    images: [
      {
        url: "/images/og-image.jpg", // 1200×630 recommended
        width: 1200,
        height: 630,
        alt: "Aylux - Australian Medical & FMCG Trade Specialists",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AYLUX | Medical & FMCG Trade Australia - South Asia",
    description:
      "TGA-compliant medical imports • FMCG export to South Asia • Australian headquartered",
    images: ["/images/home/global.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <div className="bg-[#F2F2F2]">
        <Services />
      </div>
      <Explore />
      <div className="bg-[#F2F2F2]">
        <InsightsSlider />
      </div>
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-6 items-center justify-center px-8 md:px-16 py-20">
        <h3 className="text-2xl font-bold">PARTNERS CONTRIBUTING WITH US</h3>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly w-full">
          <Link
            href="https://www.jaydsolutions.com/"
            target="_blank"
            className="w-60 h-20 flex items-center justify-center group hover:bg-[#fffffa] hover:shadow rounded-lg transition-all duration-300"
          >
            <p className="transition-all duration-300 text-gray-400 group-hover:text-yellow-400 font-extrabold uppercase text-2xl">
              JAYD Solutions
            </p>
          </Link>
        </div>
      </div>
      <Contact />
    </div>
  );
}
