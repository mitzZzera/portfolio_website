import type { Metadata } from "next";
import { headers } from "next/headers";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import "./projects.css";

const sans=DM_Sans({variable:"--font-sans",subsets:["latin"]});
const serif=Instrument_Serif({variable:"--font-serif",subsets:["latin"],weight:"400"});

export async function generateMetadata():Promise<Metadata>{
  const incoming=await headers();const host=incoming.get("host")||"localhost:3000";const protocol=host.includes("localhost")?"http":"https";const image=`${protocol}://${host}/og.png`;
  return {title:{default:"Dimitar Shopov — Programmer & Problem Solver",template:"%s — Dimitar Shopov"},description:"Portfolio of Dimitar Shopov, a programmer who builds practical apps and solves real-world software problems.",openGraph:{title:"Dimitar Shopov — Programmer & Problem Solver",description:"Thoughtful code. Human results.",images:[image]},twitter:{card:"summary_large_image",title:"Dimitar Shopov — Programmer & Problem Solver",description:"Thoughtful code. Human results.",images:[image]}};
}
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>;}
