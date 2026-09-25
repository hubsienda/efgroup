"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const nav = [
  ["Home", "/"],
  ["Chi siamo", "/chi-siamo"],
  ["Prodotti", "/prodotti"],
  ["Team", "/team"],
  ["FAQ", "/faq"],
  ["Contatti", "/contatti"],
];

export default function MobileMenu() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const open = openPath === pathname;

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenPath(null);
        buttonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="mobile-menu">
      <button
        ref={buttonRef}
        type="button"
        className="mobile-menu-toggle"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpenPath((value) => value === pathname ? null : pathname)}
      >
        Menu
      </button>
      {open && (
        <nav id="mobile-navigation" aria-label="Navigazione mobile" className="mobile-menu-panel">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpenPath(null)}>
              {label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
