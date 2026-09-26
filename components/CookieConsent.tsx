"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const CONSENT_COOKIE_NAME = "ef_cookie_consent";
const CONSENT_VERSION = "1";
const CONSENT_MAX_AGE = 15552000;
const MANAGE_EVENT = "ef:open-cookie-preferences";
const CHANGE_EVENT = "ef:cookie-consent-changed";

const activeOptionalCategories = {
  analytics: false,
  thirdParty: false,
  marketing: false,
} as const;

const OPTIONAL_CATEGORIES_PRESENT = Object.values(activeOptionalCategories).some(Boolean);

type ConsentState = {
  version: string;
  necessary: true;
  analytics: boolean;
  thirdParty: boolean;
  marketing: boolean;
  timestamp: string;
};

function createState(values?: Partial<Pick<ConsentState, "analytics" | "thirdParty" | "marketing">>): ConsentState {
  return {
    version: CONSENT_VERSION,
    necessary: true,
    analytics: activeOptionalCategories.analytics && Boolean(values?.analytics),
    thirdParty: activeOptionalCategories.thirdParty && Boolean(values?.thirdParty),
    marketing: activeOptionalCategories.marketing && Boolean(values?.marketing),
    timestamp: new Date().toISOString(),
  };
}

function getConsentCookieValue() {
  if (typeof document === "undefined") return "";

  const row = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${CONSENT_COOKIE_NAME}=`));

  return row ? row.slice(CONSENT_COOKIE_NAME.length + 1) : "";
}

function parseConsent(raw: string): ConsentState | null {
  if (!raw) return null;

  try {
    const parsed = JSON.parse(decodeURIComponent(raw)) as Partial<ConsentState>;

    if (
      parsed.version !== CONSENT_VERSION ||
      parsed.necessary !== true ||
      typeof parsed.analytics !== "boolean" ||
      typeof parsed.thirdParty !== "boolean" ||
      typeof parsed.marketing !== "boolean" ||
      typeof parsed.timestamp !== "string"
    ) {
      return null;
    }

    return {
      version: CONSENT_VERSION,
      necessary: true,
      analytics: activeOptionalCategories.analytics && parsed.analytics,
      thirdParty: activeOptionalCategories.thirdParty && parsed.thirdParty,
      marketing: activeOptionalCategories.marketing && parsed.marketing,
      timestamp: parsed.timestamp,
    };
  } catch {
    return null;
  }
}

function subscribeConsent(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  return () => window.removeEventListener(CHANGE_EVENT, callback);
}

function persistConsent(state: ConsentState) {
  const encoded = encodeURIComponent(JSON.stringify(state));
  const secure = window.location.protocol === "https:" ? "; Secure" : "";

  document.cookie = `${CONSENT_COOKIE_NAME}=${encoded}; Max-Age=${CONSENT_MAX_AGE}; Path=/; SameSite=Lax${secure}`;
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export default function CookieConsent() {
  const cookieValue = useSyncExternalStore(subscribeConsent, getConsentCookieValue, () => "");
  const storedConsent = parseConsent(cookieValue);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [draft, setDraft] = useState<ConsentState>(() => createState());
  const dialogRef = useRef<HTMLDialogElement>(null);

  const bannerOpen = OPTIONAL_CATEGORIES_PRESENT && !storedConsent && !preferencesOpen;

  useEffect(() => {
    const openPreferences = () => {
      const current = parseConsent(getConsentCookieValue()) ?? createState();
      setDraft(current);
      setPreferencesOpen(true);
    };

    window.addEventListener(MANAGE_EVENT, openPreferences);
    return () => window.removeEventListener(MANAGE_EVENT, openPreferences);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (preferencesOpen && dialog && !dialog.open) {
      dialog.showModal();
    }
  }, [preferencesOpen]);

  const save = (next: ConsentState) => {
    persistConsent(next);
    setDraft(next);
    setPreferencesOpen(false);
    dialogRef.current?.close();
  };

  const rejectAll = () => save(createState());

  const acceptAll = () =>
    save(
      createState({
        analytics: activeOptionalCategories.analytics,
        thirdParty: activeOptionalCategories.thirdParty,
        marketing: activeOptionalCategories.marketing,
      }),
    );

  const savePreferences = () =>
    save(
      createState({
        analytics: draft.analytics,
        thirdParty: draft.thirdParty,
        marketing: draft.marketing,
      }),
    );

  const openPreferencesFromBanner = () => {
    setDraft(storedConsent ?? createState());
    setPreferencesOpen(true);
  };

  return (
    <>
      {bannerOpen && (
        <section className="cookie-banner" aria-label="Cookie e Privacy">
          <div className="cookie-banner-inner">
            <button
              type="button"
              className="cookie-banner-close"
              aria-label="Chiudi e continua con soli cookie tecnici necessari"
              onClick={rejectAll}
            >
              ×
            </button>

            <div className="cookie-banner-copy">
              <h2>Cookie e Privacy</h2>
              <p>
                Utilizziamo cookie tecnici necessari al funzionamento del sito. Gli eventuali cookie analitici o altri strumenti di tracciamento non necessari vengono attivati solo con il tuo consenso. Puoi accettare, rifiutare o gestire le tue preferenze in qualsiasi momento.
              </p>
              <p className="cookie-banner-note">Chiudendo con × continui con i soli cookie tecnici necessari.</p>
              <div className="cookie-banner-links">
                <Link href="/legal/cookie-policy">Cookie Policy</Link>
                <Link href="/legal/privacy">Privacy &amp; GDPR</Link>
              </div>
            </div>

            <div className="cookie-banner-actions">
              <button type="button" className="cookie-action secondary" onClick={rejectAll}>RIFIUTA</button>
              <button type="button" className="cookie-action secondary" onClick={openPreferencesFromBanner}>GESTISCI PREFERENZE</button>
              <button type="button" className="cookie-action primary" onClick={acceptAll}>ACCETTA TUTTI</button>
            </div>
          </div>
        </section>
      )}

      <dialog
        ref={dialogRef}
        className="cookie-preferences-dialog"
        aria-labelledby="cookie-preferences-title"
        onClose={() => setPreferencesOpen(false)}
        onCancel={() => setPreferencesOpen(false)}
      >
        <button
          type="button"
          className="cookie-preferences-close"
          aria-label="Chiudi gestione cookie senza modificare le preferenze"
          onClick={() => dialogRef.current?.close()}
        >
          ×
        </button>

        <div className="cookie-preferences-header">
          <p className="eyebrow">Cookie e Privacy</p>
          <h2 id="cookie-preferences-title">Gestisci preferenze</h2>
          <p>
            Puoi modificare le preferenze relative ai cookie in qualsiasi momento. Le categorie non necessarie restano disattivate finché non vengono autorizzate espressamente.
          </p>
        </div>

        <div className="cookie-category-list">
          <section className="cookie-category">
            <div>
              <h3>Necessari</h3>
              <p>Necessari per il funzionamento, la sicurezza del sito e la memorizzazione delle preferenze relative ai cookie.</p>
            </div>
            <span className="cookie-category-status" aria-label="Necessari attivi e non disattivabili">ON</span>
          </section>

          {activeOptionalCategories.analytics && (
            <section className="cookie-category">
              <div>
                <h3>Analitici</h3>
                <p>Utilizzati per misurare l&apos;utilizzo del sito e produrre statistiche.</p>
              </div>
              <label className="cookie-switch">
                <span className="sr-only">Cookie analitici</span>
                <input
                  type="checkbox"
                  checked={draft.analytics}
                  onChange={(event) => setDraft((current) => ({ ...current, analytics: event.target.checked }))}
                />
                <span aria-hidden="true" />
              </label>
            </section>
          )}

          {activeOptionalCategories.thirdParty && (
            <section className="cookie-category">
              <div>
                <h3>Contenuti e servizi di terze parti</h3>
                <p>Utilizzati per caricare contenuti o servizi esterni che richiedono il consenso.</p>
              </div>
              <label className="cookie-switch">
                <span className="sr-only">Contenuti e servizi di terze parti</span>
                <input
                  type="checkbox"
                  checked={draft.thirdParty}
                  onChange={(event) => setDraft((current) => ({ ...current, thirdParty: event.target.checked }))}
                />
                <span aria-hidden="true" />
              </label>
            </section>
          )}

          {activeOptionalCategories.marketing && (
            <section className="cookie-category">
              <div>
                <h3>Marketing / profilazione</h3>
                <p>Utilizzati per finalità pubblicitarie comportamentali o di profilazione.</p>
              </div>
              <label className="cookie-switch">
                <span className="sr-only">Marketing e profilazione</span>
                <input
                  type="checkbox"
                  checked={draft.marketing}
                  onChange={(event) => setDraft((current) => ({ ...current, marketing: event.target.checked }))}
                />
                <span aria-hidden="true" />
              </label>
            </section>
          )}
        </div>

        {!OPTIONAL_CATEGORIES_PRESENT && (
          <p className="cookie-technical-only">
            Attualmente il sito non utilizza cookie analitici, di profilazione, marketing o servizi incorporati di terze parti che richiedano consenso. Sono quindi attivi soltanto i cookie tecnici necessari.
          </p>
        )}

        <div className="cookie-preferences-links">
          <Link href="/legal/cookie-policy">Cookie Policy</Link>
          <Link href="/legal/privacy">Privacy &amp; GDPR</Link>
        </div>

        <div className="cookie-preferences-actions">
          <button type="button" className="cookie-action secondary" onClick={rejectAll}>RIFIUTA TUTTO</button>
          <button type="button" className="cookie-action secondary" onClick={savePreferences}>SALVA PREFERENZE</button>
          <button type="button" className="cookie-action primary" onClick={acceptAll}>ACCETTA TUTTO</button>
        </div>
      </dialog>
    </>
  );
}
