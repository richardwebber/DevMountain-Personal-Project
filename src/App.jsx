import { Outlet } from 'react-router-dom'
import NavbarMain from './Components/NavbarMain.jsx'
import Footer from './Components/Footer.jsx'

export default function App() {
    return (
        <>
        <NavbarMain />
        <Outlet/>
        <Footer />
        </>
    )
}
