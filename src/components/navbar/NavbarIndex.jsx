import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion";
import { NavbarItem } from '../../localData/NavbarItem';
import HamDrop from './HamDrop';


const NavbarIndex = () => {
    const [isSingle, setIsSingle] = useState(false)
    const [active, setActive] = useState('/');
    const [showHam, setShowHam] = useState(false);

    const location = useLocation();

    useEffect(() => {
        let path = location.pathname;
        if (path == '/') {
            setActive('/')
        } else if (path == '/offers') {
            setActive('Offers')
        } else if (path == '/bookings') {
            setActive('Bookings')
        } else if (path == '/login') {
            setActive('Login/SignUp')
        } else {
            setActive('')
        }
    }, [location.pathname])

    console.log(location.pathname,active)


    return (
        <nav>
            <div className={` h-[90px] flex justify-between items-center bg-red-3-- px-20 max-[850px]:px-16 w-full max-[1074px]:hidden transition-all duration-75 ease-in-out 
      ${isSingle ? 'shadow-md ' : 'shadow-md'}
      `}>
                <div className="w-[212px] h-[80%]">
                    <NavLink to='/'>
                        <img src='/logo.webp' alt='supa express'
                            className="w-full h-full "
                        ></img>
                    </NavLink>
                </div>

                <ul className="w-auto flex justify-between gap-10 max-[1136px]:gap-4 max-[1261px]:h-[50px]  max-[535px]:h-[40px] items-center  ">
                    {
                        NavbarItem.map((items, index) => {
                            const { name, path, icon } = items;
                            return (
                                <li key={index} className={`font-medium relative text-[15px] max-[1261px]:text-[15px] max-[868px]:text-[13px]`}

                                >

                                    <NavLink to={path} className='flex items-center gap-2'>
                                        {icon}
                                        {name}
                                    </NavLink>
                                    {
                                        active == name && (
                                            <motion.div
                                                layoutId="underline"
                                                className="absolute -bottom-[4px] left-0 h-[2.5px] w-[30%] bg-mainBlue"
                                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                            />
                                        )
                                    }
                                </li>
                            )
                        })
                    }
                </ul>

            </div>

            {/* small screen */}
            <div className="max-[1074px]:block hidden h-auto relative shadow-md">
                <div className=" flex px-16 max-sm:px-10 max-[500px]:px-7 items-center  w-full justify-between h-[90px] max-[500px]:h-[70px] bg-white">
                    <div>
                        <NavLink to='/'>
                            <img src='/logo.webp' className='w-[150px] h-[60px] max-[500px]:w-[100px] max-[500px]:h-[40px]' />
                        </NavLink>
                    </div>
                    <div
                        onClick={() => setShowHam(!showHam)}
                        className="p-3 cursor-pointer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            // className={`w-8 h-8 max-[500px]:w-6 max-[500px]:h-6 cursor-pointer ${showTextBlack ? 'fill-black' : 'fill-white'}`}
                            className={`w-8 h-8 max-[500px]:w-6 max-[500px]:h-6 cursor-pointer fill-black`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            onClick={() => setShowHam(!showHam)}
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 6h14a1 1 0 010 2H3a1 1 0 110-2zm0 6h14a1 1 0 010 2H3a1 1 0 110-2z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>


                </div>
                <AnimatePresence>
                    {showHam && (
                        <motion.div
                            className="absolute inset-0 w-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                        >
                            <HamDrop lists={NavbarItem} setShowHam={setShowHam} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    )
}

export default NavbarIndex
