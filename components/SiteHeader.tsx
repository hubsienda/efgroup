import Image from "next/image";
import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";

const nav = [
  ["Home", "/"],
  ["Chi siamo", "/chi-siamo"],
  ["Prodotti", "/prodotti"],
  ["Team", "/team"],
  ["FAQ", "/faq"],
  ["Contatti", "/contatti"],
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand" aria-label="Erra & Ferrini Group — Home">
          <Image src="/logo/logo-text.png" alt="Erra & Ferrini Group" width={196} height={58} priority />
        </Link>
        <nav className="desktop-nav" aria-label="Navigazione principale">
          {nav.map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}
