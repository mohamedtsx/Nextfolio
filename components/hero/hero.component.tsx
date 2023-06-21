import Image from "next/image";
import FloatingLight from "../../static/floating-light.png";
import Button from "../button/button.component";
import RightArrow from "../../static/icons/right-arrow.svg"
import Link from "next/link";

const Hero = () => {

    return(
        <section id="home" className="hero flex justify-center items-center h-screen bg-darkblue-0 text-white">
            <div className="flex justify-center flex-col items-center">
                <h1 className="text-center text-2xl lg:text-[42px] lg:leading-[48px] mb-5">
                    Hello, I'm <span className="text-gold font-medium">Mohamed Khalid.</span>
                    <br/> 
                    I'm a front-end web developer
                </h1>
                <Link href="#about">
                    <Button className="hero-button">
                        projects
                        <span className="w-3"/>
                        <Image 
                            src={RightArrow}
                            width={24}
                            height={24}
                            alt="right-arrow"
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
        </section>
    )
}

export default Hero;