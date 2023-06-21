import { ButtonHTMLAttributes, ReactNode } from "react";


type ButtonProps = {
    children: ReactNode,
    className?: string,
    otherProps?: ButtonHTMLAttributes<HTMLButtonElement>
}

const Button = ({ children, className,otherProps }: ButtonProps) => {

    return(
        <button className={`${className} transition px-6 py-2 border border-green rounded-lg hover:bg-green hover:text-white focus:text-white hover:bg-opacity-20 uppercase font-medium tracking-wider flex justify-center items-center `} {...otherProps}>
            { children }
        </button>
    )
}

export default Button;