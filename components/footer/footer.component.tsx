import Image from "next/image";
import { svgIcons } from "@/utils/svg-icon";


const socialItems = [
    { name: svgIcons.linkedin, width: 21, link: "https://linkedin.com/in/mohamedtsx"  },
    { name: svgIcons.github, width: 18, link: "https://github.com/mohamedtsx" },
    { name: svgIcons.codepen, width: 24, link: "https://codepen.com/mohamedtsx" },
    { name: svgIcons.twitter, width: 24, link: "https://www.memesmonkey.com/images/memesmonkey/91/91534bfcb31f064225e8f53bf63486e8.jpeg" },
    { name: svgIcons.facebook, width: 15, link: "https://i.imgflip.com/1nia70.jpg" },
]

const contactItems = [
    { iconName: svgIcons.phone, iconWidth: 20, content: "+201102687520" },
    { iconName: svgIcons.gmail, iconWidth: 18, content: "mohamed.tsx@gmail.com" },
    { iconName: svgIcons.address, iconWidth: 22, content: "Egypt - Sohag Governorate" },
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
                                    const isBlocked = el.name === svgIcons.facebook || el.name === svgIcons.twitter;

                                    return(
                                        <a href={el.link} target="_blank" className="relative transition flex justify-center items-center w-12 h-12 bg-graybg/30 opacity-80 hover:opacity-100">
                                            <Image 
                                                src={`../../static/svg/${el.name}.svg`} 
                                                width={el.width}
                                                height={24}
                                                alt={`${el.name} icon`}
                                            />
                                            <Image 
                                                src={`../../static/svg/${svgIcons.ban}.svg`} 
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
                            <a href="#" className="">important link one</a>
                        </div>
                        <div className="w-full border-b border-white/50 max-w-xs md:max-w-none">
                            <a href="#" className="">important link one</a>
                        </div>
                        <div className="w-full max-w-xs md:max-w-none">
                            <a href="#" className="">important link one</a>
                        </div>
                    </div>

                    {/* contact info section */}
                    <div className="flex flex-col justify-between items-center md:items-start">
                        {contactItems.map(el => {
                            return(
                                <div className="flex items-center py-1 w-full max-w-xs md:max-w-none gap-2">
                                    <div className="w-6 h-6 flex justify-center items-center opacity-90">
                                        <Image
                                            src={`../../static/svg/${el.iconName}.svg`}
                                            width={el.iconWidth}
                                            height={el.iconWidth}
                                            alt={el.iconName}
                                        />
                                    </div>
                                    <div className={` ${el.iconName === svgIcons.phone?'font-sans font-light':''}`}>
                                        {el.content}
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    
                    {/* quote section */}
                    <div className="w-full xl:flex justify-center hidden"> 
                        <blockquote className="max-w-xs md:max-w-none leading-relaxed">
                            &ensp;element defines a long quotation. It identifies a section that is quoted from another source It identifies a section that is quoted from word &ensp;
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