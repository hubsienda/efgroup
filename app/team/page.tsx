import type { Metadata } from "next";
import Image from "next/image";
import InternalPageHero from "@/components/InternalPageHero";
import styles from "@/components/InternalPages.module.css";

export const metadata: Metadata = {
  title: "Team",
  description: "Il team Erra & Ferrini Group e la nostra esperienza nell’importazione ed esportazione di prodotti ortofrutticoli d’eccellenza.",
};

const people = [
  { name: "Riccardo Pompei", image: "/team/Riccardo-Pompei.jpg" },
  { name: "Patrizia Erra", image: "/team/Patrizia-Erra.jpg" },
  { name: "Vittorio Pompei", image: "/team/Vittorio-Pompei.jpg" },
];

export default function Page() {
  return (
    <>
      <InternalPageHero
        eyebrow="Il Group"
        title="Team"
        intro="Import & Export di Prodotti Ortofrutticoli d’Eccellenza"
      />

      <section className={styles.section}>
        <div className={`shell ${styles.teamIntro}`}>
          <div className={styles.sectionHeading}>
            <p className="eyebrow">Esperienza e relazioni</p>
            <h2>Una presenza storica nel mercato di Roma.</h2>
          </div>
          <div className={styles.teamIntroCopy}>
            <p>Le nostre sono aziende storiche del mercato di Roma, da sempre specializzate nell’importazione di prodotti esteri.</p>
            <p>
              Vantiamo contatti commerciali con le migliori realtà produttive di Francia e Spagna non trascurando comunque Belgio,
              Olanda, Romania etc.
            </p>
            <p>
              Siamo in grado di offrire all’estero i nostri prodotti migliori, con un servizio completo di pallettizzazione anche mista,
              e con un servizio logistico preciso e puntuale nel trasporto e nella consegna delle merci.
            </p>
          </div>
        </div>

        <div className={`shell ${styles.portraits}`}>
          {people.map((person) => (
            <article key={person.name} className={styles.portrait}>
              <div className={styles.portraitMedia}>
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 980px) 33vw, 30vw"
                />
              </div>
              <h3>{person.name}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.groupSection}`}>
        <div className="shell">
          <p className="eyebrow">Le persone</p>
          <h2>I Ragazzi del Nostro Team</h2>
          <div className={styles.groupImage}>
            <Image
              src="/team/team.jpg"
              alt="I ragazzi del team Erra & Ferrini Group"
              fill
              sizes="(max-width: 700px) 100vw, 1040px"
            />
          </div>
        </div>
      </section>
    </>
  );
}
