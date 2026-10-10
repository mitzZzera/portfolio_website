import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactPrompt from "../../ContactPrompt";
import { featured, findProject, projectsIndexPath, staticPrefix } from "../projectData";

export const dynamic = "force-static";

export function generateStaticParams() {
  return featured.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);
  return project
    ? { title: project.title, description: project.description }
    : { title: "Project" };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) notFound();

  return <main className="landing case-study-page">
    <header className="topbar">
      <Link className="brand" href={staticPrefix || "/"}>DS<span>.</span></Link>
      <nav aria-label="Primary navigation"><Link href={`${staticPrefix}/#projects`}>Projects</Link><Link href={`${staticPrefix}/#services`}>Services</Link><Link href={`${staticPrefix}/#about`}>About</Link><Link href={`${staticPrefix}/#contact`}>Contact</Link><ContactPrompt className="nav-cta">Let’s talk <span>→</span></ContactPrompt></nav>
    </header>

    <div className="case-study-back"><a href={projectsIndexPath}>← All projects</a><span>Case study / {project.title}</span></div>

    <section className="case-study-hero">
      <div className="case-study-intro">
        <p className="section-label"><span /> {project.kicker}</p>
        <h1>{project.title}</h1>
        <p className="case-study-lead">{project.about}</p>
        <div className="case-study-actions"><a className="dark-button" href={project.liveUrl} target="_blank" rel="noreferrer">Open live project <span>↗</span></a><a className="text-button" href={projectsIndexPath}>Back to projects <span>↗</span></a></div>
      </div>
      <div className="case-study-visual">
        {project.imageUrl ? <Image src={`${staticPrefix}${project.imageUrl}`} alt={`Preview of ${project.title}`} fill sizes="(max-width: 800px) 100vw, 46vw" priority /> : <div className={`case-study-placeholder case-study-${project.slug}`}><span>{project.title.slice(0, 1)}</span><small>Selected work</small></div>}
      </div>
    </section>

    <section className="case-study-facts" aria-label="Project details"><div><span>Project type</span><strong>{project.tags.split(",")[0]}</strong></div><div><span>Focus</span><strong>{project.tags.split(",")[1]?.trim() ?? "Product design"}</strong></div><div><span>Try it</span><strong>Live demo ↗</strong></div></section>

    <section className="case-study-content">
      <article className="case-study-block"><p className="section-label"><span /> What it is about</p><h2>A focused tool with a clear job to do.</h2><p>{project.about}</p><div className="highlight-list">{project.highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}</div></article>
      <article className="case-study-block"><p className="section-label"><span /> How it works</p><h2>Designed around the real workflow.</h2><ol>{project.howItWorks.map((step) => <li key={step}>{step}</li>)}</ol></article>
      <article className="case-study-block case-study-use"><p className="section-label"><span /> How to use it</p><h2>Start here when you open the demo.</h2><ol>{project.howToUse.map((step) => <li key={step}>{step}</li>)}</ol><a className="acid-button" href={project.liveUrl} target="_blank" rel="noreferrer">Try the live project <span>↗</span></a></article>
    </section>

    <footer className="simple-project-footer"><a href={projectsIndexPath}>← All projects</a><ContactPrompt className="text-button">Let’s talk <b>↗</b></ContactPrompt></footer>
  </main>;
}
