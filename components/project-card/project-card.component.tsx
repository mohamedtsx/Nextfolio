import IconGitHub from "../icons/github"
import IconExternal from "../icons/external"
import Link from "next/link"
import Button from "../button/button.component"



export type ProjectType = {
    "id": string,
    "name": string,
    "tools": string[],
    "description": string,
    "links": {
        "github": string,
        "live": string
    }
}

type ProjectCardProps = {
    project: ProjectType
}


const ProjectCard = ({ project }: ProjectCardProps) => {

    return(
        <div className="w-1/3 h-64 relative bg-crown-clothes bg-cover">
            <div className="active-project-card relative top-0 left-0 transition-opacity duration-500 w-full h-full bg-white opacity-0 hover:opacity-100 overflow-hidden">
                <div className="transition-all  duration-500 flex flex-col justify-center items-center absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full">
                    <Button className="mb-2 text-inherit">case study</Button>
                    <span>tech1 / tech2</span>
                </div>
                <div className="transition duration-500 w-full h-10 absolute bottom-0 left-0 flex justify-between items-center px-2 bg-darkblue-0 text-white translate-y-full">
                    <label className="text-xl font-medium capitalize">name</label>
                    <div className="flex justify-center items-center gap-2">
                        <a href="#" className="project-card-icon " aria-label="github link" target="_blank">
                            <IconGitHub/>
                        </a>
                        <a href="#" className="project-card-icon -mt-1" aria-label="live link" target="_blank">
                            <IconExternal/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;