import Image from "next/image";
import Link from "next/link";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M14.4 8.4V6.8c0-.8.5-1 1-1h2V3h-2.8C11.9 3 10.5 4.6 10.5 6.7v1.7H8v3.2h2.5V21h3.9v-9.4h2.7l.5-3.2h-3.2Z" fill="currentColor" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.9">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.7" cy="6.4" r=".9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none">
      <path
        d="M20.2 11.9a8.2 8.2 0 0 1-12.1 7.2L4 20.3l1.3-4A8.2 8.2 0 1 1 20.2 11.9Z"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.8 8.2c.2-.45.45-.48.72-.48h.39c.15 0 .3.03.41.28l.78 1.83c.09.21.08.37-.05.54l-.58.73c-.13.16-.13.31-.03.49.53.93 1.32 1.72 2.28 2.27.18.1.32.1.48-.04l.76-.84c.16-.18.34-.21.55-.12l1.77.84c.21.1.3.24.27.46-.12.81-.55 1.48-1.2 1.86-.51.29-1.17.36-1.87.17-1.14-.32-2.57-1.2-3.71-2.34-1.15-1.15-1.99-2.56-2.31-3.7-.19-.66-.09-1.31.2-1.81Z"
        fill="currentColor"
      />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M21 8.1c-.2-1.2-1.1-2.1-2.3-2.3C17 5.5 14.2 5.4 12 5.4s-5 .1-6.7.4C4.1 6 3.2 6.9 3 8.1 2.7 9.4 2.7 10.7 2.7 12s0 2.6.3 3.9c.2 1.2 1.1 2.1 2.3 2.3 1.7.3 4.5.4 6.7.4s5-.1 6.7-.4c1.2-.2 2.1-1.1 2.3-2.3.3-1.3.3-2.6.3-3.9s0-2.6-.3-3.9ZM10 15.6V8.4l6 3.6-6 3.6Z" fill="currentColor" />
    </svg>
  );
}

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Image src="/logo/logo-footer.png" alt="Erra & Ferrini Group" width={220} height={82} />
          <p>Centro Agroalimentare Roma — Via Tenuta del Cavaliere, 1 — 00012 Guidonia Montecelio (RM)</p>
        </div>
        <div>
          <h2>SITO</h2>
          <Link href="/chi-siamo">Chi Siamo</Link>
          <Link href="/team">Team</Link>
          <Link href="/prodotti">Prodotti</Link>
          <Link href="/contatti">Contatti</Link>
        </div>
        <div>
          <h2>INFO</h2>
          <Link href="/legal">LEGALE</Link>
          <Link href="/faq">FAQ</Link>
          <a href="https://intranet.erraferrini.group" target="_blank" rel="noreferrer">INTRANET</a>
        </div>
        <div className="footer-social">
          <h2>CANALI</h2>
          <div className="footer-social-links">
            <a href="https://www.facebook.com/Ferrini-Maestri-Dellortofrutta-in-Roma-1031985723520499/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/erraferrinigroup/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://wa.me/393319480051" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <WhatsAppIcon />
            </a>
            <a href="https://www.youtube.com/@ErraFerriniGroup" target="_blank" rel="noreferrer" aria-label="YouTube">
              <YouTubeIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="shell companies">
        <div><strong>Erra Luigi & C. srl</strong><span>Stand 64 – Padiglione Ovest B</span><span>Tel: 06.60501900/01 · Fax: 06.60501902</span><span>P. IVA 00896601002</span></div>
        <div><strong>Ferrini Srl</strong><span>Stand 63 e 118 – Padiglione Ovest B</span><span>Tel: 06.60501910/11 · Fax: 06.60501912</span><span>P. IVA 01220661001</span></div>
      </div>
      <div className="shell copyright footer-bottom">
        <span>© {year} Erra & Ferrini Group. Tutti i diritti riservati.</span>
        <a href="#top" className="footer-top" aria-label="Torna all'inizio della pagina">
          <span aria-hidden="true">↑</span> TOP
        </a>
      </div>
    </footer>
  );
}
