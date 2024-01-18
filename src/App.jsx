import { Outlet } from 'react-router-dom'
import NavbarMain from './Components/Navbar/NavbarMain.jsx'
import Footer from './Components/Footer/Footer.jsx'
import './App.css'

export default function App() {
    return (
        <>
        <NavbarMain />
        <div className='outlet-div'></div>
        <Outlet className='outlet-body'/>
        <Footer />
        </>
    )
}
