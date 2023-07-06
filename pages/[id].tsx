import Layout from "@/components/layout/layout.component"
import { ProjectType } from "@/components/project-card/project-card.component";
import Title from "@/components/title/title.component";
import Image from "next/image";
import { useEffect } from "react";


type ProjectProps = {
    project: ProjectType
}

type Params = {
    params: {
        id: string
    }
}



export default function Project({ project }: ProjectProps) {


    const { 
        id,
        name,
        tools: {all: tools},
        links,
        description
    } = project;

    const descriptionBlocks = description.split('<p>');


    return(
        <Layout>
            <section className="section">
                <div className="container h-full max-w-7xl px-4 pt-16">
                    <Title>{name}</Title>
                    <div className="flex flex-col gap-2  md:grid lg:grid-cols-2 gap-x-24">
                        <a href={links.live} target="_blank" aria-label={`${name} project`}>
                            <Image 
                                src={`/static/projects/${id}.webp`}
                                width={800}
                                height={552}
                                alt={`${name} project`}
                                className="rounded-md mx-auto mb-10 sm:mt-0"
                            />
                        </a>
                        <div className="">
                            {descriptionBlocks.map((block, index) => <p key={index} className="mb-3">{block}</p>)}
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold my-7" >Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                {tools.map(el =>
                                    <div key={el} className=" bg-graybg font-medium py-2 px-5 rounded-md">
                                        {el}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold my-7" >Links</h3>
                            <ul className=" list-inside list-disc text-sm md:text-base">
                                <li>
                                    <a href={links.github} target="_blank" aria-label="github link">{links.github}</a>
                                </li>
                                <li>
                                    <a href={links.live} aria-label="live demo">{links.live}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export async function getStaticPaths() {
    const { projects } = await import("../data/data.json");
    const paths = projects.map(el => {
        return {params: {id: el.id}};
    });
    return { paths, fallback: false }
}

export async function getStaticProps({ params }: Params) {
    const { projects } = await import("../data/data.json");
    const currentProject = projects.find(el => el.id === params.id) 
    return {props: {project: currentProject}};
}