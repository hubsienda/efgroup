import type { Metadata } from "next";
import Link from "next/link";
import InternalPageHero from "@/components/InternalPageHero";
import styles from "@/components/InternalPages.module.css";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Risposte alle domande frequenti sui servizi, prodotti, consegne e ordini di Erra & Ferrini Group.",
};

export default function Page() {
  return (
    <>
      <InternalPageHero
        eyebrow="Informazioni"
        title="FAQ"
        intro="Risposte a domande frequenti"
      />

      <section className={styles.section}>
        <div className={`shell ${styles.sectionNarrow}`}>
          <div className={styles.faqList}>
            <details className={styles.faqItem}>
              <summary>Quali sono i vostri principali servizi?</summary>
              <div className={styles.faqAnswer}>
                <p>Acquistiamo prodotti ortofrutticoli esclusivamente di alta qualità sul mercato nazionale ed estero, offrendo un servizio completo e professionale.</p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary>Da quali paesi importate i vostri prodotti?</summary>
              <div className={styles.faqAnswer}>
                <p>Importiamo prodotti da diverse realtà produttive in Francia e Spagna ed inoltre Belgio, Olanda, Romania e altri. I nostri standard di qualità sono molto elevati e pertanto fanno parte del nostro network di business partner solo produttori che garantiscono tali requisiti.</p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary>Offrite servizi di consegna?</summary>
              <div className={styles.faqAnswer}>
                <p>Sì, offriamo un servizio completo di consegna delle merci attraverso i nostri partner logistici, inclusa la pallettizzazione mista, per garantire una consegna efficiente e sicura dei prodotti.</p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary>Quali ortofrutticoli offrite?</summary>
              <div className={styles.faqAnswer}>
                <p>Forniamo una vasta gamma di prodotti ortofrutticoli, inclusa frutta esotica, primizie e altri prodotti di alta qualità per la GDO, negozi specializzati, ristorazione, gourmet e altri clienti.</p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary>Come posso effettuare un ordine?</summary>
              <div className={styles.faqAnswer}>
                <p>Se sei già cliente puoi inviarci l’ordine per email o contattare il nostro responsabile commerciale. Vai nella pagina <Link href="/contatti" className={styles.inlineLink}>Contatti</Link> per i nostri recapiti.</p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary>Posso personalizzare un carico?</summary>
              <div className={styles.faqAnswer}>
                <p>Scegli i prodotti che desideri, personalizza il carico e indicaci la modalità di spedizione più adatta alle tue esigenze.</p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary>Esigenze particolari?</summary>
              <div className={styles.faqAnswer}>
                <p>Rivolgiti al nostro personale commerciale attraverso la nostra <Link href="/contatti" className={styles.inlineLink}>pagina contatti</Link>, studieremo insieme la migliore soluzione per te.</p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
