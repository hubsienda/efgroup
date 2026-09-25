import type { Metadata } from "next";
import InternalPageHero from "@/components/InternalPageHero";
import LegalNav from "@/components/LegalNav";
import styles from "@/components/LegalPages.module.css";

export const metadata: Metadata = {
  title: "Accessibilità",
  description: "Dichiarazione di accessibilità di Erra & Ferrini Group ai sensi dell’European Accessibility Act.",
};

export default function Page() {
  return (
    <>
      <InternalPageHero
        eyebrow="Legal"
        title="Accessibilità"
        intro="Dichiarazione di Accessibilità (European Accessibility Act – EAA)"
      />

      <section className={styles.legalSection}>
        <div className={styles.legalShell}>
          <p className={styles.updated}>Documento aggiornato al 25/09/2026</p>
          <LegalNav />

          <article className={styles.article}>
            <section>
              <h2>Dichiarazione di Accessibilità</h2>
              <p>Ci impegniamo a garantire che il nostro sito web e i nostri servizi digitali siano accessibili a tutti gli utenti, incluse le persone con disabilità. Il nostro obiettivo è offrire un’esperienza inclusiva che permetta a chiunque di accedere ai nostri contenuti, prodotti e servizi con facilità, in conformità con l’European Accessibility Act (Direttiva (UE) 2019/882).</p>
            </section>

            <section>
              <h2>Il nostro impegno</h2>
              <p>Ci sforziamo di rendere il nostro sito web e i nostri servizi digitali:</p>
              <ul>
                <li>Percepibili – contenuti presentati in modi che gli utenti possano riconoscere e comprendere.</li>
                <li>Utilizzabili – facili da navigare e utilizzare con diversi dispositivi e tecnologie assistive.</li>
                <li>Comprensibili – scritti e organizzati in modo chiaro.</li>
                <li>Robusti – compatibili con le tecnologie assistive presenti e future.</li>
              </ul>
              <p>L’accessibilità è parte integrante del nostro processo di progettazione e sviluppo.</p>
            </section>

            <section>
              <h2>Stato di conformità</h2>
              <p>Siamo parzialmente conformi ai requisiti di accessibilità previsti dall’European Accessibility Act.</p>
              <p>Un audit completo di accessibilità è stato condotto in data 20/11/2025 e continuiamo a lavorare alla risoluzione delle criticità per fare in modo di essere pienamente conformi.</p>
            </section>

            <section>
              <h2>Misure adottate per garantire l’accessibilità</h2>
              <p>Per soddisfare gli standard di accessibilità, abbiamo implementato le seguenti pratiche:</p>
              <ul>
                <li>Utilizzo di HTML semantico.</li>
                <li>Navigazione accessibile tramite tastiera.</li>
                <li>Etichettatura corretta di moduli ed elementi interattivi.</li>
                <li>Struttura logica delle pagine e gerarchia dei titoli.</li>
                <li>Contrasto dei colori adeguato.</li>
                <li>Testi alternativi per le immagini.</li>
                <li>Design responsivo per vari dispositivi e dimensioni dello schermo.</li>
                <li>Compatibilità con screen reader e strumenti assistivi.</li>
              </ul>
              <p>Ulteriori miglioramenti sono pianificati e verranno implementati come parte della nostra roadmap di sviluppo.</p>
            </section>

            <section>
              <h2>Contenuti non completamente accessibili</h2>
              <p>Alcune parti del nostro sito o dei nostri servizi digitali potrebbero non rispettare pienamente le linee guida di accessibilità. Tra questi:</p>
              <ul>
                <li>Documenti o PDF meno recenti che non sono ancora completamente accessibili.</li>
                <li>Integrazioni di terze parti su cui abbiamo un controllo limitato.</li>
                <li>Contenuti occasionali creati prima dell’introduzione delle nostre procedure di accessibilità.</li>
              </ul>
              <p>Stiamo lavorando attivamente per risolvere tali problematiche e accogliamo volentieri segnalazioni per aiutarci a stabilire le priorità.</p>
            </section>

            <section>
              <h2>Feedback e informazioni di contatto</h2>
              <p>Se riscontri barriere di accessibilità o necessiti di contenuti in formato alternativo, ti invitiamo a contattarci. Risponderemo entro 30 giorni.</p>
              <p>Contatti:</p>
              <ul>
                <li>Email: <a className={styles.inlineLink} href="mailto:amministrazione.ferrini@gmail.com">amministrazione.ferrini@gmail.com</a></li>
                <li>Indirizzo: Ferrini srl – Centro Agroalimentare Roma, Via Tenuta del Cavaliere 1 00012 Guidonia Montecelio</li>
              </ul>
              <p>Ti chiediamo di fornire il maggior numero possibile di dettagli, inclusa la pagina o la funzionalità interessata.</p>
            </section>

            <section>
              <h2>Procedura di ricorso</h2>
              <p>Se non sei soddisfatto della nostra risposta, puoi contattare l’autorità nazionale competente responsabile del monitoraggio dell’attuazione dell’European Accessibility Act:</p>
              <p>AGID Agenzia per l’Italia Digitale <a className={styles.externalLink} href="https://www.agid.gov.it" target="_blank" rel="noreferrer">www.agid.gov.it</a></p>
              <p>L’autorità valuterà il reclamo e, se necessario, potrà imporre misure correttive per garantire la conformità alla normativa.</p>
            </section>

            <section>
              <h2>Miglioramento continuo</h2>
              <p>Consideriamo l’accessibilità come un processo continuo. Ogni volta che introduciamo nuove pagine, funzionalità o servizi, l’accessibilità rimane un elemento centrale delle nostre decisioni di progettazione e sviluppo. Ci impegniamo a rivedere questa dichiarazione annualmente o ogni volta che vengono apportate modifiche significative.</p>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}
