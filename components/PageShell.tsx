import Image from "next/image";

export default function PageShell({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <section className="page-shell shell">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-placeholder">Contenuti in preparazione.</p>
      </div>
      <Image src="/logo/logo.png" alt="" width={280} height={280} className="page-mark" />
    </section>
  );
}
