import type { Metadata } from "next";
import Image from "next/image";
import InternalPageHero from "@/components/InternalPageHero";
import styles from "@/components/InternalPages.module.css";

export const metadata: Metadata = {
  title: "Contatti",
  description: "Contatti, recapiti e sede di Erra & Ferrini Group presso il Centro Agroalimentare Roma.",
};

const mapsHref = "https://www.google.com/maps/search/?api=1&query=Erra%20%26%20Ferrini%20Group&query_place_id=ChIJS7JQv3F7LxMRHc8FJgB6KrM";

export default function Page() {
  return (
    <>
      <InternalPageHero
        eyebrow="Contatti"
        title="Erra & Ferrini Group"
        intro="Centro Agroalimentare Roma — Via Tenuta del Cavaliere, 1 — 00012 Guidonia Montecelio (RM)"
      />

      <section className={styles.section}>
        <div className={`shell ${styles.contactIdentity}`}>
          <div>
            <Image
              src="/logo/logo-text.png"
              alt="Erra & Ferrini Group"
              width={420}
              height={124}
              className={styles.contactLogo}
            />
          </div>

          <div className={styles.contactLead}>
            <p className="eyebrow">Dove siamo</p>
            <h2>Centro Agroalimentare Roma</h2>
            <address>
              Via Tenuta del Cavaliere, 1<br />
              00012 Guidonia Montecelio (RM)
            </address>

            <div className={styles.contactActions}>
              <a
                href="https://www.facebook.com/Ferrini-Maestri-Dellortofrutta-in-Roma-1031985723520499/"
                target="_blank"
                rel="noreferrer"
                className={styles.action}
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/erraferrinigroup/"
                target="_blank"
                rel="noreferrer"
                className={styles.action}
              >
                Instagram
              </a>
              <a
                href="https://wa.me/393319480051"
                target="_blank"
                rel="noreferrer"
                className={`${styles.action} ${styles.whatsapp}`}
              >
                WhatsApp Commerciale
              </a>
            </div>
          </div>
        </div>

        <div className={`shell ${styles.companies}`}>
          <section className={styles.company} aria-labelledby="erra-company">
            <h2 id="erra-company">Erra Luigi &amp; C. srl</h2>
            <dl>
              <dt>Stand</dt>
              <dd>64 – Padiglione Ovest B</dd>
              <dt>Tel</dt>
              <dd><a href="tel:+390660501900">06.60501900</a> / <a href="tel:+390660501901">06.60501901</a></dd>
              <dt>Fax</dt>
              <dd>06.60501902</dd>
              <dt>Email</dt>
              <dd><a href="mailto:erraecsrl@infinito.it">erraecsrl@infinito.it</a></dd>
              <dt>P. IVA</dt>
              <dd>00896601002</dd>
            </dl>
          </section>

          <section className={styles.company} aria-labelledby="ferrini-company">
            <h2 id="ferrini-company">Ferrini Srl</h2>
            <dl>
              <dt>Stand</dt>
              <dd>63 e 118 – Padiglione Ovest B</dd>
              <dt>Tel</dt>
              <dd><a href="tel:+390660501910">06.60501910</a> / <a href="tel:+390660501911">06.60501911</a></dd>
              <dt>Fax</dt>
              <dd>06.60501912</dd>
              <dt>Email</dt>
              <dd><a href="mailto:ferrinisrl2@gmail.com">ferrinisrl2@gmail.com</a></dd>
              <dt>P. IVA</dt>
              <dd>01220661001</dd>
            </dl>
          </section>
        </div>

        <div className={`shell ${styles.mapAction}`}>
          <a
            href={mapsHref}
            target="_blank"
            rel="noreferrer"
            className={`${styles.action} ${styles.actionPrimary}`}
          >
            Trovaci su Google Maps
          </a>
        </div>
      </section>
    </>
  );
}
