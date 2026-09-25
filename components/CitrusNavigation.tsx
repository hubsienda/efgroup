import Image from "next/image";
import Link from "next/link";
import styles from "./CitrusNavigation.module.css";

const items = [
  {
    label: "CHI SIAMO",
    href: "/chi-siamo",
    colour: "#E53935",
    textColour: "#000000",
    path: "M 50 50 L 49.895 0.000 A 50 50 0 0 1 97.585 34.649 Z",
    labelX: 69.5,
    labelY: 22.5,
  },
  {
    label: "PRODOTTI",
    href: "/prodotti",
    colour: "#FB8C00",
    textColour: "#000000",
    path: "M 50 50 L 97.520 34.450 A 50 50 0 0 1 79.304 90.512 Z",
    labelX: 82,
    labelY: 60,
  },
  {
    label: "TEAM",
    href: "/team",
    colour: "#FDD835",
    textColour: "#000000",
    path: "M 50 50 L 79.474 90.389 A 50 50 0 0 1 20.526 90.389 Z",
    labelX: 50,
    labelY: 84,
  },
  {
    label: "FAQ",
    href: "/faq",
    colour: "#43A047",
    textColour: "#000000",
    path: "M 50 50 L 20.696 90.512 A 50 50 0 0 1 2.480 34.450 Z",
    labelX: 18,
    labelY: 60,
  },
  {
    label: "CONTATTI",
    href: "/contatti",
    colour: "#5E35B1",
    textColour: "#ffffff",
    path: "M 50 50 L 2.415 34.649 A 50 50 0 0 1 50.105 0.000 Z",
    labelX: 30.5,
    labelY: 22.5,
  },
];

export default function CitrusNavigation() {
  return (
    <>
      <nav className={styles.wheel} aria-label="Navigazione principale della homepage">
        <svg
          className={styles.svg}
          viewBox="0 0 100 100"
          role="img"
          aria-label="Navigazione principale: cinque sezioni"
        >
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.sectorLink}
              aria-label={item.label}
            >
              <path className={styles.sector} d={item.path} fill={item.colour} />
              <text
                className={styles.label}
                x={item.labelX}
                y={item.labelY}
                fill={item.textColour}
                textAnchor="middle"
                dominantBaseline="middle"
                aria-hidden="true"
              >
                {item.label}
              </text>
            </a>
          ))}
        </svg>
        <Link href="/" className={styles.centre} aria-label="Home">
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
