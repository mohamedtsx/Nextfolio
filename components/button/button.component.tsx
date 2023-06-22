import { ButtonHTMLAttributes, ReactNode } from "react";


type ButtonProps = {
    children: ReactNode,
    className?: string,
    otherProps?: ButtonHTMLAttributes<HTMLButtonElement>
}

const Button = ({ children, className,otherProps }: ButtonProps) => {

    return(
        <button className={`${className} transition lg:px-6 lg:py-2  border border-green rounded-lg hover:bg-green hover:bg-opacity-20 uppercase font-medium tracking-wider flex justify-center items-center lg:text-lg text-medium py-2 px-4 whitespace-nowrap`} {...otherProps}>
            { children }
        </button>
    )
}

export default Button;