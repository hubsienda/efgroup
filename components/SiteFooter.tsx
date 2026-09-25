import Image from "next/image";
import Link from "next/link";

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
          <h2>Group</h2>
          <Link href="/team">Team</Link><Link href="/prodotti">Prodotti</Link><Link href="/contatti">Contatti</Link>
        </div>
        <div>
          <h2>Info</h2>
          <Link href="/legale">Legale</Link><Link href="/faq">FAQ</Link>
        </div>
        <div className="footer-social">
          <h2>Contatti</h2>
          <a href="https://www.facebook.com/Ferrini-Maestri-Dellortofrutta-in-Roma-1031985723520499/" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://www.instagram.com/erraferrinigroup/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://wa.me/393319480051" target="_blank" rel="noreferrer">WhatsApp Commerciale</a>
        </div>
      </div>
      <div className="shell companies">
        <div><strong>Erra Luigi & C. srl</strong><span>Stand 64 – Padiglione Ovest B</span><span>Tel: 06.60501900/01 · Fax: 06.60501902</span><span>P. IVA 00896601002</span></div>
        <div><strong>Ferrini Srl</strong><span>Stand 63 e 118 – Padiglione Ovest B</span><span>Tel: 06.60501910/11 · Fax: 06.60501912</span><span>P. IVA 01220661001</span></div>
      </div>
      <div className="shell copyright">© {year} Erra & Ferrini Group. Tutti i diritti riservati.</div>
    </footer>
  );
}
