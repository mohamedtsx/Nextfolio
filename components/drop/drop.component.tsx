import { useState } from "react";
import Menu from "../menu/menu.component";

const Drop = () => {

    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    if(typeof window !== "undefined") {
        window.onscroll = () => {
            let scrolledTop = window.pageYOffset;
            if(scrolledTop <= 64) {
                setActive(true);
            } else {
                setActive(false);
            }
        }
    }


    return(
        <>
            <div onClick={() => setOpen(!open)} className={`${active? 'rounded-tl-none': ' animate-drop'} drop-shadow-md filter-none transition-[border-radius] duration-500 ease-in-out rotate-45 fixed right-4 rounded-full  bg-darkblue-0 cursor-pointer z-10`}>
                <div className={`relative drop ${open? 'open': ''} -rotate-45 flex flex-col justify-center items-center w-12 h-12  p-1  overflow-hidden`}>
                    <span className="absolute top-4 w-8 h-[3px] bg-gold"/>
                    <span className="absolute top-6 w-8 h-[3px] bg-gold"/>
                    <span className="absolute top-8 w-8 h-[3px] bg-gold"/>
                </div>
            </div>
            {open? <Menu/> : null}
        </>
    )
}

export default Drop;