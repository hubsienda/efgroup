import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import "./refinements.css";
import "./team-gallery.css";
import "./event-footer.css";
import "./cookie-consent.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CookieConsent from "@/components/CookieConsent";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://erraferrini.group"),
  title: {
    default: "Erra & Ferrini Group | Import & Export Ortofrutta",
    template: "%s | Erra & Ferrini Group",
  },
  description:
    "Erra & Ferrini Group: selezione, importazione, esportazione e distribuzione di prodotti ortofrutticoli di alta qualità.",
  icons: { icon: "/logo/favicon.png" },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Erra & Ferrini Group",
    title: "Erra & Ferrini Group | Import & Export Ortofrutta",
    description:
      "Selezione, importazione, esportazione e distribuzione di prodotti ortofrutticoli di alta qualità.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={`${display.variable} ${sans.variable}`}>
      <body id="top">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <CookieConsent />
      </body>
    </html>
  );
}
