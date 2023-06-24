import Header from "../widgets/Header"

interface ILayoutProps {
    children: any
}

const Layout = ({children}: ILayoutProps) => {
    return (
        <>
            <Header/>
            {children}
        </>
    )
}

export default Layout