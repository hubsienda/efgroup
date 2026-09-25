import type { Metadata } from "next";
import InternalPageHero from "@/components/InternalPageHero";
import ImageLightbox from "@/components/ImageLightbox";
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

const gallery = [
  ...people.map((person) => ({ src: person.image, alt: person.name })),
  { src: "/team/team.jpg", alt: "I ragazzi del team Erra & Ferrini Group" },
];

export default function Page() {
  return (
    <>
      <InternalPageHero
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
          {people.map((person, index) => (
            <article key={person.name} className={styles.portrait}>
              <ImageLightbox
                gallery={gallery}
                initialIndex={index}
                className="team-portrait-media"
              />
              <h3>{person.name}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.groupSection}`}>
        <div className="shell">
          <h2>I Ragazzi del Nostro Team</h2>
          <ImageLightbox
            gallery={gallery}
            initialIndex={3}
            className="team-group-media"
          />
        </div>
      </section>
    </>
  );
}
