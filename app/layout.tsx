import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

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
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
