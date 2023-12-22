import { Outlet } from 'react-router-dom'
import NavbarMain from './Components/NavbarMain'

export default function App() {
    return (
        <>
        <NavbarMain />
        <Outlet />
        </>
    )
}
