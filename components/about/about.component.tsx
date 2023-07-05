import Image from "next/image";
import MyPhoto from "../../static/my-photo.webp"
import Title from "../title/title.component";
import data from "../../data/data.json";


const About = () => {

    const { skills } = data;
    

    return(
        <section id="about" className="section">
            <div className="container h-full max-w-7xl px-4  flex flex-col items-stretch">
                <Title>about</Title>
                <div className="flex flex-col gap-2  md:grid lg:grid-cols-2 gap-x-24">
                    <div>
                        <h3 className="text-3xl font-bold mb-7" >Get to know me!</h3>
                        <div>
                            <p className="mb-3">
                                I'm a frontend web developer ready to build compelling websites and web applications that contribute to the overall success of the product. Check out some of my work in the Projects section.
                            </p>
                            <p className="mb-3">
                                I also like to share what I learn so it can help other people in the dev community or open a dialogue with experts to gain a deeper understanding of things. Feel free to Connect or Follow me on my LinkedIn where I post useful content related to Web Development and Programming.
                            </p>
                            <p className="mb-3">
                                I'm open to job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience, then don't hesitate to contact me. I also work as a freelancer &#64;Upwork and am available for hire.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <Image 
                            src={MyPhoto}
                            alt="mohamed-photo"
                            className="filter brightness-90 m-auto rounded-md"
                        />
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold my-7" >My Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map(el =>
                                <div key={el} className=" bg-graybg font-medium py-2 px-5 rounded-md">
                                    {el}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="hidden sm:block ">
                        <h3 className="text-3xl font-bold my-7" >What you can get from me?</h3>
                        <ul className=" list-inside list-disc">
                            <li>new website or website customization.</li>
                            <li>single page application with pwa capabilities.</li>
                            <li>full functional ecommerce website with nice dashboard page.</li>
                            <li>free case analysis, tech discussion and more.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;

