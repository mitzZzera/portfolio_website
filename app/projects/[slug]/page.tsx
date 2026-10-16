import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import ContactPrompt from "../../ContactPrompt";
import { featured, findProject, homePagePath, projectsIndexPath, staticPrefix } from "../projectData";
import "../project-guide.css";

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
      <a className="brand" href={homePagePath}>DS<span>.</span></a>
      <nav aria-label="Primary navigation"><a href={`${homePagePath}#projects`}>Projects</a><a href={`${homePagePath}#services`}>Services</a><a href={`${homePagePath}#about`}>About</a><a href={`${homePagePath}#contact`}>Contact</a><ContactPrompt className="nav-cta">Let’s talk <span>→</span></ContactPrompt></nav>
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
        <Image src={`${staticPrefix}${project.imageUrl}`} alt={`Screenshot of ${project.title}`} fill sizes="(max-width: 900px) 100vw, 46vw" priority />
      </div>
    </section>

    <nav className="guide-nav" aria-label="On this page"><a href="#overview">The idea</a><a href="#walkthrough">How to use it</a><a href="#try-it">Try it yourself</a><a href="#technical">Technical details</a></nav>

    <section className="guide-overview" id="overview" aria-labelledby="overview-title">
      <div><p className="section-label"><span /> What it is about</p><h2 id="overview-title">The problem it helps solve.</h2><p>{project.purpose}</p><p><strong>Who it is for:</strong> {project.audience}</p></div>
      <aside className="guide-note"><p className="section-label"><span /> Before you explore</p><h3>What to expect in the demo</h3><p>{project.demoNote}</p></aside>
    </section>

    <section className="guide-walkthrough" id="walkthrough" aria-labelledby="walkthrough-title">
      <header className="guide-section-heading"><p className="section-label"><span /> How it works &amp; how to use it</p><h2 id="walkthrough-title">A closer look, screen by screen.</h2><p>Actual screenshots from the live project. Select a picture to open it at full size.</p></header>
      {project.walkthrough.map((part, index) => <article className="guide-step" key={part.title}>
        <div className="guide-step-copy"><span className="guide-step-number">{String(index + 1).padStart(2, "0")}</span><h3>{part.title}</h3><p>{part.description}</p><ol>{part.steps.map((step) => <li key={step}>{step}</li>)}</ol></div>
        <figure className="guide-screen"><a href={`${staticPrefix}${part.image}`} target="_blank" rel="noreferrer" aria-label={`Open full-size screenshot: ${part.caption}`}><img src={`${staticPrefix}${part.image}`} alt={part.caption} width={1265} height={712} loading="lazy" /><span>View full size ↗</span></a><figcaption>{part.caption}</figcaption></figure>
      </article>)}
    </section>

    <section className="guide-exercise" id="try-it" aria-labelledby="try-it-title"><div><p className="section-label"><span /> Try it yourself</p><h2 id="try-it-title">Take it for a short test drive.</h2><p>{project.exercise}</p></div><a className="dark-button" href={project.liveUrl} target="_blank" rel="noreferrer">Open live project <span>↗</span></a></section>

    <section className="guide-technical" id="technical" aria-labelledby="technical-title"><header><p className="section-label"><span /> Behind the build</p><h2 id="technical-title">Technical details</h2><p>The languages, tools, hosting, and data storage used in this project.</p></header><dl>{project.technical.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.detail}</dd></div>)}</dl></section>

    <footer className="simple-project-footer"><a href={projectsIndexPath}>← All projects</a><ContactPrompt className="text-button">Let’s talk <b>↗</b></ContactPrompt></footer>
  </main>;
}
