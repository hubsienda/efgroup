import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
export const metadata: Metadata = { title: "FAQ" };
export default function Page(){ return <PageShell eyebrow="Informazioni" title="FAQ" />; }
