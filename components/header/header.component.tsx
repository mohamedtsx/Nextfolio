import Image from "next/image";
import Link from "next/link";
import Logo from "@/static/my-logo-transparentbg.png"

const Header = () => {

    return(
        <header className="bg-darkblue-0 select-none fixed w-full">
            <div className="container max-w-7xl m-auto flex justify-between items-center h-16 px-4  text-white">
                <a href="/" className="text-xl tracking-wider flex justify-center items-center gap-1 capitalize">
                    <Image
                        src={Logo}
                        width={36}
                        height={36}
                        alt="mohamed-logo"
                    />
                    <strong>mohamed khalid</strong>
                </a>
                <nav className="flex gap-4 items-center uppercase">
                    <Link href="/">home</Link>
                    <Link href="#about">about</Link>
                    <Link href="#projects">projects</Link>
                    <Link href="#contact">contact</Link>
                    <Link href="#" className="transition px-4 py-2 border border-green rounded-lg text-sm hover:bg-green hover:text-white focus:text-white hover:bg-opacity-20">resume</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;