"use client";

export default function ManageCookiesButton() {
  return (
    <button
      type="button"
      className="footer-cookie-button"
      aria-haspopup="dialog"
      onClick={() => window.dispatchEvent(new Event("ef:open-cookie-preferences"))}
    >
      GESTISCI COOKIE
    </button>
  );
}
