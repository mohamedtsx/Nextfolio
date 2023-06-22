import Title from "../title/title.component";
import ProjectCard from "../project-card/project-card.component";
import data from "../../data/data.json";
import { ProjectType } from "../project-card/project-card.component";

const Projects = () => {

    const projects: ProjectType[] = data.projects;

    return(
        <section className="bg-gray-light">
            <div className="container max-w-7xl px-4">
                <Title>projects</Title>

                <div>
                    {projects.map(el => <ProjectCard project={el} />)}
                </div>
            </div>
        </section>
    )
}

export default Projects;