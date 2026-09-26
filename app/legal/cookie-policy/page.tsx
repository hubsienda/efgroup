import type { Metadata } from "next";
import Link from "next/link";
import LegalNav from "@/components/LegalNav";
import InternalPageHero from "@/components/InternalPageHero";
import styles from "@/components/LegalPages.module.css";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy di Erra & Ferrini Group: cookie tecnici, gestione del consenso e modalità di controllo delle preferenze.",
};

export default function Page() {
  return (
    <>
      <InternalPageHero
        eyebrow="Legale"
        title="Cookie Policy"
        intro="Informazioni sui cookie utilizzati dal sito e sulle modalità di gestione delle preferenze."
      />

      <section className={styles.legalSection}>
        <div className={styles.legalShell}>
          <p className={styles.updated}>Ultimo aggiornamento: 26/09/2026</p>
          <LegalNav />

          <nav className={styles.toc} aria-label="Indice Cookie Policy">
            <h2>In questa pagina</h2>
            <ul>
              <li><a href="#cosa-sono">Cosa sono i cookie</a></li>
              <li><a href="#cookie-utilizzati">Cookie utilizzati dal Sito</a></li>
              <li><a href="#analitici">Cookie analitici</a></li>
              <li><a href="#profilazione">Cookie di profilazione e marketing</a></li>
              <li><a href="#consenso">Gestione del consenso</a></li>
              <li><a href="#revoca">Modifica o revoca del consenso</a></li>
              <li><a href="#terze-parti">Cookie e servizi di terze parti</a></li>
              <li><a href="#social">Social network e collegamenti esterni</a></li>
              <li><a href="#google-fonts">Google Fonts</a></li>
              <li><a href="#elenco-cookie">Come e quali cookie utilizziamo</a></li>
              <li><a href="#installazione">Installazione e disinstallazione dei cookie</a></li>
              <li><a href="#controllo">Come controllare i cookie</a></li>
              <li><a href="#privacy">Privacy e trattamento dei dati personali</a></li>
              <li><a href="#aggiornamenti">Aggiornamenti della Cookie Policy</a></li>
              <li><a href="#specificazioni">Specificazioni</a></li>
            </ul>
          </nav>

          <article className={styles.article}>
            <section id="cosa-sono">
              <h2>Cosa sono i cookie</h2>
              <p>I cookie sono piccoli file di testo che i siti web possono memorizzare sul dispositivo dell&apos;utente durante la navigazione.</p>
              <p>I cookie possono essere utilizzati per diverse finalità, ad esempio per consentire il corretto funzionamento di un sito, memorizzare determinate preferenze dell&apos;utente oppure, quando previsto e consentito dall&apos;utente, raccogliere informazioni statistiche sull&apos;utilizzo del sito.</p>
              <p>Il presente sito web (“Sito”) utilizza esclusivamente i cookie e gli strumenti strettamente necessari al proprio funzionamento, salvo eventuali ulteriori categorie espressamente autorizzate dall&apos;utente attraverso il sistema di gestione del consenso.</p>
              <p>Il gestore del Sito coincide con il Titolare del trattamento indicato nella relativa <strong>Privacy &amp; GDPR Policy</strong>.</p>
            </section>

            <section id="cookie-utilizzati">
              <h2>Cookie utilizzati dal Sito</h2>

              <h3>Cookie tecnici strettamente necessari</h3>
              <p>Il Sito può utilizzare cookie tecnici strettamente necessari per garantire la normale navigazione, la sicurezza, il corretto funzionamento delle pagine e la gestione delle preferenze espresse dall&apos;utente.</p>
              <p>L&apos;utilizzo di tali cookie non richiede il consenso preventivo dell&apos;utente, in quanto necessario per fornire il servizio richiesto e consentire il corretto funzionamento del Sito.</p>
              <p>Tra i cookie tecnici rientra il cookie utilizzato per memorizzare la scelta dell&apos;utente in materia di cookie e strumenti di tracciamento.</p>

              <h3>Cookie per la gestione del consenso</h3>
              <p>Il Sito utilizza un cookie tecnico di prima parte per ricordare le preferenze espresse attraverso il sistema di gestione dei cookie.</p>
              <p>Il cookie di consenso:</p>
              <ul>
                <li>non viene utilizzato per finalità pubblicitarie o di profilazione;</li>
                <li>non consente di tracciare la navigazione dell&apos;utente per finalità commerciali;</li>
                <li>serve esclusivamente a memorizzare la scelta effettuata dall&apos;utente;</li>
                <li>può registrare se l&apos;utente ha accettato, rifiutato o configurato determinate categorie di cookie;</li>
                <li>viene conservato per un periodo massimo di circa sei mesi, salvo revoca della scelta o necessità di richiedere nuovamente il consenso a seguito di modifiche sostanziali.</li>
              </ul>
              <p>Il nome tecnico utilizzato dal sistema è:</p>
              <p><strong><code>ef_cookie_consent</code></strong></p>

              <h3>Cookie di funzionalità</h3>
              <p>Il Sito può utilizzare esclusivamente i cookie di funzionalità strettamente necessari per fornire servizi o funzionalità esplicitamente richiesti dall&apos;utente.</p>
              <p>Qualora in futuro venissero introdotte funzionalità non strettamente necessarie che richiedano il consenso, esse resteranno disattivate fino alla scelta positiva dell&apos;utente.</p>
            </section>

            <section id="analitici">
              <h2>Cookie analitici</h2>
              <p>Alla data dell&apos;ultimo aggiornamento della presente Cookie Policy, il Sito <strong>non utilizza Google Analytics né altri servizi di analisi basati su cookie o altri strumenti di tracciamento non necessari</strong>.</p>
              <p>Pertanto, nessun cookie analitico viene attualmente installato dal Sito.</p>
              <p>Qualora in futuro venisse introdotto un servizio di analisi che richieda il consenso dell&apos;utente, tale servizio verrà attivato esclusivamente dopo l&apos;espressione di un consenso valido attraverso il sistema di gestione delle preferenze e la presente Cookie Policy sarà aggiornata di conseguenza.</p>
            </section>

            <section id="profilazione">
              <h2>Cookie di profilazione e marketing</h2>
              <p>Il Sito non utilizza cookie di profilazione, cookie pubblicitari comportamentali o altri strumenti destinati alla profilazione dell&apos;utente per finalità commerciali o pubblicitarie.</p>
              <p>Qualora tali strumenti venissero introdotti in futuro, non potranno essere attivati prima dell&apos;acquisizione del relativo consenso, ove richiesto dalla normativa applicabile.</p>
            </section>

            <section id="consenso">
              <h2>Gestione del consenso</h2>
              <p>Quando necessario in relazione ai cookie o agli strumenti utilizzati dal Sito, viene mostrato un sistema attraverso il quale l&apos;utente può esprimere le proprie preferenze.</p>
              <p>L&apos;utente può:</p>
              <ul>
                <li><strong>ACCETTARE</strong> le categorie di cookie non necessari proposte;</li>
                <li><strong>RIFIUTARE</strong> i cookie e gli strumenti non necessari;</li>
                <li><strong>GESTIRE LE PREFERENZE</strong>, scegliendo singolarmente le categorie disponibili.</li>
              </ul>
              <p>In assenza di consenso vengono utilizzati esclusivamente i cookie tecnici strettamente necessari.</p>
              <p>La semplice prosecuzione della navigazione, lo scorrimento della pagina, il tempo trascorso sul Sito o il clic su elementi che non abbiano la specifica funzione di esprimere il consenso <strong>non costituiscono consenso all&apos;utilizzo di cookie non necessari</strong>.</p>
              <p>La chiusura del banner senza esprimere un consenso positivo mantiene le impostazioni predefinite e non comporta l&apos;attivazione di cookie o strumenti di tracciamento diversi da quelli tecnici strettamente necessari.</p>
            </section>

            <section id="revoca">
              <h2>Modifica o revoca del consenso</h2>
              <p>L&apos;utente può modificare o revocare in qualsiasi momento le preferenze precedentemente espresse.</p>
              <p>A tale scopo è disponibile nel footer del Sito il collegamento:</p>
              <p><strong>GESTISCI COOKIE</strong></p>
              <p>attraverso il quale è possibile riaprire il pannello di gestione delle preferenze e modificare la propria scelta.</p>
              <p>La revoca del consenso non pregiudica la liceità dei trattamenti eventualmente effettuati sulla base del consenso prima della sua revoca.</p>
            </section>

            <section id="terze-parti">
              <h2>Cookie e servizi di terze parti</h2>
              <p>Alla data dell&apos;ultimo aggiornamento della presente Policy, il Sito non incorpora servizi di terze parti che installino automaticamente cookie non necessari nel dispositivo dell&apos;utente.</p>
              <p>Eventuali servizi esterni che dovessero essere introdotti in futuro saranno valutati sulla base delle loro caratteristiche tecniche e, qualora richiedano il consenso dell&apos;utente, resteranno disattivati fino all&apos;acquisizione di tale consenso.</p>
            </section>

            <section id="social">
              <h2>Social network e collegamenti esterni</h2>
              <p>Il Sito contiene collegamenti verso servizi e piattaforme esterne, tra cui:</p>
              <ul>
                <li>Facebook;</li>
                <li>Instagram;</li>
                <li>WhatsApp;</li>
                <li>YouTube.</li>
              </ul>
              <p>Tali elementi sono semplici collegamenti verso siti esterni e non costituiscono, allo stato attuale, social plugin incorporati nelle pagine del Sito.</p>
              <p>La presenza del collegamento non comporta di per sé l&apos;installazione sul dispositivo dell&apos;utente di cookie provenienti da tali piattaforme.</p>
              <p>Quando l&apos;utente decide di utilizzare uno di questi collegamenti, viene indirizzato verso il sito o l&apos;applicazione del relativo soggetto terzo. A partire da quel momento il trattamento dei dati e l&apos;eventuale utilizzo di cookie sono disciplinati dalle condizioni e dalle informative privacy e cookie del soggetto terzo interessato.</p>
              <p>Si invita pertanto l&apos;utente a consultare le informative delle rispettive piattaforme prima di utilizzarne i servizi.</p>
            </section>

            <section id="google-fonts">
              <h2>Google Fonts</h2>
              <p>Il Sito utilizza caratteri tipografici appartenenti alla libreria Google Fonts attraverso il sistema di gestione dei font previsto dal framework utilizzato dal Sito.</p>
              <p>I file dei caratteri vengono ospitati e distribuiti direttamente insieme alle risorse del Sito e non vengono richiesti dal browser dell&apos;utente ai server di Google durante la normale navigazione.</p>
              <p>Pertanto, l&apos;utilizzo dei caratteri tipografici del Sito non comporta l&apos;installazione di cookie Google Fonts né, attraverso tale funzionalità, una connessione del browser dell&apos;utente verso Google.</p>
            </section>

            <section id="elenco-cookie">
              <h2>Come e quali cookie utilizziamo</h2>
              <p>Alla data dell&apos;ultimo aggiornamento, il Sito utilizza la seguente categoria di cookie.</p>

              <h3>Cookie di gestione delle preferenze</h3>
              <p><strong>Nome:</strong> <code>ef_cookie_consent</code></p>
              <p><strong>Tipologia:</strong> cookie tecnico di prima parte</p>
              <p><strong>Finalità:</strong> memorizzare le preferenze dell&apos;utente relative all&apos;utilizzo dei cookie e degli eventuali strumenti di tracciamento</p>
              <p><strong>Base dell&apos;utilizzo:</strong> necessario per ricordare le preferenze espresse dall&apos;utente</p>
              <p><strong>Durata:</strong> fino a circa 6 mesi</p>
              <p><strong>Profilazione:</strong> no</p>
              <p><strong>Trasmissione a terzi:</strong> no</p>
              <p>Eventuali ulteriori cookie tecnici generati per esigenze strettamente necessarie al funzionamento del Sito potranno essere utilizzati senza finalità di profilazione o marketing.</p>
              <p>L&apos;elenco sarà aggiornato qualora vengano introdotti nuovi cookie o strumenti che richiedano specifica informazione o consenso.</p>
            </section>

            <section id="installazione">
              <h2>Installazione e disinstallazione dei cookie</h2>
              <h3>Impostazioni del browser</h3>
              <p>Oltre agli strumenti messi a disposizione direttamente dal Sito, l&apos;utente può gestire, bloccare o cancellare i cookie attraverso le impostazioni del browser utilizzato.</p>
              <p>La maggior parte dei browser permette di:</p>
              <ul>
                <li>verificare quali cookie sono presenti;</li>
                <li>cancellare singoli cookie o tutti i cookie memorizzati;</li>
                <li>bloccare i cookie provenienti da determinati siti;</li>
                <li>bloccare cookie di terze parti;</li>
                <li>impedire completamente la memorizzazione dei cookie;</li>
                <li>cancellare automaticamente i cookie alla chiusura del browser.</li>
              </ul>
              <p>La disabilitazione dei cookie strettamente necessari può compromettere alcune funzionalità tecniche del Sito o impedire la corretta memorizzazione delle preferenze espresse dall&apos;utente.</p>
              <p>Le modalità di gestione dei cookie dipendono dal browser utilizzato e possono essere consultate nella relativa documentazione ufficiale.</p>
            </section>

            <section id="controllo">
              <h2>Come controllare i cookie</h2>
              <p>L&apos;utente può controllare le proprie preferenze relative ai cookie in qualsiasi momento tramite il comando <strong>GESTISCI COOKIE</strong> disponibile nel footer del Sito.</p>
              <p>È inoltre possibile cancellare i cookie già presenti sul dispositivo utilizzando le funzionalità del browser.</p>
              <p>La cancellazione del cookie contenente le preferenze relative al consenso può determinare la nuova visualizzazione del sistema di gestione delle preferenze al successivo accesso, poiché il Sito non sarà più in grado di conoscere la scelta precedentemente espressa.</p>
              <p>Per ulteriori informazioni generali sui cookie è possibile consultare: <a className={styles.externalLink} href="https://www.aboutcookies.org/" target="_blank" rel="noreferrer">https://www.aboutcookies.org/</a></p>
            </section>

            <section id="privacy">
              <h2>Privacy e trattamento dei dati personali</h2>
              <p>L&apos;eventuale trattamento di dati personali connesso all&apos;utilizzo del Sito avviene nel rispetto del Regolamento (UE) 2016/679 (“GDPR”), del Codice in materia di protezione dei dati personali e della normativa applicabile.</p>
              <p>Per maggiori informazioni sul Titolare del trattamento, sulle finalità del trattamento, sulle basi giuridiche e sui diritti degli interessati è possibile consultare la:</p>
              <p><strong>Privacy &amp; GDPR Policy</strong></p>
              <p>disponibile all&apos;indirizzo: <Link href="/legal/privacy">/legal/privacy</Link></p>
            </section>

            <section id="aggiornamenti">
              <h2>Aggiornamenti della Cookie Policy</h2>
              <p>La presente Cookie Policy può essere modificata o aggiornata, in particolare in caso di:</p>
              <ul>
                <li>introduzione di nuove funzionalità del Sito;</li>
                <li>utilizzo di nuovi cookie o strumenti di tracciamento;</li>
                <li>modifica dei servizi di terze parti;</li>
                <li>cambiamenti normativi o regolamentari;</li>
                <li>modifiche alle modalità di gestione del consenso.</li>
              </ul>
              <p>Qualora le modifiche incidano sulle categorie di cookie o sugli strumenti per i quali è richiesto il consenso, potrà essere richiesto all&apos;utente di esprimere nuovamente le proprie preferenze.</p>
              <p>La versione aggiornata della Cookie Policy sarà pubblicata su questa pagina con indicazione della data dell&apos;ultimo aggiornamento.</p>
            </section>

            <section id="specificazioni">
              <h2>Specificazioni</h2>
              <p>La presente Cookie Policy costituisce parte integrante delle politiche e delle procedure adottate da Erra &amp; Ferrini Group per assicurare la riservatezza e la protezione dei dati personali in conformità al Regolamento (UE) 2016/679, al Codice in materia di protezione dei dati personali e alla normativa applicabile in materia di cookie e altri strumenti di tracciamento.</p>
              <p>Per ulteriori informazioni è possibile utilizzare i recapiti indicati nella sezione relativa al <strong>Titolare del trattamento</strong> della Privacy &amp; GDPR Policy.</p>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}
