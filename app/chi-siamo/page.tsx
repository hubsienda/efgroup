import type { Metadata } from "next";
import InternalPageHero from "@/components/InternalPageHero";
import styles from "@/components/InternalPages.module.css";

export const metadata: Metadata = {
  title: "Chi siamo",
  description: "Erra & Ferrini Group: selezione di prodotti ortofrutticoli di estrema qualità per GDO, HO.RE.CA. e dettaglio.",
};

export default function Page() {
  return (
    <>
      <InternalPageHero
        eyebrow="Erra & Ferrini Group"
        title="Firmiamo la Qualità"
        intro="Una selezione rigorosa in Italia e all’estero per offrire una gamma completa ed esclusiva ai principali canali della distribuzione."
      />

      <section className={styles.section}>
        <div className={`shell ${styles.proseGrid}`}>
          <div className={styles.sectionHeading}>
            <p className="eyebrow">Chi siamo</p>
            <h2>La qualità nasce dalla selezione.</h2>
          </div>
          <div className={styles.bodyCopy}>
            <p>
              Unici nel panorama romano ci siamo specializzati nella ricerca di prodotti di estrema qualità,
              selezionando in Italia ed all’estero produttori in grado di soddisfare appieno le nostre richieste in tal senso.
            </p>
            <p>
              Grazie a questa “certosina” selezione possiamo offrire ai nostri clienti una gamma di prodotti completa ed esclusiva
              con un&apos;offerta variegata indirizzata a tutti i canali della distribuzione: GDO, HORECA, dettaglianti.
            </p>
          </div>
        </div>

        <div className={`shell ${styles.channels}`} aria-label="Canali della distribuzione">
          <div className={styles.channel}><span>GDO</span></div>
          <div className={styles.channel}><span>HO.RE.CA.</span></div>
          <div className={styles.channel}><span>DETTAGLIO</span></div>
        </div>
      </section>
    </>
  );
}
