import type { Metadata } from "next";
import InternalPageHero from "@/components/InternalPageHero";
import LegalNav from "@/components/LegalNav";
import styles from "@/components/LegalPages.module.css";

export const metadata: Metadata = {
  title: "Note Legali",
  description: "Note legali di Erra & Ferrini Group: uso del sito, proprietà intellettuale, responsabilità, sicurezza e collegamenti esterni.",
};

export default function Page() {
  return (
    <>
      <InternalPageHero
        eyebrow="Legal"
        title="Note Legali"
        intro="Condizioni di utilizzo del sito, proprietà intellettuale, responsabilità e collegamenti verso siti esterni."
      />

      <section className={styles.legalSection}>
        <div className={styles.legalShell}>
          <p className={styles.updated}>Documento aggiornato al 25/09/2026</p>
          <LegalNav />

          <article className={styles.article}>
            <section>
              <h2>Note Legali</h2>
              <p>Il nostro sito internet e domini annessi, (di seguito anche “Sito”) rende informazioni circa la nostra attività.</p>
            </section>

            <section>
              <h2>Uso del sito</h2>
              <p>Tutti i contenuti del sito e i diritti ad essi correlati sono riservati, pertanto possono essere consultati esclusivamente per finalità d’informazione personale, essendo espressamente vietato ogni diverso utilizzo senza il nostro preventivo consenso scritto.</p>
            </section>

            <section>
              <h2>Proprietà intellettuale</h2>
              <p>Tutte le informazioni e i documenti contenuti nel presente sito sono tutelate da leggi dello Stato Italiano e da norme internazionali sulla proprietà intellettuale.</p>
            </section>

            <section>
              <h2>Tutela dei contenuti</h2>
              <p>Pertanto è severamente vietato farne utilizzo a scopo di lucro, così come è vietata e perseguita per legge la de-compilazione (reverse engineering).</p>
              <p>È consentita la consultazione per uso personale e la duplicazione, totale e/o parziale, esclusivamente per uso proprio e privato ma solo su espressa dichiarazione da parte nostra.</p>
              <p>L’organizzazione si riserva il diritto di modificare e/o sopprimere qualunque tipo di informazione e/o programma contenuto nel presente sito in qualunque momento e senza alcun preavviso.</p>
            </section>

            <section>
              <h2>Limitazioni di responsabilità</h2>
              <p>L’accesso e la corretta consultazione del sito presuppongono che il sistema utilizzato dal visitatore sia pienamente compatibile con la tecnologia da noi utilizzata e che dal collegamento non derivi alcun malfunzionamento alle strutture informatiche utilizzate. In nessun caso l’organizzazione potrà essere ritenuta responsabile per eventuali danni ai sistemi informatici derivanti dal collegamento al sito, o dai link di collegamento ad altri siti, anche in presenza di virus informatici o di altre cause imputabili o comunque connesse all’uso della rete internet.</p>
            </section>

            <section>
              <h2>Collegamenti a siti esterni</h2>
              <p>Il Sito contiene dei link di collegamento a siti di terzi. L’esistenza di detti link non implica che l’organizzazione sponsorizzi o sia affiliata con i soggetti titolari di tali siti di collegamento.</p>
              <p>L’organizzazione declina quindi ogni responsabilità in relazione alla connessione e ai contenuti dei siti collegati al nostro sito e avvisa gli utenti che, chi decide di visitare un sito collegato lo fa in totale autonomia, assumendosi quindi l’onere di adottare ogni cautela contro virus o altri elementi distruttivi.</p>
            </section>

            <section>
              <h2>Sicurezza</h2>
              <p>L’accesso e la corretta consultazione del sito presuppongono che il sistema utilizzato dal visitatore sia pienamente compatibile con la tecnologia da noi utilizzata e che dal collegamento non derivi alcun malfunzionamento alle strutture informatiche utilizzate. In nessun caso l’organizzazione potrà essere ritenuta responsabile per eventuali danni ai sistemi informatici derivanti dal collegamento al sito, o dai link di collegamento ad altri siti, anche in presenza di virus informatici o di altre cause imputabili o comunque connesse all’uso della rete internet.</p>
            </section>

            <section>
              <h2>Marchi</h2>
              <p>Tutti i marchi appartengono ai rispettivi proprietari.</p>
            </section>

            <section>
              <h2>Commenti e servizi di terze parti</h2>
              <p>Nel caso la funzione commento agli articoli e informazioni del sito sia attiva, i commenti che inviate saranno filtrati attraverso dispositivi anti-spam e successivamente moderati. La vostra email non sarà mai pubblicata.</p>
              <p>Nel caso il nostro sito e sue applicazioni prevedano l’accesso sicuro tramite piattaforme social abilitate, tra cui Google, Facebook e Twitter, potranno essere pubblicati il vostro nome e/o il nome del vostro account su tali piattaforme, i cui dati non sono ovviamente da noi gestiti.</p>
              <p>Come in tutti i casi, compreso l’invio dei vostri dati tramite modulo dei contatti, saranno applicate tutte le misure, tutele, procedure e protezioni espresse nei documenti in questa pagina e in base alle nostra politica di sicurezza dei dati.</p>
            </section>

            <section>
              <h2>Aggiornamenti e modifiche</h2>
              <p>L’organizzazione si riserva il diritto di modificare e/o sopprimere qualunque tipo di informazione e/o programma contenuto nel presente sito in qualunque momento e senza alcun preavviso.</p>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}
