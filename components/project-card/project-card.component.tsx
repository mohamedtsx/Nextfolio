import IconGitHub from "../card-icons/github"
import IconExternal from "../card-icons/external"
import Link from "next/link"
import Button from "../button/button.component"



export type ProjectType = {
    "id": string;
    "name": string;
    "tools": {
        "core": string[],
        "all": string[]
    };
    "links": {
        "github": string;
        "live": string;
    }
    "description": string;
}

type ProjectCardProps = {
    project: ProjectType
}


const ProjectCard = ({ project }: ProjectCardProps) => {

    const {
        id,
        name,
        tools,
        links
    } = project;


    return(
        <div className={`lg:h-72 md:h-64 sm:h-96 md:m-0 sm:mx-10 h-56   relative bg-${id} bg-cover bg-center`}>
            <div className="active-project-card relative transition-opacity duration-500 w-full h-full bg-white opacity-0 hover:opacity-100 overflow-hidden">
                <div className="transition-all  duration-500 flex flex-col justify-center items-center absolute top-0 left-1/2 -translate-x-1/2">
                    <Link scroll={false} href={`/${id}`}>
                        <Button className="mb-2 text-inherit">case study</Button>
                    </Link>
                    <span className="whitespace-nowrap">{tools.core.join(" / ")}</span>
                </div>
                <div className="transition duration-500 w-full h-10 absolute bottom-0 left-0 flex justify-between items-center px-2 bg-darkblue-0 text-white translate-y-full">
                    <label className="text-xl font-medium">{name}</label>
                    <div className="flex justify-center items-center gap-2">
                        <a href={`${links.github}`} className="project-card-icon " aria-label="github link" target="_blank">
                            <IconGitHub/>
                        </a>
                        <a href={`${links.live}`} className="project-card-icon -mt-1" aria-label="live link" target="_blank">
                            <IconExternal/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;