type Project = { id:number|string; title:string; description:string; tags:string; link?:string; imageUrl?:string };
const staticPrefix = process.env.GITHUB_PAGES === "true" ? `/${process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "portfolio_website"}` : "";
const featured:Project[] = [
  { id:"appointment-booking-board", title:"Appointment Booking Board", description:"A responsive scheduling dashboard with weekly calendar navigation, customer and service views, conflict checks, and appointment status controls.", tags:"Next.js, TypeScript, Scheduling, Product design", link:"https://dimitar-appointment-booking-board.netlify.app", imageUrl:"/appointment-booking-board.png" },
  { id:"field-service-dispatch-board", title:"Field Service Dispatch Board", description:"A dispatch workspace with live job lanes, technician assignments, status updates, and browser-persisted demo data.", tags:"Next.js, TypeScript, Field operations, Product design", link:"https://dimitar-field-service-dispatch-board.netlify.app" },
  { id:"restaurant-reservation-manager", title:"Restaurant Reservation Manager", description:"A restaurant control board for reservations, guest status, table assignments, and a live floor plan.", tags:"Next.js, TypeScript, Hospitality, Product design", link:"https://dimitar-restaurant-reservation-manager.netlify.app" },
];

export default function ProjectGallery() {
  return <section className="work-section" aria-label="Project gallery">
    <div className="work-toolbar"><span>{String(featured.length).padStart(2,"0")} projects</span><span className="static-project-note">Projects are updated from GitHub.</span></div>
    <div className="project-grid">{featured.map((project,index)=><article className={`project-card tone-${index%3}`} key={project.id}><div className="project-visual">{project.imageUrl?<img src={`${staticPrefix}${project.imageUrl}`} alt={`Preview of ${project.title}`} />:<div className="project-placeholder"><span>{String(index+1).padStart(2,"0")}</span><b>{project.title.slice(0,1)}</b></div>}</div><div className="project-info"><span className="project-number">{String(index+1).padStart(2,"0")}</span><div><h2>{project.title}</h2><p>{project.description}</p><ul>{project.tags.split(",").map(tag=><li key={tag}>{tag.trim()}</li>)}</ul></div>{project.link&&<a className="project-link" href={project.link} target="_blank" rel="noreferrer">↗</a>}</div></article>)}</div>
  </section>;
}


