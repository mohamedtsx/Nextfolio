import Image from "next/image";
import { staticImageName } from "@/utils/svg-icon";


const socialItems = [
    { name: staticImageName.linkedin, width: 21, link: "https://linkedin.com/in/mohamedtsx"  },
    { name: staticImageName.github, width: 18, link: "https://github.com/mohamedtsx" },
    { name: staticImageName.codepen, width: 24, link: "https://codepen.com/mohamedtsx" },
    { name: staticImageName.twitter, width: 24, link: "https://twitter.com/mohamedtsx" },
    { name: staticImageName.facebook, width: 15, link: "https://www.facebook.com/profile.php?id=100053985153783" },
]

const contactItems = [
    { iconName: staticImageName.phone, iconWidth: 20, linkTo:"https://wa.me/+201102687520" ,content: "+201102687520" },
    { iconName: staticImageName.gmail, iconWidth: 18, linkTo:"mailto:mohamed.tsx@gmail.com" ,content: "mohamed.tsx@gmail.com" },
    { iconName: staticImageName.address, iconWidth: 22, linkTo:"https://goo.gl/maps/Nawqk8rZ3FXoF38d8", content: "Egypt - Sohag Governorate" },
]

const Footer = () => {

    return (
        <footer className="bg-darkblue-0 text-white">
            <div className="container max-w-7xl px-4">
                <div className="py-10 pt-10 grid grid-cols-minmax280 lg:gap-10 gap-6">
                    
                    {/* social media section */}
                    <div className="flex flex-col justify-center items-center sm:items-start">
                        <h4 className="text-3xl font-medium mb-4 lg:mb-2">Social</h4>
                        <div className="transition-all w-full max-w-xs flex justify-between">
                            {socialItems.map(el => {
                                    const isBlocked = el.name === staticImageName.facebook || el.name === staticImageName.twitter;

                                    return(
                                        <a key={el.name} href={el.link} target="_blank" className="relative transition flex justify-center items-center w-12 h-12 bg-graybg/30 opacity-80 hover:opacity-100">
                                            <Image 
                                                src={`../../static/svg/${el.name}.svg`} 
                                                width={el.width}
                                                height={24}
                                                alt={`${el.name} icon`}
                                            />
                                            <Image 
                                                src={`../../static/svg/${staticImageName.ban}.svg`} 
                                                width={el.width}
                                                height={24}
                                                alt={`${el.name} icon`}
                                                className={`${isBlocked? "" : "hidden"} transition duration-300 opacity-0 hover:opacity-100 absolute top-0 left-0 w-full h-full`}
                                            />
                                        </a>
                                    )
                            })}
                        </div>
                    </div>

                    {/* important links section */}
                    <div className="flex flex-col items-center md:items-start footer-important-links">
                        <div className="w-full border-b border-white/50 max-w-xs md:max-w-none ">
                            <a href="https://gdsc.community.dev/sohag-university/" className="" target="_blank">GDSC Sohag Community</a>
                        </div>
                        <div className="w-full border-b border-white/50 max-w-xs md:max-w-none">
                            <a href="https://medium.com/@mohamedtsx" className="" target="_blank">Check out my blogs on medium</a>
                        </div>
                        <div className="w-full max-w-xs md:max-w-none">
                            <a href="https://www.upwork.com/freelancers/~0170e8cbfb7d386ec6" className="" target="_blank">Start working on Upwork together</a>
                        </div>
                    </div>

                    {/* contact info section */}
                    <div className="flex flex-col justify-between items-center md:items-start">
                        {contactItems.map(el => {
                            return(
                                <div key={el.iconName} className="flex items-center h-9 w-full max-w-xs md:max-w-none gap-2">
                                    <div className="w-6 h-6 flex justify-center items-center opacity-90">
                                        <Image
                                            src={`../../static/svg/${el.iconName}.svg`}
                                            width={el.iconWidth}
                                            height={el.iconWidth}
                                            alt={el.iconName}
                                        />
                                    </div>
                                    <a href={el.linkTo} target="_blank" className={` ${el.iconName === staticImageName.phone?'font-sans font-light':''} transition opacity-90 hover:opacity-100`}>
                                        {el.content}
                                    </a>
                                </div>
                            )
                        })}

                    </div>
                    
                    {/* quote section */}
                    <div className="w-full xl:flex justify-center hidden"> 
                        <blockquote className="max-w-xs md:max-w-none text-clip leading-relaxed">
                            &ensp;An experienced frontend dev optimizing responsive, interactive React/Next experiences leveraging Tailwind CSS and TypeScript.&ensp;
                        </blockquote>
                    </div>
                </div>
                <div className="text-center py-4 text-xs border-t border-white/50">
                    &copy; 2023 Copyright. Designed & Built by Mohamed Khalid
                </div>
            </div>
        </footer>
    )
}

export default Footer;