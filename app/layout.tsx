import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import "./projects.css";
import "./projects2.css";

const sans=DM_Sans({variable:"--font-sans",subsets:["latin"]});
const serif=Instrument_Serif({variable:"--font-serif",subsets:["latin"],weight:"400"});
const staticPrefix = process.env.GITHUB_PAGES === "true" ? `/${process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "portfolio_website"}` : "";
export const metadata: Metadata = {
  title: { default: "Dimitar Shopov — Programmer & Problem Solver", template: "%s — Dimitar Shopov" },
  description: "Portfolio of Dimitar Shopov, a programmer who builds practical apps and solves real-world software problems.",
  openGraph: { title: "Dimitar Shopov — Programmer & Problem Solver", description: "Thoughtful code. Human results.", images: [`${staticPrefix}/og.png`] },
  twitter: { card: "summary_large_image", title: "Dimitar Shopov — Programmer & Problem Solver", description: "Thoughtful code. Human results.", images: [`${staticPrefix}/og.png`] },
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>}

