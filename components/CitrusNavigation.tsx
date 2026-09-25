import Image from "next/image";
import Link from "next/link";

const items = [
  { label: "CHI SIAMO", href: "/chi-siamo", colour: "#d96c22" },
  { label: "PRODOTTI", href: "/prodotti", colour: "#e6ad1a" },
  { label: "TEAM", href: "/team", colour: "#54873b" },
  { label: "NEWS", href: "/news", colour: "#b84b3d" },
  { label: "FAQ", href: "/faq", colour: "#83a936" },
  { label: "CONTATTI", href: "/contatti", colour: "#75506f" },
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
            style={{ "--i": index, "--wedge": item.colour } as React.CSSProperties}
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
          <Link key={item.href} href={item.href} style={{ "--wedge": item.colour } as React.CSSProperties}>
            <span>{item.label}</span><span aria-hidden="true">↗</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
