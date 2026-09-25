import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
export const metadata: Metadata = { title: "News" };
export default function Page(){ return <PageShell eyebrow="Dal nostro mondo" title="News" />; }
