import { Outlet } from 'react-router-dom'
import NavbarMain from './Components/Navbar/NavbarMain.jsx'
import Footer from './Components/Footer/Footer.jsx'

export default function App() {
    return (
        <>
        <NavbarMain />
        <Outlet/>
        <Footer />
        </>
    )
}
