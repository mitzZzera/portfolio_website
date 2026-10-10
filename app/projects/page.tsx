export const dynamic = "force-static";
import type { Metadata } from "next";
import Link from "next/link";
import ContactPrompt from "../ContactPrompt";
import ProjectGallery from "./ProjectGallery";
import { homePagePath } from "./projectData";

export const metadata: Metadata = { title: "Projects", description: "Selected app projects and practical software work by Dimitar Shopov." };
export default function ProjectsPage(){return <main className="landing projects-page"><header className="topbar"><Link className="brand" href={homePagePath}>DS<span>.</span></Link><nav aria-label="Primary navigation"><Link href={`${homePagePath}#projects`}>Projects</Link><Link href={`${homePagePath}#services`}>Services</Link><Link href={`${homePagePath}#about`}>About</Link><Link href={`${homePagePath}#contact`}>Contact</Link><ContactPrompt className="nav-cta">Let’s talk <span>→</span></ContactPrompt></nav></header><section className="projects-head"><p className="section-label"><span /> Selected work</p><div><h1>Things I’ve <em>made work.</em></h1><p>A collection of apps, experiments, and practical fixes. Each one started with a problem worth solving.</p></div></section><ProjectGallery /><footer className="simple-project-footer"><span>Have a problem that belongs here?</span><ContactPrompt className="text-button">Let’s talk <b>↗</b></ContactPrompt></footer></main>}


