import type { Metadata } from "next";
import LegalNav from "@/components/LegalNav";
import InternalPageHero from "@/components/InternalPageHero";
import styles from "@/components/LegalPages.module.css";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy di Erra & Ferrini Group: cookie tecnici, analitici, di terze parti e modalità di gestione delle preferenze.",
};

export default function Page() {
  return (
    <>
      <InternalPageHero
        eyebrow="Legal"
        title="Cookie Policy"
        intro="Informazioni sui cookie utilizzati dal sito e sulle modalità di gestione delle preferenze."
      />

      <section className={styles.legalSection}>
        <div className={styles.legalShell}>
          <p className={styles.updated}>Documento aggiornato al 25/09/2026</p>
          <LegalNav />

          <nav className={styles.toc} aria-label="Indice Cookie Policy">
            <h2>In questa pagina</h2>
            <ul>
              <li><a href="#cosa-sono">Cosa sono i cookie</a></li>
              <li><a href="#cookie-sito">Cookie del gestore del sito</a></li>
              <li><a href="#terze-parti">Cookie di parti terze</a></li>
              <li><a href="#social">Social plugin</a></li>
              <li><a href="#browser">Opzioni del browser</a></li>
              <li><a href="#come-utilizziamo">Come e quali cookie utilizziamo</a></li>
              <li><a href="#controllo">Come controllare i cookie</a></li>
            </ul>
          </nav>

          <article className={styles.article}>
            <section id="cosa-sono">
              <h2>Cosa sono i cookie</h2>
              <p>Il nostro sito web (“Sito”) utilizza i cookie per rendere i propri servizi semplici ed efficienti per l’utenza che ne visiona le pagine. Gli utenti che accedono al Sito vedranno inserite delle quantità minime di informazioni nei dispositivi in uso, che siano computer o periferiche mobili, in piccoli file di testo denominati “cookie” salvati nelle directory utilizzate dal browser web dell’utente. Vi sono vari tipi di cookie, alcuni per rendere più efficace l’uso del sito, altri per abilitare determinate funzionalità. Il gestore del sito è lo stesso titolare del trattamento.</p>
            </section>

            <section id="cookie-sito">
              <h2>Cookie del gestore del Sito</h2>

              <h3>Cookie tecnici</h3>
              <p>Il Sito utilizza esclusivamente cookie “tecnici”, quali i cookie di navigazione o sessione, quelli di funzionalità e quelli analitici.</p>

              <h3>Cookie di navigazione o sessione</h3>
              <p>Specificatamente, possono essere utilizzati cookie di navigazione o sessione, diretti a garantire la normale navigazione e fruizione del sito web, e quindi finalizzati a rendere funzionale ed ottimizzata la navigazione all’interno del sito.</p>

              <h3>Cookie di funzionalità</h3>
              <p>Possono essere installati cookie di funzionalità, strettamente necessari per fornire servizi esplicitamente richiesti dall’utente.</p>

              <h3>Cookie analitici</h3>
              <p>Possono essere installati cookie analitici (c.d. analytics) utilizzati esclusivamente dal solo gestore del sito, per raccogliere informazioni in forma aggregata ed anonima, sul numero degli utenti e su come gli utenti visitano il sito. A seguito di accettazione da parte dell’utente si utilizzerà il servizio specifico “Google Analytics”: i dati acquisiti tramite Google Analytics potranno essere utilizzati anche da Google, secondo i termini di servizio predisposti dalla stessa (vedi sotto). Non sono presenti cookie di profilazione utilizzati dal gestore del Sito.</p>
            </section>

            <section id="terze-parti">
              <h2>Cookie di parti terze</h2>

              <h3>Cookie di analisi di servizi di terze parti</h3>
              <p>Questi cookie sono utilizzati al fine di raccogliere informazioni sull’uso del sito da parte degli utenti in forma anonima quali: pagine visitate, tempo di permanenza, origini del traffico di provenienza, provenienza geografica, età, genere e interessi ai fini di campagne di marketing. Questi cookie sono inviati da domini di terze parti esterni al sito. Il sito utilizza il servizio “Google Analytics”.</p>

              <h3>Google Analytics</h3>
              <p>Google Analytics è un servizio di analisi web fornito da Google, che, attraverso l’uso di cookies (performance cookie), raccoglie dati di navigazione anonimi allo scopo di tracciare ed esaminare l’uso del sito, compilare report sulle attività del sito e fornire altri servizi relativi alle attività del sito, incluso il numero dei visitatori, e le pagine visitate. Google può anche trasferire queste informazioni a terzi ove ciò sia imposto dalla legge o laddove tali terzi trattini le suddette informazioni per conto di Google. Google non assocerà l’indirizzo IP a nessun altro dato posseduto da Google.</p>
              <p>Utilizzando il presente sito web, l’utente acconsente al trattamento dei dati da parte di Google per le modalità e i fini sopraindicati. I dati trasmessi a Google sono depositati presso i server di Google negli Stati Uniti. Per ulteriori informazioni sull’uso dei dati e sul loro trattamento da parte di Google si raccomanda di prendere visione delle informazioni al seguente indirizzo internet: <a className={styles.externalLink} href="http://www.google.com/intl/it/policies/privacy/" target="_blank" rel="noreferrer">http://www.google.com/intl/it/policies/privacy/</a>.</p>
              <p>Per rifiutare o eliminare questo tipo di cookie visitare il seguente link fornito da Google: <a className={styles.externalLink} href="https://support.google.com/accounts/answer/61416" target="_blank" rel="noreferrer">https://support.google.com/accounts/answer/61416</a></p>
              <p>L’Utente può disabilitare in modo selettivo l’azione di Google Analytics installando sul proprio browser il componente di opt-out fornito da Google. Per disabilitare la raccolta di dati da parte di Google Analytics, visitare Google: <a className={styles.externalLink} href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer">https://tools.google.com/dlpage/gaoptout</a></p>
              <p>È precisato che Google aderisce alla conformità GDPR Reg. UE 2016/679.</p>

              <h3>Cookie per integrare prodotti e funzioni di software di terze parti</h3>
              <p>Questa tipologia di cookie integra funzionalità sviluppate da terzi all’interno delle pagine del sito come le icone e le preferenze espresse nei social network al fine di condivisione dei contenuti del sito o per l’uso di servizi software di terze parti (come i software per generare le mappe e ulteriori software che offrono servizi aggiuntivi). Questi cookie sono inviati da domini di terze parti e da siti partner che offrono le loro funzionalità tra le pagine del sito.</p>
            </section>

            <section id="social">
              <h2>Social plugin</h2>
              <p>In particolare, il sito presenta social plugin per Facebook e Twitter ma può essere previsto di usare anche quelli per Instagram, LinkedIn o altre piattaforme. Tali plugin non impostano un cookie, ma se esso è già presente sul computer del visitatore sono in grado di leggerlo ed utilizzarlo secondo le sue impostazioni. La raccolta e l’uso delle informazioni da parte di tali terzi sono regolati dalle rispettive informative privacy alle quali si prega di fare riferimento.</p>
              <ul>
                <li>Facebook informativa: <a className={styles.externalLink} href="https://www.facebook.com/policy/cookies/" target="_blank" rel="noreferrer">https://www.facebook.com/policy/cookies/</a></li>
                <li>Facebook (configurazione): accedere al proprio account. Sezione privacy.</li>
                <li>Twitter informative: <a className={styles.externalLink} href="https://support.twitter.com/articles/20170514" target="_blank" rel="noreferrer">https://support.twitter.com/articles/20170514</a></li>
                <li>Twitter (configurazione): <a className={styles.externalLink} href="https://twitter.com/settings/security" target="_blank" rel="noreferrer">https://twitter.com/settings/security</a></li>
                <li>Linkedin (cookie policy): <a className={styles.externalLink} href="https://www.linkedin.com/legal/cookie-policy?_l=it_IT" target="_blank" rel="noreferrer">https://www.linkedin.com/legal/cookie-policy?_l=it_IT</a></li>
                <li>Instagram (cookie policy): <a className={styles.externalLink} href="https://help.instagram.com/1896641480634370?ref=ig" target="_blank" rel="noreferrer">https://help.instagram.com/1896641480634370?ref=ig</a> o <a className={styles.externalLink} href="https://www.facebook.com/help/instagram/1896641480634370" target="_blank" rel="noreferrer">https://www.facebook.com/help/instagram/1896641480634370</a></li>
              </ul>
            </section>

            <section id="browser">
              <h2>Installazione / disinstallazione cookie</h2>
              <h3>Opzioni del browser</h3>
              <p>L’utente può opporsi alla registrazione dei cookies sul proprio dispositivo configurando il browser usato per la navigazione. Se procede nella navigazione del sito dopo l’avviso di uso di cookie, se utilizza il sito senza cambiare le impostazioni del browser, si presuppone che intende ricevere tutti i cookies usati dal sito e fruire di tutte le funzionalità. Si ricorda che l’utente può impedire l’utilizzo di alcuni o di tutti i cookie sopra descritti, configurando il browser usato per la navigazione, e precisamente:</p>
              <ul>
                <li>Per Internet Explorer™: clicca qui</li>
                <li>Per Safari™ Safari su iPhone, iPad, o iPod touch: clicca qui</li>
                <li>Per Chrome™: clicca qui</li>
                <li>Per Firefox™: clicca qui</li>
                <li>Per Opera™: clicca qui</li>
              </ul>
            </section>

            <section id="come-utilizziamo">
              <h2>Come e quali cookie utilizziamo</h2>
              <p>Nome, Tipologia, Scopo e descrizione dei cookie</p>

              <h3>Cookie Sito — Cookie di Navigazione</h3>
              <p>I cookie hanno la funzione esclusiva di riconoscimento degli utenti loggati permettendo la navigazione del sito anche nelle aree riservate. (Website cookies)</p>

              <h3>Cookie di Performance</h3>
              <p>I cookie hanno la funzione di salvare informazioni sui fogli di stile inline per velocizzare le visite successive dell’utente e offrire una navigazione più rapida e meno costosa.</p>

              <h3>Google Fonts — Cookie di terze parti</h3>
              <p>Il Sito utilizza in alcune parti del sito dei font dal servizio Google Fonts. Per informazioni sui cookie in questione visitare il link <a className={styles.externalLink} href="https://www.google.it/intl/it/policies/privacy/" target="_blank" rel="noreferrer">https://www.google.it/intl/it/policies/privacy/</a></p>
            </section>

            <section id="controllo">
              <h2>Come controllare i cookies?</h2>
              <p>Potete controllare e/o verificare i cookie come volete. Per saperne di più, visitate <a className={styles.externalLink} href="https://aboutcookies.org" target="_blank" rel="noreferrer">https://aboutcookies.org</a></p>
              <p>Potete cancellare i cookies già presenti nel computer e impostare quasi tutti i browser in modo da bloccarne l’installazione. Se scegliete questa opzione, dovrete però modificare manualmente alcune preferenze ogni volta che visitate il nostro sito ed è possibile che alcuni servizi o determinate funzioni non siano disponibili.</p>

              <h3>Specificazioni</h3>
              <p>La presente Policy è da intendersi come parte della nostra politica, procedure e sistemi volti ad assicurare la riservatezza e la protezione dei dati personali in conformità con il Reg. UE 2016/679 GDPR. Rivolgetevi ai recapiti alla voce Titolare del trattamento per ulteriori informazioni.</p>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}
