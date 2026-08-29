import Image from "next/image";
import Link from "next/link";
import ContactPrompt from "./ContactPrompt";

export default function AboutPage() {
  return (
    <main>
      <header className="site-header"><Link className="brand" href="/" aria-label="Dimitar Shopov home">DS<span>.</span></Link><nav aria-label="Primary navigation"><Link className="active" href="/">About</Link><Link href="/projects">Projects</Link></nav><Link className="header-cta" href="/projects">View my work <span>↗</span></Link></header>
      <section className="hero">
        <div className="hero-copy"><p className="eyebrow"><span /> Programmer · Problem solver</p><h1>I turn app problems into <em>working solutions.</em></h1><p className="intro">I’m <strong>Dimitar Shopov</strong>, a programmer who enjoys helping people untangle app-related problems and build software that feels clear, useful, and dependable.</p><p className="joke">I’m a morning person, provided the morning starts after noon.</p><div className="hero-actions"><Link className="button primary" href="/projects">Explore projects <span>→</span></Link><ContactPrompt className="button text">Let’s solve something <span>↗</span></ContactPrompt></div></div>
        <div className="portrait-wrap"><div className="portrait-frame"><Image src="/dimitar-shopov.jpeg" alt="Dimitar Shopov outdoors in the mountains" fill priority sizes="(max-width: 800px) 88vw, 42vw" /></div><div className="available-card"><span className="status-dot" /> Available for a good challenge</div><span className="scribble">thoughtful code,<br />human results ↗</span></div>
      </section>
      <section className="why-hire" aria-labelledby="why-hire-title">
        <div className="why-heading"><p className="eyebrow"><span /> Why work with me</p><h2 id="why-hire-title">You need more than code.<br /><em>You need a problem solved.</em></h2></div>
        <div className="reasons-grid"><article><span>01</span><h3>I listen first</h3><p>I take time to understand what you actually need, so we solve the right problem instead of building unnecessary features.</p></article><article><span>02</span><h3>I keep things clear</h3><p>You’ll always know what is happening, why a decision was made, and what comes next—without confusing technical language.</p></article><article><span>03</span><h3>I care about the result</h3><p>I build practical, dependable solutions that are easy to use and genuinely useful to the people they are made for.</p></article></div>
        <div className="hire-note"><p>In short: I bring thoughtful problem-solving, honest communication, and the persistence to see a good idea through.</p><ContactPrompt className="button primary">Tell me what you need <span>→</span></ContactPrompt></div>
      </section>
      <footer><span>Based in Bulgaria · Working everywhere</span><span>Thoughtful code · Human results</span></footer>
    </main>
  );
}
