import Footer from './footer'
import Nav from './nav'

export default function Layout({ children }) {
    return (
        <div>
            <Nav />
            {children}
            <Footer />
        </div>
    )
}