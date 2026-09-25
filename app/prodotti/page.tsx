import type { Metadata } from "next";
import InternalPageHero from "@/components/InternalPageHero";
import styles from "@/components/InternalPages.module.css";

export const metadata: Metadata = {
  title: "Prodotti",
  description: "Prodotti ortofrutticoli selezionati per qualità, freschezza e cura, con gallery dedicata Erra & Ferrini Group.",
};

export default function Page() {
  return (
    <>
      <InternalPageHero
        eyebrow="Selezione"
        title="Prodotti"
        intro="Offrire il meglio è il nostro modo di prenderci cura di voi."
      />

      <section className={styles.section}>
        <div className={`shell ${styles.productLead}`}>
          <h2>Qualità, freschezza, cura.</h2>
          <p>
            Selezioniamo prodotti esclusivi e di altissima qualità, custodendoli in ambienti coibentati per offrirvi sempre
            la massima freschezza e una bellezza duratura.
          </p>

          <div className={styles.galleryBand}>
            <p>Dai un&apos;occhiata ad alcuni dei nostri prodotti più apprezzati.</p>
            <a
              href="https://photos.app.goo.gl/HpiPjVJgggHAqBEr9"
              target="_blank"
              rel="noreferrer"
              aria-label="Scopri i nostri prodotti — si apre in una nuova scheda"
              className={`${styles.action} ${styles.actionPrimary}`}
            >
              Scopri i nostri prodotti
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
