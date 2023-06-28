import Title from "../title/title.component";
import ProjectCard from "../project-card/project-card.component";
import data from "../../data/data.json";
import { ProjectType } from "../project-card/project-card.component";

const Projects = () => {

    const projects: ProjectType[] = data.projects;

    return(
        <section id="projects" className="section bg-gray-light">
            <div className="container max-w-7xl px-4">
                <Title>projects</Title>

                <div className="flex flex-col gap-2 px-1 sm:grid sm:grid-cols-minmax390 lg:gap-0">
                    {projects.map(el => <ProjectCard key={el.key} project={el} />)}
                </div>
            </div>
        </section>
    )
}

export default Projects;