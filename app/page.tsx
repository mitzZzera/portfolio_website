import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Dimitar Shopov home">DS<span>.</span></Link>
        <nav aria-label="Primary navigation"><Link className="active" href="/">About</Link><Link href="/projects">Projects</Link></nav>
        <Link className="header-cta" href="/projects">View my work <span>↗</span></Link>
      </header>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Programmer · Problem solver</p>
          <h1>I turn app problems into <em>working solutions.</em></h1>
          <p className="intro">I’m <strong>Dimitar Shopov</strong>, a programmer who enjoys helping people untangle app-related problems and build software that feels clear, useful, and dependable.</p>
          <p className="joke">I speak fluent code—and only occasionally argue with the compiler.</p>
          <div className="hero-actions"><Link className="button primary" href="/projects">Explore projects <span>→</span></Link><a className="button text" href="mailto:hello@dimitar.dev">Let’s solve something <span>↗</span></a></div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-frame"><Image src="/dimitar-shopov.jpeg" alt="Dimitar Shopov outdoors in the mountains" fill priority sizes="(max-width: 800px) 88vw, 42vw" /></div>
          <div className="available-card"><span className="status-dot" /> Available for a good challenge</div>
          <span className="scribble">thoughtful code,<br />human results ↗</span>
        </div>
      </section>
      <footer><span>Based in Bulgaria · Working everywhere</span><span>Scroll to discover <b>↓</b></span></footer>
    </main>
  );
}
