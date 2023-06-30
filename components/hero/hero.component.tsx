import Image from "next/image";
import FloatingLight from "../../static/floating-light.webp";
import Button from "../button/button.component";
import { staticImageName } from "@/utils/svg-icon";
import Link from "next/link";

const Hero = () => {

    return(
        <section id="home" className="section hero bg-darkblue-0 text-white h-[100svh]">
            <div className="container h-full flex flex-col justify-center items-center">
                <div className="flex justify-center flex-col items-center">
                    <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-[42px] lg:leading-[48px] mb-5 text-white">
                        Hello, I'm <span className="text-gold font-medium">Mohamed Khalid.</span>
                        <br/> 
                        I'm a front-end web developer
                    </h1>
                    <Link href="#about">
                        <Button className="hero-button">
                            projects
                            <span className="w-3"/>
                            <Image 
                                src={`../../static/svg/${staticImageName.rightarrow}.svg`}
                                width={24}
                                height={24}
                                alt="right arrow"
                                className="rotate-90 scale-75"
                            />
                        </Button>
                    </Link>
                </div>
                <Image 
                    src={FloatingLight}
                    width={240}
                    height={240}
                    alt="light"
                    className="hidden sm:inline-block absolute bottom-12 right-12 animate-light select-none"
                    draggable="false"
                />

            </div>
        </section>
    )
}

export default Hero;