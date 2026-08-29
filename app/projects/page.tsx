import type { Metadata } from "next";
import Link from "next/link";
import ContactPrompt from "../ContactPrompt";
import ProjectGallery from "./ProjectGallery";

export const metadata: Metadata = { title: "Projects", description: "Selected app projects and practical software work by Dimitar Shopov." };
export default function ProjectsPage(){return <main className="projects-page"><header className="site-header"><Link className="brand" href="/">DS<span>.</span></Link><nav aria-label="Primary navigation"><Link href="/">About</Link><Link className="active" href="/projects">Projects</Link></nav><ContactPrompt className="header-cta">Start a conversation <span>↗</span></ContactPrompt></header><section className="projects-head"><p className="eyebrow"><span /> Selected work</p><div><h1>Things I’ve <em>made work.</em></h1><p>A collection of apps, experiments, and practical fixes. Each one started with a problem worth solving.</p></div></section><ProjectGallery /><footer><span>Have a problem that belongs here?</span><ContactPrompt className="footer-contact">Let’s talk <b>↗</b></ContactPrompt></footer></main>}
