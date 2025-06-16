import type { Metadata, Viewport } from "next";
import PlanetOrbit from "@/components/mainpage/bg";
import "./globals.css";
import NavBar from "@/components/navs";
import { Arrow } from "@/components/navs";
import Me from "@/components/mySelf";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    template: "%s Akash",
    default: "Huzaif - Portfolio",
  },
  description: "Hi There! Let's build cool things together. You in? 👾",
  keywords: [
    "Huzaif",
    "vin kya karas be cxei wan",
    "software developer",
    "portfolio",
    "web development",
    "Next.js",
    "React",
    "technology",
    "projects",
  ],
  authors: [{ name: "Huzaif" }],
  robots: "index, follow",
  icons: {
    icon: "/image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Huzaif's Portfolio",
    description:
      "Huzaif's portfolio for software projects and tech skills.",
    creator: "@Aakash41339611",
    images: ["akash.jpeg"],
  },
  openGraph: {
    title: "Huzaif - Portfolio",
    url: "https://akash09.vercel.app",
    siteName: "Huzaif",
    images: [
      {
        url: "akash.jpeg",
        width: 600,
        height: 600,
        alt: "Huzaif Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  height: "device-height",
  initialScale: 1,
  viewportFit: "cover",
  maximumScale : 1
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="/hScroll.js" strategy="afterInteractive" />
      </head>
      <body className="bg-[#ebfffe] new-scrollbar">
        <div className="overflow-auto md:overflow-visible bg-[#ebfffe] z-[40]">
        <div className="fixed inset-0 z-0"><PlanetOrbit></PlanetOrbit></div>

        <div className="fixed top-[1.7vh] md:left-4 h-[96.6dvh] md:w-[6rem] w-[2.5rem] md:border rounded-lg dark:border-white border-black  bg-[#ebfffe] z-[100]">
          <Me/></div>

          <div className="ml-[3rem] md:ml-[7.8rem] h-[100dvh] flex z-40 ">
            <NavBar />
            <div className={`flex-grow z-20`}>{children}</div>
            <div className="md:flex hidden z-30">
              <Arrow /></div>
            <div className="fixed right-12 top-12 md:hidden z-30">
              <Arrow /></div>
          </div>
        </div>
        
      </body>
    </html>
  );
}