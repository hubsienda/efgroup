import Image from "next/image";
import Link from "next/link";

const items = [
  { label: "CHI SIAMO", href: "/chi-siamo", colour: "#E53935", textColour: "#000000" },
  { label: "PRODOTTI", href: "/prodotti", colour: "#FB8C00", textColour: "#000000" },
  { label: "TEAM", href: "/team", colour: "#FDD835", textColour: "#000000" },
  { label: "FAQ", href: "/faq", colour: "#43A047", textColour: "#000000" },
  { label: "CONTATTI", href: "/contatti", colour: "#5E35B1", textColour: "#ffffff" },
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
