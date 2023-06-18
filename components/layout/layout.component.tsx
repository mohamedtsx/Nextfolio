import { ReactNode } from "react"
import Header from "../header/header.component"

type LayoutProps = {
    children: ReactNode
}

const Layout = ({children}: LayoutProps) => {

    return(
        <>
            <Header />
            {children}
        </>
    )
}

export default Layout;