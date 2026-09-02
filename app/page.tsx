import Image from "next/image";
import Link from "next/link";
import ContactPrompt from "./ContactPrompt";
import InlineContactForm from "./InlineContactForm";
import "./featured-project.css";

const steps = [
  ["01", "◉", "Listen first", "I start by understanding the bottleneck, not by pitching unnecessary features."],
  ["02", "•••", "Keep it clear", "You always know what is being built, why it matters, and what comes next."],
  ["03", "⌁", "Build what helps", "I focus on tools that make daily work faster, easier, and more dependable."],
  ["04", "↗", "Improve in small steps", "Quick iterations beat long delays. We can launch lean and refine from real use."],
];

const services = [
  ["▱", "Micro apps for everyday business tasks", "Small, focused apps that solve specific problems and save real time."],
  ["▥", "Internal tools and admin dashboards", "Custom dashboards that bring clarity to your day-to-day operations."],
  ["ϟ", "Workflow simplification and automation", "Automate repetitive steps and reduce manual handoffs."],
  ["◌", "MVPs for new software ideas", "Validate ideas quickly with a working prototype users can try."],
  ["♡", "Interface refreshes for existing tools", "Modern, cleaner interfaces that make existing tools easier to use."],
  ["♙", "Bug fixing and practical improvements", "Fix issues, improve stability, and make your software more reliable."],
];

