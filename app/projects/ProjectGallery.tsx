import { featured, projectPagePath, staticPrefix } from "./projectData";

export default function ProjectGallery() {
  return <section className="work-section" aria-label="Project gallery">
    <div className="work-toolbar"><span>{String(featured.length).padStart(2,"0")} projects</span><span className="static-project-note">Projects are updated from GitHub.</span></div>
    <div className="project-grid">{featured.map((project,index)=><article className={`project-card tone-${index%3}`} key={project.slug}><a className="project-visual project-visual-link" href={projectPagePath(project.slug)} aria-label={`Read the ${project.title} case study`}>{project.imageUrl?<img src={`${staticPrefix}${project.imageUrl}`} alt={`Preview of ${project.title}`} />:<div className="project-placeholder"><span>{String(index+1).padStart(2,"0")}</span><b>{project.title.slice(0,1)}</b></div>}<span className="project-visual-cta">Read case study ↗</span></a><div className="project-info"><span className="project-number">{String(index+1).padStart(2,"0")}</span><div><h2><a href={projectPagePath(project.slug)}>{project.title}</a></h2><p>{project.description}</p><ul>{project.tags.split(",").map(tag=><li key={tag}>{tag.trim()}</li>)}</ul></div><a className="project-link" href={projectPagePath(project.slug)} aria-label={`Read the ${project.title} case study`}>↗</a></div></article>)}</div>
  </section>;
}


