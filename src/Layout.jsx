import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavbarIndex from './components/navbar/NavbarIndex'
import FooterIndex from './components/footer/FooterIndex'
import { ToastContainer } from 'react-toastify'

const Layout = () => {
    const location = useLocation(); 
     useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])
    return (
        <div>
            <ToastContainer position="top-right" close={3000} />
            <div>
                <NavbarIndex />
            </div>
            <div>
                <Outlet />
            </div>
            <div>
                <FooterIndex/>
            </div>
        </div>
    )
}

export default Layout
