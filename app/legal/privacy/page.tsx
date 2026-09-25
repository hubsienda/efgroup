import type { Metadata } from "next";
import Link from "next/link";
import InternalPageHero from "@/components/InternalPageHero";
import LegalNav from "@/components/LegalNav";
import styles from "@/components/LegalPages.module.css";

export const metadata: Metadata = {
  title: "Privacy & GDPR",
  description: "Informativa di Erra & Ferrini Group sul trattamento e sulla protezione dei dati personali ai sensi del Regolamento UE 2016/679 GDPR.",
};

export default function Page() {
  return (
    <>
      <InternalPageHero
        eyebrow="Legal"
        title="Privacy & GDPR"
        intro="Informativa sul trattamento e sulla protezione dei dati personali ai sensi del Regolamento UE 2016/679 GDPR."
      />

      <section className={styles.legalSection}>
        <div className={styles.legalShell}>
          <p className={styles.updated}>Documento aggiornato al 25/09/2026</p>
          <LegalNav />

          <nav className={styles.toc} aria-label="Indice Privacy e GDPR">
            <h2>In questa pagina</h2>
            <ul>
              <li><a href="#informativa">Informativa GDPR</a></li>
              <li><a href="#titolare">Titolare del trattamento</a></li>
              <li><a href="#dati">Dati trattati</a></li>
              <li><a href="#finalita">Finalità del trattamento</a></li>
              <li><a href="#sicurezza">Sicurezza</a></li>
              <li><a href="#business-partner">Business Partner</a></li>
              <li><a href="#reclamo">Diritto di reclamo</a></li>
              <li><a href="#diritti">Diritti degli interessati</a></li>
              <li><a href="#consenso">Consenso informato</a></li>
              <li><a href="#aggiornamenti">Aggiornamenti e modifiche</a></li>
            </ul>
          </nav>

          <article className={styles.article}>
            <section id="informativa">
              <h2>Informativa ai sensi del Regolamento UE 2016/679 GDPR</h2>
              <p>Ai sensi dell’articolo 12 del GDPR – ivi inclusi gli artt. 13 e 14 – Ti informiamo che i tuoi dati sono trattati nel rispetto di quanto stabilito dalle norme vigenti, e in particolare quanto segue.</p>
            </section>

            <section id="titolare">
              <h2>Titolare del trattamento</h2>
              <p>Erra Luigi e c.Srl, Stand 64 – Padiglione Ovest B, Tel: 06.60501900/01 – Fax 06.60501902, erraecsrl@infinito.it – P.I. 00896601002 – Ferrini Srl Stand 63 e 118 – Padiglione Ovest B Tel: 06.60501910/11 – Fax: 06.60501912, ferrinisrl2@gmail.com – P.I. 01220661001 – Entrambe le aziende riunite sotto il nome di Erra & Ferrini Group, presso Centro Agroalimentare Roma, Via Tenuta del Cavaliere 1, 00012 Guidonia Montecelio (Roma), di seguito anche solo Organizzazione.</p>
            </section>

            <section id="dati">
              <h2>Dati forniti dall’interessato</h2>
              <p>Conserviamo i dati che ci hai fornito volontariamente via documenti cartacei, e-mail o tramite il sito, a titolo esemplificativo: nome, cognome, e-mail, telefono.</p>
              <p>I dati che ci arrivano tramite e-mail (quindi anche provenienti dai moduli presenti sul sito e in altre risorse digitali) possono contenere anche l’indirizzo IP del richiedente e/o del suo server di posta e lo user agent, dati che vengono quindi conservati insieme agli altri dati.</p>
              <p>Conserviamo anche cookie, per i quali si rimanda all’apposita sezione in questo sito.</p>
              <p>Se hai meno di 16 anni non puoi fornirci alcun dato personale, ed in ogni caso non assumiamo responsabilità per eventuali dichiarazioni mendaci da te fornite. Qualora ci accorgessimo dell’esistenza di dichiarazioni non veritiere procederemo con la cancellazione immediata di ogni dato personale acquisito.</p>

              <h3>Dati raccolti automaticamente</h3>
              <p>I sistemi informatici e le procedure software preposte al funzionamento di questo sito acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione è implicita nell’uso dei protocolli di comunicazione di Internet. Si tratta di informazioni che non sono raccolte per essere associate a interessati identificati, ma che per loro stessa natura potrebbero, attraverso elaborazioni ed associazioni con dati detenuti da terzi, permettere di identificare gli utenti.</p>
              <p>In questa categoria di dati rientrano gli indirizzi IP o i nomi a dominio dei computer utilizzati dagli utenti che si connettono al sito, gli indirizzi in notazione URI (Uniform Resource Identifier) delle risorse richieste, l’orario della richiesta, il metodo utilizzato nel sottoporre la richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della risposta data dal server (buon fine, errore, ecc.) ed altri parametri relativi al sistema operativo e all’ambiente informatico dell’utente.</p>
              <p>Questi dati vengono utilizzati al solo fine di ricavare informazioni statistiche anonime sull’uso del sito e per controllarne il corretto funzionamento e vengono cancellati immediatamente dopo l’elaborazione. I dati potrebbero essere utilizzati per l’accertamento di responsabilità in caso di ipotetici reati informatici ai danni del Sito o a terzi: salva questa eventualità, allo stato i dati sui contatti web non vengono conservati in maniera permanente, a meno di eventuali richieste dell’utente.</p>
              <p>Con riferimento all’utilizzo dei cookies, la invitiamo a consultare la sezione sottostante.</p>
            </section>

            <section id="finalita">
              <h2>Finalità del trattamento</h2>
              <p>Nello specifico i tuoi dati personali sono trattati per le seguenti finalità e basi giuridiche:</p>
              <ul>
                <li>senza il tuo preventivo consenso per le finalità di servizio e in particolare per: l’esecuzione del contratto o l’adempimento di impegni precontrattuali; gestire e mantenere i siti web; fornire, amministrare e gestire tutti i servizi da te richiesti, provvedendo ove necessario alla relativa fatturazione, all’invio di comunicazioni relative ai servizi stessi da noi erogati; effettuare analisi statistiche aggregate su base anonima;</li>
                <li>il perseguimento di un legittimo interesse del Titolare: gestire i reclami ed i contenziosi, recuperare i crediti, prevenire frodi e attività illecite; inviarti comunicazioni commerciali all’indirizzo email da te fornito, se sei già nostro cliente, relative a servizi e prodotti simili a quelli di cui hai già fruito. Ogni email inviata ti permetterà di comunicarci che rifiuti ulteriori invii;</li>
                <li>l’adempimento di obblighi di legge;</li>
                <li>solo dietro espresso consenso, ove previsto sul sito o via mail, per finalità di marketing.</li>
              </ul>

              <h3>Modalità e sicurezza del trattamento</h3>
              <p>Il trattamento dei dati (raccolta registrazione conservazione e utilizzo), viene eseguito in modalità analogica e digitale.</p>
              <p>I dati sono raccolti secondo le misure di sicurezza previste dal GDPR, selezionate dal titolare del trattamento tenendo conto dello stato dell’arte e dei costi di attuazione, nonché della natura, dell’oggetto, del contesto e delle finalità del trattamento, come anche del rischio di varia probabilità e gravità per i diritti e le libertà delle persone fisiche.</p>

              <h3>Natura del conferimento dei dati</h3>
              <p>Il conferimento dei dati è necessario esclusivamente per prestare il servizio richiesto. L’eventuale rifiuto al conferimento dei dati comporta l’impossibilità di effettuare il servizio richiesto.</p>
              <p>L’invio facoltativo, esplicito e volontario di posta elettronica agli indirizzi indicati su questo sito comporta la successiva acquisizione dell’indirizzo del mittente, necessario per rispondere alle richieste, nonché degli eventuali altri dati personali inseriti nella missiva. Le informazioni fornite non saranno comunicate a soggetti estranei alla sua elaborazione.</p>

              <h3>Durata del trattamento</h3>
              <p>I dati saranno trattati per il tempo necessario all’esecuzione del servizio richiesto.</p>
              <p>In caso di richieste di natura precontrattuale, i dati saranno conservati per interesse legittimo, per un periodo massimo di 3 anni, esclusivamente per completare il processo richiesto.</p>
              <p>Le fatture, i documenti contabili e i dati relativi alle transazioni sono conservati secondo i termini di legge (stimati a 10 anni) più 12 mesi ulteriori per il tempo di chiusura del rapporto.</p>
              <p>I dati raccolti per finalità di marketing, sono conservati per non oltre 12 mesi dalla fine del rapporto.</p>
              <p>Ti invitiamo a prendere visione della nostra Politica sulla protezione dei dati e Cookie Policy cliccando sulla voce seguente GDPR.</p>
              <p>Nel rispetto e in conformità del Regolamento UE 2016/679 GDPR e D. Lgs. 101/2018, rendiamo la presente informativa sul trattamento e protezione dei vostri dati personali.</p>
            </section>

            <section>
              <h2>Titolare del trattamento dei dati personali e del presente sito web</h2>
              <p>Erra Luigi e c.Srl, Stand 64 – Padiglione Ovest B, Tel: 06.60501900/01 – Fax 06.60501902, erraecsrl@infinito.it – P.I. 00896601002 – Ferrini Srl Stand 63 e 118 – Padiglione Ovest B Tel: 06.60501910/11 – Fax: 06.60501912, ferrinisrl2@gmail.com – P.I. 01220661001 – Entrambe le aziende riunite sotto il nome di Erra & Ferrini Group, presso Centro Agroalimentare Roma, Via Tenuta del Cavaliere 1, 00012 Guidonia Montecelio (Roma), di seguito anche solo Organizzazione.</p>

              <h3>Validità della presente Policy</h3>
              <p>Questa policy è valida per i nostri siti web, tutti i domini posseduti e gestiti dal Titolare del trattamento. Pertanto i domini di Erra & Ferrini Group, sono soggetti a questa policy: siti web aziendali, applicazioni web quali Intranet, Extranet, servizi e software erogati tramite Cloud e gestiti direttamente da Erra & Ferrini Group.</p>

              <h3>Responsabile protezione dati (DPO)</h3>
              <p>In base all’art. 37 Reg. UE 2016/679 GDPR, non siamo obbligati a designare un responsabile della protezione dei dati (DPO), pertanto qualsiasi richiesta relativa all’uso dei vostri dati personali deve essere indirizzata ai recapiti di cui sopra.</p>
            </section>

            <section>
              <h2>Quali dati personali raccogliamo?</h2>
              <p>Su questo sito raccogliamo i vostri dati quando interagite con i possibili moduli che pubblichiamo al fine di consentirvi la comunicazione con noi, l’iscrizione a servizi di notifica, moduli di sondaggio e altre funzioni corrispondenti. Ci riserviamo tuttavia il diritto di modificare e/o di annullare tali moduli dal nostro sito in base a questioni tecniche e di gestione dello stesso.</p>
              <p>Pertanto, i dati che da voi possiamo raccogliere tramite questo sito sono prevalentemente quelli anagrafici e indirizzi email.</p>
              <p>In tutti i casi, vi proporremo di dare il vostro consenso in modo chiaro e previa lettura delle nostre note legali.</p>

              <h3>Perché raccogliamo queste informazioni?</h3>
              <p>Utilizziamo le vostre informazioni per rendervi i servizi per i quali ci fornite i vostri dati personali, per offrirvi i nostri servizi in base e per tutti gli usi consentiti dalla Legge. Non cediamo le vostre informazioni a terzi per finalità commerciali. Potreste eventualmente ricevere da noi notizie su nuovi servizi, in tal caso potete sempre decidere di annullare l’iscrizione a questo tipo di avvisi. Non facciamo SPAM!</p>

              <h3>Cosa facciamo con le vostre informazioni?</h3>
              <p>Le vostre informazioni sono memorizzate nel nostro sistema informativo e sono elaborate per gli scopi e finalità sopra espresse. Parte dei vostri dati confluisce nel nostro sistema informativo composto da hardware e software presso i nostri locali ubicati presso la nostra sede, mentre il nostro sito è ospitato in un server in Italia. Pertanto, possiamo affermare che i vostri dati non sono mai trasferiti al di fuori dei confini nazionali.</p>

              <h3>Per quanto tempo manterremo le vostre informazioni?</h3>
              <p>Il tempo necessario a rendervi il servizio. Nel caso di iscrizione per la ricezione di notifiche potete decidere in qualunque momento di ritirare il vostro consenso.</p>
            </section>

            <section id="business-partner">
              <h2>Funzioni per operazioni di interscambio dati online a favore dei business partner</h2>
              <p>Con Business Partner definiamo tutti i soggetti (fornitori, clienti, e altri) con i quali l’Organizzazione ha rapporti di affari, dati dalla sua gestione, per motivi di miglioramento dei propri servizi, per ragioni istituzionali e per adempiere a precise norme e discipline imposte dalla legge.</p>
              <p>Il nostro sito prevede la registrazione e l’accesso tramite login e password solo nei confronti dei nostri business partner. Tale gestione prevede l’accesso ad aree riservate del nostro sito e/o di altre risorse aziendali disponibili sul web e/o su nostri server e resi operativi mediante Cloud o tecnologie equipollenti. Quando uno qualunque dei nostri business partner ha accesso a tali funzioni riservate, si configura come un utente.</p>
              <p>I dati scambiati, inseriti dall’utente e da questi elaborati, sono immessi con lo scopo di usufruire dei nostri servizi e per il lor miglioramento e a corredo degli stessi, nell’interesse stesso del business partner. Altri tipi di dati, ad esempio di carattere contabile, fiscale, e per ragioni previste dalla legge, sono resi necessari in base a norme vigenti e pertanto trattati in conformità e ossequio a tali obbligatorie disposizioni.</p>
              <p>In ogni caso, la nostra organizzazione si impegna a tutelare, proteggere, non divulgare se non per ragioni dovute al servizio stesso e per imposizione di norme di Legge, le informazioni degli utenti. Nessuna informazione sarà mai ceduta a terzi estranei ai processi per i quali i dati sono necessari.</p>
            </section>

            <section id="reclamo">
              <h2>Diritto di reclamo</h2>
              <p>Se volete reclamare sul nostro operato, poiché ritenete che un vostro diritto sia stato da noi leso, potete rivolgervi all’autorità di vigilanza, ai seguenti indirizzi:</p>
              <p>Garante della Privacy: Piazza di Monte Citorio n. 121 00186 ROMA, Fax: (+39) 06.69677.3785, Centralino telefonico: (+39) 06.696771, E-mail: <a className={styles.inlineLink} href="mailto:garante@gpdp.it">garante@gpdp.it</a> – Posta certificata: <a className={styles.inlineLink} href="mailto:protocollo@pec.gpdp.it">protocollo@pec.gpdp.it</a></p>

              <h3>Specifiche della Privacy Policy e Cookie Policy di questo sito — Accettazione</h3>
              <p>Informati della modalità di trattamento dei vostri dati personali, il vostro consenso è dunque richiesto in conformità del Reg. UE 2016/679 GDPR, nello specifico in base all’art. 7.</p>
            </section>

            <section>
              <h2>Modalità, Processi e Diritti dei soggetti interessati</h2>
              <h3>Dati privi di identificazione personale</h3>
              <p>L’utente che accede al sito non incorre nel pericolo che i suoi dati vengano registrati, ovvero informazioni quali il nome, l’indirizzo, il codice fiscale o l’account di posta elettronica. Tali dati sono registrati solo se intenzionalmente inseriti dall’utente in appositi moduli.</p>
              <p>Pertanto, rendiamo noto che gli unici dati raccolti sono quelli di tipo statistico che riguardano: l’indirizzo IP del navigatore, le pagine che ha visitato, le date ed i tempi, il tipo di dominio, il tipo di browser, la misura dello schermo ed il numero dei colori.</p>
              <p>I dati privi di identificazione personale da noi raccolti, vengono utilizzati per scopi interni al fine di migliorare il sito ed i servizi. I dati privi di identificazione personale possono essere condivisi con partner commerciali (terze parti) della nostra organizzazione su base cieca (ad es. informazioni demografiche relative alle statistiche del sito).</p>
              <p>Questi dati non verranno mai forniti in congiunzione con dati di natura personale o con informazioni che possano collegare direttamente le terze parti con un particolare utente. Se l’utente ci fornisce spontaneamente informazioni di identificazione personale e ci ha dato permesso di utilizzarle per vari scopi, queste informazioni potranno essere associate alle informazioni prive di identificazione personale per scopi interni. In ogni caso questi dati non saranno mai condivisi con terze parti (eccetto per scopi amministrativi) o resi disponibili al pubblico. I vostri dati potranno quindi essere condivisi all’interno della nostra rete di partner commerciali ma mai ceduti a terzi estranei.</p>

              <h3>Dati con identificazione personale</h3>
              <p>L’organizzazione non utilizza ne carpisce informazioni di identificazione personale senza previa autorizzazione dell’utente. I dati di identificazione personale includono il nome, l’indirizzo, il codice fiscale o l’account di posta elettronica.</p>
              <p>L’organizzazione, nell’attuazione delle pratiche con i propri clienti, fornitori e terzi in genere, si impegna ad assicurarsi che vi sia un avvertimento ed una opzione di scelta per tutti gli utenti prima di utilizzare dati di identificazione personale per qualsiasi scopo oltre i fini amministrativi per i quali questi dati sono necessari.</p>
              <p>L’organizzazione si impegna a non richiedere mai informazioni dell’utente circa l’orientamento sessuale, politico, religioso o dati sulla salute.</p>
              <p>Tutti i dati di identificazione personale forniti dall’utente verranno trattati in maniera confidenziale ed avranno lo stesso livello di rispetto e cura che riserviamo alle informazioni personali ed ai segreti commerciali. In ogni caso, ogni trattamento di dati personali avviene nel rispetto del Reg. UE 2016/679 GDPR.</p>
              <p>L’organizzazione non alienerà mai a nessun titolo, né affitterà, scambierà o baratterà nessuna informazione di identificazione personale con soggetti estranei per scopi economici o commerciali.</p>
              <p>L’organizzazione tuttavia può fornire questo tipo di informazioni ai suoi referenti commerciali per scopi riguardanti transazioni quali la vendita, il pagamento, il trasporto di beni o servizi oggetto di acquisti. Ognuno dei partner commerciali dovrà concordare con questo statuto e mantenere la stessa linea di condotta e dovrà pertanto essere conforme al Reg. UE 2016/679 GDPR. Nei casi in cui uno dei nostri partner commerciali non dovesse conformarsi al GDPR, potranno intraprendersi anche azioni quali la risoluzione dei rapporti economici con il partner in questione.</p>
            </section>

            <section id="sicurezza">
              <h2>Sicurezza</h2>
              <p>L’organizzazione opererà facendo ricorso alle migliori tecniche in suo possesso per mantenere la sicurezza del sito e dei dati collezionati. Non è tuttavia razionale ammettere che lo scambio di dati sulla rete Internet sia completamente sicuro, malgrado noi facciamo ogni ragionevole sforzo per dotarci di tecnologie quali i certificati di sicurezza SSL. Il nostro sito accetta la navigazione DNT (Do Not Track) pertanto potete attivarla dal vostro browser.</p>
              <p>Tutte le informazioni registrate nei nostri computer e sistemi informatici, sono trattate come proprietarie e confidenziali e non sono disponibili al pubblico.</p>
              <p>L’organizzazione ha uno statuto interno di sicurezza, definito dai processi che disciplinano la nostra conformità al Reg. UE 2016/679 GDPR, per il rispetto della confidenzialità dei dati e limita l’accesso a questi dati solo ai collaboratori che ne hanno realmente bisogno per svolgere il proprio lavoro.</p>

              <h3>Scelte dell’utente concernenti la collezione dei dati privi di identificazione personale – Uso dei Cookies – Opzione</h3>
              <p>Il nostro sito web (“Sito”) utilizza i cookie per rendere i propri servizi semplici ed efficienti per l’utenza che ne visiona le pagine. Gli utenti che accedono al sito, vedranno inserite delle quantità minime di informazioni nei dispositivi in uso, che siano computer o periferiche mobili, in piccoli file di testo denominati “cookie” salvati nelle directory utilizzate dal browser web dell’utente. Sono in uso vari tipi di cookie, alcuni per rendere più efficace l’uso del sito, altri per abilitare determinate funzionalità.</p>
              <p>Approfondimento sull’argomento sono resi di seguito nella specifica Cookie Policy.</p>

              <h3>Dati di identificazione personale – Opzione</h3>
              <p>L’utente può chiedere la revoca delle autorizzazioni concesse all’organizzazione per il trattamento dei propri dati personali, rivolgendosi presso i recapiti forniti alla voce Titolare del trattamento.</p>

              <h3>Privacy dei bambini e dei minori</h3>
              <p>L’organizzazione si impegna a tutelare la privacy dei bambini e dei minori in genere. Il nostro sito non è stato creato per essere direttamente utilizzato dai bambini. Se pensate che vostro figlio ci abbia fornito dati di identificazione personale e volete che siano rimossi dalle nostre basi di dati, contattateci ai recapiti alla voce Titolare del trattamento.</p>

              <h3>Link ad altri siti</h3>
              <p>Nel nostro sito possono essere presenti link ad altri siti non gestiti da noi. Non rispondiamo pertanto del modo in cui questi siti di terzi trattano i dati personali. Vi invitiamo pertanto a prendere visione della loro Privacy Policy.</p>
            </section>

            <section id="diritti">
              <h2>Specificazioni sulla conformità con il Reg. UE 679 del 2016 GDPR</h2>
              <p>In funzione del Regolamento UE 2016/679, il Titolare del Sito comunica quanto segue:</p>
              <ol>
                <li>Abbiamo attivato la protezione della navigazione del Sito mediante installazione del certificato di sicurezza (SSL), protocollo https RSA256SHA E2EE (End-to-End Encryption).</li>
                <li>Disponiamo di un registro delle attività di trattamento (art. 30 e cons. 171).</li>
                <li>Abbiamo attuato la valutazione d’impatto per poter procedere con la notifica delle violazioni dei dati personali (cd. “data breach”, art. 33 e 34).</li>
                <li>Unitamente a ciò, abbiamo attuato tutte le procedure e buone pratiche per la tutela dei diritti degli interessati e la protezione dei dati personali.</li>
              </ol>
              <p>È inoltre specificato che le misure che contribuiscono ai diritti degli interessati sono recepite e gestite dall’organizzazione. Esse sono:</p>
              <ul>
                <li>informazioni fornite all’interessato (articoli 12, 13 e 14);</li>
                <li>diritto di accesso e portabilità dei dati (articoli 15 e 20);</li>
                <li>diritto di rettifica e cancellazione (articoli 16, 17 e 19);</li>
                <li>diritto di opposizione e di limitazione di trattamento (articoli 18, 19 e 21);</li>
                <li>rapporti con i responsabili del trattamento (articolo 28);</li>
                <li>garanzie riguardanti trattamenti internazionali (capo V);</li>
                <li>consultazione preventiva (articolo 36).</li>
              </ul>
              <p>I dati raccolti dal nostro sito web sono alloggiati presso il server del provider del servizio hosting, il quale è conforme con il Reg. UE 2016/679 GDPR. Il provider dei servizi hosting web non fruisce dei vostri dati in alcuna maniera.</p>

              <h3>Richiesta del Soggetto Interessato e Tempi di risposta in conformità con il GDPR</h3>
              <table className={styles.responseTable}>
                <tbody>
                  <tr><th>Diritto ad essere informati</th><td>Quando i dati vengono raccolti (se forniti dall’interessato) o entro un mese (se non forniti dall’interessato)</td></tr>
                  <tr><th>Diritto di accesso</th><td>1 Mese (2 mesi nei casi più complessi e per via di molte richieste)</td></tr>
                  <tr><th>Diritto di rettifica</th><td>1 Mese (2 mesi nei casi più complessi e per via di molte richieste)</td></tr>
                  <tr><th>Diritto di cancellazione</th><td>Immediato</td></tr>
                  <tr><th>Diritto di limitare il trattamento</th><td>Immediato</td></tr>
                  <tr><th>Diritto alla portabilità</th><td>1 Mese (2 mesi nei casi più complessi e per via di molte richieste)</td></tr>
                  <tr><th>Diritto di opposizione</th><td>Appena ricevuta richiesta di opposizione</td></tr>
                  <tr><th>Diritti in relazione al processo decisionale automatizzato e alla profilazione</th><td>Non specificato dal GDPR. Presa in carico entro 72 ore, risoluzione nel più breve tempo.</td></tr>
                </tbody>
              </table>

              <h3>Specificazioni sulla richiesta di esercizio dei diritti degli interessati</h3>
              <p>È specificato che l’interessato ha il diritto di opporsi in qualsiasi momento, per motivi connessi alla sua situazione particolare, al trattamento dei dati personali che lo riguardano ai sensi dell’articolo 6, paragrafo 1, lettere e) o f), compresa la profilazione sulla base di tali disposizioni. Il titolare del trattamento si astiene dal trattare ulteriormente i dati personali salvo che egli dimostri l’esistenza di motivi legittimi cogenti per procedere al trattamento che prevalgono sugli interessi, sui diritti e sulle libertà dell’interessato oppure per l’accertamento, l’esercizio o la difesa di un diritto in sede giudiziaria.</p>
            </section>

            <section id="consenso">
              <h2>Consenso informato</h2>
              <p>Premessa la nostra piena adesione e conformità al Reg. UE 2016/679 GDPR per la protezione dei dati personali, e quanto disposto dalle leggi italiane, Il titolare del trattamento, comunica quanto segue:</p>

              <h3>Oggetto del trattamento</h3>
              <p>L’organizzazione, Titolare del trattamento, tratta i dati personali, identificativi, in particolare, nome, cognome, codice fiscale, partita iva, email, numero telefonico e altri dati necessari all’espletamento dei servizi richiesti o delle pratiche inerenti la propria attività incluso il sito web e sue applicazioni – in seguito, “dati personali” o anche “dati” – da voi comunicati in fase di: a) registrazione al sito web del Titolare e/o all’atto dell’iscrizione al servizio di newsletter offerto dal Titolare e altre applicazioni collegate incluse intranet aziendale o aree riservate; b) richiesta di nostri servizi, sottoscrizione di accordi e contratti, nomina, procura, o altro tipo di incarico per lo svolgimento delle prestazioni da noi fornite.</p>

              <h3>Finalità del trattamento</h3>
              <p>I vostri dati personali sono trattati:</p>
              <p>A) Al di là dei casi previsti dal Reg. UE 2016/679 GDPR in cui non siamo obbligati a richiedere il vostro consenso, tra le cui finalità rientrano:</p>
              <ul>
                <li>Il trattamento necessario ex art. 6 lett. b ed e, GDPR;</li>
                <li>Adempiere agli obblighi precontrattuali, contrattuali e fiscali derivanti da rapporti con voi in essere;</li>
                <li>Adempiere agli obblighi previsti dalla legge, da un regolamento, dalla normativa comunitaria o da un ordine dell’Autorità;</li>
                <li>Prevenire o scoprire attività fraudolente o abusi dannosi per il sito web e applicazioni collegate;</li>
                <li>Esercitare i diritti del Titolare, ad esempio il diritto di difesa in giudizio.</li>
              </ul>
              <p>B) Solo previo vostro specifico e distinto consenso (art. 7 GDPR), per le seguenti finalità legate alla nostra attività e comunicazioni di nostri servizi:</p>
              <ul>
                <li>inviarvi via email newsletter, comunicazioni e/o materiale anche di carattere commerciale (nuovi servizi/prodotti) e in generale sui servizi offerti dal Titolare e informazioni di particolare importanza ai fini della regolare esecuzione delle nostre prestazioni nei vostri confronti e per il vostro interesse soprattutto ai fini fiscali e tributari.</li>
              </ul>
              <p>Nel caso siate già nostri clienti, o nostri partner commerciali, e abbiate espresso il vostro benestare, potremmo già inviarvi le comunicazioni di cui sopra salvo vostro espresso dissenso.</p>

              <h3>Modalità del trattamento</h3>
              <p>Il trattamento dei vostri dati personali è realizzato per mezzo delle operazioni indicate all’art. 4 n. 2 del GDPR e precisamente: raccolta, registrazione, organizzazione, conservazione, consultazione, elaborazione, modifica, selezione, estrazione, raffronto, utilizzo, interconnessione, blocco, comunicazione, cancellazione e distruzione dei dati. I vostri dati personali sono sottoposti a trattamento sia cartaceo che elettronico e/o automatizzato. Tuttavia, non usiamo software che sostituiscono la nostra personale e umana decisione circa i nostri servizi e la valutazione delle vostre opinioni o preferenze demandandola a un processo decisionale automatizzato.</p>
              <p>Il Titolare tratterà i dati personali per il tempo necessario per adempiere alle finalità di cui sopra e comunque per non oltre 10 anni dalla cessazione del rapporto per le finalità di servizio e per non oltre 2 anni dalla raccolta dei dati per le finalità di comunicazioni commerciali.</p>
              <p>Nessuna pratica di SPAM è da noi accettata, al contrario, è assolutamente avversata e mai saranno inviate email senza il preventivo consenso.</p>
            </section>

            <section id="aggiornamenti">
              <h2>Aggiornamenti e modifiche</h2>
              <p>L’organizzazione si riserva di apportare aggiornamenti e variazioni alla presente policy in funzione di modifiche delle norme di Legge, implementazione di tecnologie e processi tesi a migliorare la fruizione di questo sito e dei nostri servizi.</p>
            </section>

            <Link href="/legal/cookie-policy" className={styles.relatedLink}>Consulta anche la Cookie Policy →</Link>
          </article>
        </div>
      </section>
    </>
  );
}
