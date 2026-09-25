import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
export const metadata: Metadata = { title: "Legale" };
export default function Page(){ return <PageShell eyebrow="Informazioni" title="Legale" />; }
