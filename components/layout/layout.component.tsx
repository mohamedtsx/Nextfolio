import { ReactNode } from "react"
import Header from "../header/header.component"
import Footer from "../footer/footer.component"


type LayoutProps = {
    children: ReactNode
}

const Layout = ({children}: LayoutProps) => {

    return(
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout;