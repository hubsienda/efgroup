import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
export const metadata: Metadata = { title: "Team" };
export default function Page(){ return <PageShell eyebrow="Il Group" title="Team" />; }
