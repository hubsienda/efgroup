import Image from "next/image";
import Link from "next/link";
import CitrusNavigation from "@/components/CitrusNavigation";
import ImageLightbox from "@/components/ImageLightbox";

const madridGallery = [
  {
    src: "/banners/madrid2026.jpg",
    alt: "Fruit Attraction 2026 Madrid — Erra & Ferrini Group, Stand C09 Padiglione 4",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <Image src="/logo/logo.png" alt="" fill priority className="hero-watermark" sizes="100vw" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Erra & Ferrini Group</p>
            <h1>Import &amp; Export<br /><em>Prodotti Ortofrutticoli</em><br />di Eccellenza</h1>
            <p>Selezione, commercio e distribuzione di ortofrutta di alta qualità per i principali canali professionali.</p>
          </div>
          <div className="hero-nav-wrap">
            <CitrusNavigation />
          </div>
        </div>
      </section>

      {/* TEMPORARY: Fruit Attraction Madrid 2026 — remove after 8 October 2026 */}
      <section className="madrid-event" aria-labelledby="madrid-event-title">
        <div className="shell madrid-event-inner">
          <div className="madrid-event-copy">
            <p className="eyebrow">FRUIT ATTRACTION 2026</p>
            <h2 id="madrid-event-title">Madrid, 6–8 ottobre</h2>
            <p className="madrid-event-location">Stand C09 · Padiglione 4</p>
            <p className="madrid-event-callout">Passaci a trovare!</p>
          </div>
          <div className="madrid-event-banner">
            <ImageLightbox
              gallery={madridGallery}
              initialIndex={0}
              className="madrid-banner-media"
              downloadable
              downloadFilename="Erra-Ferrini-Fruit-Attraction-Madrid-2026.jpg"
            />
          </div>
        </div>
      </section>

      <section className="quality section shell">
        <div className="section-number">01</div>
        <div>
          <p className="eyebrow">La nostra firma</p>
          <h2>Firmiamo la Qualità</h2>
        </div>
        <p className="lead">Erra &amp; Ferrini Group seleziona prodotti ortofrutticoli di qualità eccezionale da produttori in Italia e all’estero, servendo i principali canali della distribuzione professionale.</p>
      </section>

      <section className="channels section shell" aria-labelledby="channels-title">
        <div className="section-heading"><p className="eyebrow">Mercati</p><h2 id="channels-title">Quattro canali.<br />Una sola idea di qualità.</h2></div>
        <div className="channel-list">
          {[
            ["GDO", "Grande distribuzione organizzata"],
            ["HO.RE.CA.", "Hotellerie, ristorazione e catering"],
            ["DETTAGLIO", "Specialisti e commercio al dettaglio"],
            ["GOURMET", "Selezioni dedicate all’alta qualità"],
          ].map(([name, desc]) => <div className="channel-row" key={name}><strong>{name}</strong><p>{desc}</p></div>)}
        </div>
      </section>

      <section className="products-band">
        <div className="shell products-inner">
          <p className="eyebrow">Prodotti</p>
          <h2>Offrire il meglio è il nostro modo di prenderci cura di voi.</h2>
          <Link href="/prodotti" className="text-link">Scopri i prodotti <span>→</span></Link>
        </div>
      </section>

      <section className="team-feature section shell">
        <div className="team-image"><Image src="/team/team.jpg" alt="Il team di Erra & Ferrini Group" fill sizes="(max-width: 800px) 100vw, 60vw" /></div>
        <div className="team-copy"><h2>Persone, esperienza, mercato.</h2><p>Una realtà costruita ogni giorno da persone che conoscono il prodotto, i mercati e il valore delle relazioni commerciali.</p><Link href="/team" className="text-link">Conosci il team <span>→</span></Link></div>
      </section>

      <section className="news section shell">
        <div className="section-heading"><p className="eyebrow">News</p><h2>Dal nostro mondo</h2></div>
        <div className="news-grid">
          <article><div className="news-image"><Image src="/picnews/rai1.jpg" alt="RAI presso Erra & Ferrini Group" fill sizes="(max-width: 700px) 100vw, 45vw" /></div><p className="eyebrow">In evidenza</p><h3>RAI presso Erra &amp; Ferrini Group</h3></article>
          <article><div className="news-image"><Image src="/picnews/zespri1.jpg" alt="Manifestazione Kiwi Zespri" fill sizes="(max-width: 700px) 100vw, 45vw" /></div><p className="eyebrow">In evidenza</p><h3>Manifestazione Kiwi Zespri</h3></article>
        </div>
      </section>

      <section className="contact-band">
        <div className="shell contact-inner">
          <div><p className="eyebrow">CONTATTI COMMERCIALI</p><h2>Prodotti, disponibilità, ordini e consegne. Parliamone.</h2></div>
          <div className="contact-actions"><a href="https://wa.me/393319480051" target="_blank" rel="noreferrer" className="button primary">WhatsApp commerciale</a><Link href="/contatti" className="button secondary">Contatti</Link></div>
        </div>
      </section>
    </>
  );
}
