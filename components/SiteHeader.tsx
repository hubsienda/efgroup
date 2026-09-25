import Image from "next/image";
import Link from "next/link";

const nav = [
  ["Chi siamo", "/chi-siamo"],
  ["Prodotti", "/prodotti"],
  ["Team", "/team"],
  ["News", "/news"],
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
        <details className="mobile-menu">
          <summary aria-label="Apri il menu">Menu</summary>
          <nav aria-label="Navigazione mobile">
            {nav.map(([label, href]) => (
              <Link key={href} href={href}>{label}</Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
