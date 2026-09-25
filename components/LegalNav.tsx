import Link from "next/link";
import styles from "./LegalPages.module.css";

const links = [
  ["Legal", "/legal"],
  ["Privacy & GDPR", "/legal/privacy"],
  ["Cookie Policy", "/legal/cookie-policy"],
  ["Note Legali", "/legal/note-legali"],
  ["Accessibilità", "/legal/accessibilita"],
];

export default function LegalNav() {
  return (
    <nav className={styles.legalNav} aria-label="Navigazione legale">
      {links.map(([label, href]) => (
        <Link key={href} href={href}>{label}</Link>
      ))}
    </nav>
  );
}
