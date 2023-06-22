
type TitleProps = {
    children: React.ReactNode
}

const Title = ({ children }: TitleProps) => {

    return(
        <div className="w-full flex flex-col justify-center items-center">
            <h1 className="text-gray-title uppercase text-4xl font-bold">
                {children}
            </h1>
            <span className="bg-gray-title h-1 lg:w-[70px] w-16 mt-6 mb-24 "/>
        </div>
    )
}

export default Title;