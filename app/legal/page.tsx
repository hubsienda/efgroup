import type { Metadata } from "next";
import Link from "next/link";
import InternalPageHero from "@/components/InternalPageHero";
import styles from "@/components/LegalPages.module.css";

export const metadata: Metadata = {
  title: "Legale",
  description: "Informazioni legali di Erra & Ferrini Group: privacy e GDPR, cookie policy, note legali e accessibilità.",
};

const destinations = [
  {
    title: "Privacy & GDPR",
    description: "Informazioni sul trattamento dei dati personali, sulle finalità del trattamento e sui diritti degli interessati.",
    href: "/legal/privacy",
  },
  {
    title: "Cookie Policy",
    description: "Informazioni sui cookie utilizzati dal sito e sulle modalità di gestione delle preferenze.",
    href: "/legal/cookie-policy",
  },
  {
    title: "Note Legali",
    description: "Condizioni di utilizzo del sito, proprietà intellettuale, responsabilità e collegamenti verso siti esterni.",
    href: "/legal/note-legali",
  },
  {
    title: "Accessibilità",
    description: "Dichiarazione di accessibilità e informazioni relative all’European Accessibility Act.",
    href: "/legal/accessibilita",
  },
];

export default function Page() {
  return (
    <>
      <InternalPageHero
        eyebrow="Erra & Ferrini Group"
        title="Legale"
        intro="In questa sezione sono disponibili le informazioni legali relative al sito web di Erra & Ferrini Group, al trattamento dei dati personali, all’utilizzo dei cookie e all’accessibilità dei servizi digitali."
      />

      <section className={styles.hubSection}>
        <div className="shell">
          <p className={styles.updated}>Documenti legali aggiornati al 25/09/2026</p>
          <div className={styles.hubGrid}>
            {destinations.map((item) => (
              <Link key={item.href} href={item.href} className={styles.hubCard}>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
                <span>Consulta →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
