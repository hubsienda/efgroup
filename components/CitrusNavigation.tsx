import Image from "next/image";
import Link from "next/link";

const items = [
  { label: "CHI SIAMO", href: "/chi-siamo", colour: "var(--brand-orange)", textColour: "#ffffff" },
  { label: "PRODOTTI", href: "/prodotti", colour: "var(--brand-yellow)", textColour: "var(--text-primary)" },
  { label: "TEAM", href: "/team", colour: "var(--brand-green)", textColour: "#ffffff" },
  { label: "NEWS", href: "/news", colour: "var(--brand-dark-yellow)", textColour: "var(--text-primary)" },
  { label: "FAQ", href: "/faq", colour: "#c84208", textColour: "#ffffff" },
  { label: "CONTATTI", href: "/contatti", colour: "#0d7423", textColour: "#ffffff" },
];

export default function CitrusNavigation() {
  return (
    <>
      <nav className="citrus-wheel" aria-label="Navigazione principale della homepage">
        {items.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className="citrus-wedge"
            style={{
              "--i": index,
              "--wedge": item.colour,
              "--wedge-text": item.textColour,
            } as React.CSSProperties}
          >
            <span>{item.label}</span>
          </Link>
        ))}
        <Link href="/" className="citrus-centre" aria-label="Home">
          <Image src="/logo/logo.png" alt="" width={170} height={170} priority />
        </Link>
      </nav>
      <nav className="citrus-mobile" aria-label="Navigazione principale della homepage">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            style={{
              "--wedge": item.colour,
              "--wedge-text": item.textColour,
            } as React.CSSProperties}
          >
            <span>{item.label}</span><span aria-hidden="true">↗</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
