import Image from "next/image";
import FloatingLight from "../../static/floating-light.png";

const Hero = () => {

    return(
        <section className="hero flex justify-center items-center text-lg h-screen bg-darkblue-0 text-white">
            <div className="flex justify-center flex-col items-center">
                <div className="text-center text-[42px] leading-[48px]">
                    Hello, I'm <span className="text-gold font-medium">Mohamed Khalid.</span>
                    <br/> 
                    I'm a front-end web developer
                </div>
                <button>
                    view my work
                </button>
            </div>
            <Image 
                src={FloatingLight}
                width={240}
                height={240}
                alt="light"
                className="hidden sm:inline-block absolute bottom-12 right-12 animate-light"
            />
        </section>
    )
}

export default Hero;