export default function HomePage() {
  return <main className="landing">
    <header className="topbar">
      <Link className="brand" href="#top">DS<span>.</span></Link>
      <nav aria-label="Primary navigation"><a href="#projects">Projects</a><a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a><a className="social-link" href="https://www.linkedin.com" aria-label="LinkedIn">in</a><a className="social-link github" href="https://github.com/mitzZzera" aria-label="GitHub">●</a><ContactPrompt className="nav-cta">Let’s talk <span>→</span></ContactPrompt></nav>
    </header>

    <section className="reference-hero" id="top">
      <div className="hero-copy">
        <p className="section-label"><span /> Programmer · Problem solver</p>
        <h1>I turn app<br/>problems into<br/><em>working solutions.</em></h1>
        <p>I’m <strong>Dimitar Shopov</strong>, a software developer building practical apps for people and small businesses. I help replace messy everyday work with fast, useful tools that actually get used.</p>
        <p>Based in Bulgaria, I bring the speed and flexibility of focused development to teams that need effective software without the overhead.</p>
        <div className="hero-actions"><a className="dark-button" href="#projects">Explore projects <span>→</span></a><ContactPrompt className="text-button">Start a conversation <span>↗</span></ContactPrompt></div>
      </div>
      <div className="hero-photo"><Image src="/dimitar-shopov.jpeg" alt="Dimitar Shopov outdoors in the Bulgarian mountains" fill priority sizes="(max-width: 800px) 100vw, 48vw"/><span className="photo-note">Thoughtful code,<br/>useful results. ↗</span><div className="availability"><i /> Available for new projects</div></div>
    </section>

    <section className="value-section">
      <div className="value-intro"><h2>You need more than code.<br/><em>You need a problem solved.</em></h2><p>Most people don’t need a giant platform. They need the right small app—something that saves time, reduces mistakes, and makes everyday work simpler.</p></div>
      <div className="outcomes"><article><i>◷</i><div><h3>Save time on<br/>repetitive admin</h3><p>Automate the busywork and get hours back every week.</p></div></article><article><i>◇</i><div><h3>Reduce errors and<br/>manual work</h3><p>Fewer copy-paste mistakes. More accurate, reliable data.</p></div></article><article><i>↗</i><div><h3>Launch useful<br/>internal tools quickly</h3><p>From idea to working tool in days, not months.</p></div></article></div>
    </section>

    <section className="process-section"><p className="section-label"><span /> How I work</p><div className="process-grid">{steps.map(([n,icon,title,copy])=><article key={n}><div><b>{n}</b><i>{icon}</i></div><h3>{title}</h3><p>{copy}</p></article>)}</div><p className="process-note">In short: practical problem-solving, honest communication, and software shaped around real work.</p></section>

    <section className="selected-work" id="projects">
      <p className="section-label"><span /> Selected work</p>
      <div className="section-heading"><h2>Things I’ve <em>made work.</em></h2><p>A few examples of micro apps, internal tools, and practical software fixes designed around real business needs.</p><Link className="acid-button" href="/projects">See all projects <span>→</span></Link></div>
      <div className="work-cards">
        <article><div className="work-preview taskflow"><div className="mini-sidebar"/><div className="kanban"><i/><i/><i/></div></div><h3>Taskflow</h3><p><b>Problem:</b> Team requests were scattered across chat and email.<br/><b>Result:</b> A lightweight request tracker that gave one clear workflow and reduced follow-up time.</p><ul><li>React</li><li>TypeScript</li><li>Workflow</li></ul></article>
        <article><div className="work-preview ledger"><div className="mini-sidebar"/><div className="chart"><i/><i/><i/><i/><i/></div></div><h3>Pocket Ledger</h3><p><b>Problem:</b> Daily expenses were tracked manually in spreadsheets.<br/><b>Result:</b> A simple expense dashboard that made cash tracking clearer for a small business owner.</p><ul><li>Web App</li><li>Data</li><li>Reporting</li></ul></article>
        <article className="featured-project"><a className="work-preview project-image" href="https://github.com/mitzZzera/Appointment_Booking_Board" target="_blank" rel="noreferrer" aria-label="View Appointment Booking Board on GitHub"><Image src="/appointment-booking-board.png" alt="Appointment Booking Board dashboard preview" fill sizes="(max-width: 760px) 100vw, 33vw"/><span className="project-open">View project ↗</span></a><h3>Appointment Booking Board</h3><p><b>Problem:</b> Appointments were being managed through phone calls and paper notes.<br/><b>Result:</b> A responsive scheduling dashboard with weekly navigation, customer and service views, conflict checks, and booking status controls.</p><ul><li>Next.js</li><li>TypeScript</li><li>Scheduling</li></ul><a className="project-repo-link" href="https://github.com/mitzZzera/Appointment_Booking_Board" target="_blank" rel="noreferrer">Explore the project <span>↗</span></a></article>
      </div>
    </section>

    <section className="services-section" id="services"><p className="section-label"><span /> What I offer</p><div className="services-grid">{services.map(([icon,title,copy])=><article key={title}><i>{icon}</i><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div><div className="fit-row"><p><i>✓</i><span><b>Best fit:</b> small businesses, solo operators, and teams<br/>that need a focused software solution quickly.</span></p><p><i>×</i><span><b>Not a fit for:</b> huge enterprise platforms or long,<br/>heavy agency-style engagements.</span></p></div></section>

    <section className="about-section" id="about"><p className="section-label"><span /> About Dimitar</p><div className="about-grid"><div className="about-photo"><Image src="/dimitar-shopov.jpeg" alt="Dimitar Shopov" fill sizes="(max-width: 800px) 100vw, 42vw"/></div><div><p className="about-lead">I’m a Bulgaria-based developer who enjoys turning fuzzy app problems into practical tools people actually want to use. I care about clarity, calm collaboration, and building software that earns its place in someone’s day.</p><p className="joke">Morning person — provided the morning starts after noon.</p><ul className="facts"><li>⌖ Based in Bulgaria</li><li>⌂ Works remotely</li><li>♡ Small business friendly</li><li>◎ EN / BG</li></ul></div></div></section>

    <section className="contact-section" id="contact"><p className="section-label"><span /> Start a conversation</p><div className="contact-grid"><div><h2>Tell me what you need.</h2><p>If you have a recurring task, a clunky workflow, or a small software idea that could save time, I’d love to hear about it.</p><ul><li>✉ hello@dimitarshopov.dev</li><li>in linkedin.com/in/dimitarshopov</li><li>● github.com/mitzZzera</li></ul></div><InlineContactForm/></div></section>

    <footer className="site-footer"><Link className="brand" href="#top">DS<span>.</span></Link><p>Dimitar Shopov — Based in Bulgaria · Working everywhere<br/><em>Thoughtful code. Human results.</em></p><nav><a href="#projects">Projects</a><a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a><a href="https://github.com/mitzZzera">GitHub</a></nav><span>© 2026 Dimitar Shopov</span></footer>
  </main>;
}



