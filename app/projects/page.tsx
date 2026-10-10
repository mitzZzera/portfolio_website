export const dynamic = "force-static";
import type { Metadata } from "next";
import ContactPrompt from "../ContactPrompt";
import ProjectGallery from "./ProjectGallery";
import { homePagePath } from "./projectData";

export const metadata: Metadata = { title: "Projects", description: "Selected app projects and practical software work by Dimitar Shopov." };
export default function ProjectsPage(){return <main className="landing projects-page"><header className="topbar"><a className="brand" href={homePagePath}>DS<span>.</span></a><nav aria-label="Primary navigation"><a href={`${homePagePath}#projects`}>Projects</a><a href={`${homePagePath}#services`}>Services</a><a href={`${homePagePath}#about`}>About</a><a href={`${homePagePath}#contact`}>Contact</a><ContactPrompt className="nav-cta">Let’s talk <span>→</span></ContactPrompt></nav></header><section className="projects-head"><p className="section-label"><span /> Selected work</p><div><h1>Things I’ve <em>made work.</em></h1><p>A collection of apps, experiments, and practical fixes. Each one started with a problem worth solving.</p></div></section><ProjectGallery /><footer className="simple-project-footer"><span>Have a problem that belongs here?</span><ContactPrompt className="text-button">Let’s talk <b>↗</b></ContactPrompt></footer></main>}


