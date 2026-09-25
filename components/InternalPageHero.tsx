import Image from "next/image";
import styles from "./InternalPages.module.css";

type InternalPageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
};

export default function InternalPageHero({ eyebrow, title, intro }: InternalPageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={`shell ${styles.heroInner}`}>
        <div className={styles.heroCopy}>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
        <Image
          src="/logo/logo.png"
          alt=""
          width={260}
          height={260}
          className={styles.heroMark}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
