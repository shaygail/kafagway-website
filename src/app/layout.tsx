import type { Metadata, Viewport } from "next";
import { Geist, Source_Sans_3 } from "next/font/google";
import { BookingBar } from "@/components/layout/BookingBar";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HeaderSpacer } from "@/components/layout/HeaderSpacer";
import { MenuProvider } from "@/components/layout/MenuContext";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { siteConfig } from "@/config/site";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.name}`,
  },
  description:
    "Kafagway Dental Center offers personalised dental care in Baguio City. Book a consultation through the clinic’s Facebook page or by phone.",
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#171717",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${sourceSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-paper text-ink">
        <MenuProvider>
          <ScrollProgress />
          <a className="skip" href="#content">
            Skip to content
          </a>
          <Header />
          <HeaderSpacer />
          <main id="content">{children}</main>
          <Footer />
          <BookingBar />
        </MenuProvider>
      </body>
    </html>
  );
}
