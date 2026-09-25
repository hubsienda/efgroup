import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
export const metadata: Metadata = { title: "Prodotti" };
export default function Page(){ return <PageShell eyebrow="Selezione" title="Prodotti" />; }
