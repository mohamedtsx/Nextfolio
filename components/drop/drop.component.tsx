import { useState } from "react";

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
        <div onClick={() => setOpen(!open)} className={`${active? 'rounded-tl-none': ' animate-drop'}  transition-[border-radius] duration-500 ease-in-out rotate-45 fixed right-4 rounded-full  bg-darkblue-0 cursor-pointer`}>
            <div className=" -rotate-45 flex flex-col justify-center items-center sm:hidden w-12 h-12  p-1  overflow-hidden">
                <span className="block my-[3px] w-8 h-[3px] bg-gold"/>
                <span className="block my-[3px] w-8 h-[3px] bg-gold"/>
                <span className="block my-[3px] w-8 h-[3px] bg-gold"/>
            </div>
        </div>
    )
}

export default Drop;