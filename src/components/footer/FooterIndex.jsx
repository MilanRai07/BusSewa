import React from 'react'
import { FooterLinks } from '../../localData/FooterLinks'
import Copyright from './Copyright'
import { NavLink } from 'react-router-dom'

const FooterIndex = () => {

    return (
        <footer className='w-full bg-[#F5F5F5] px-16 max-[800px]:px-10 max-sm:px-8 py-6'>
            <div className='flex justify-between items-center max-[862px]:flex-col max-[862px]:gap-6 py-5 border-t-[0.5px] border-b-[0.5px] border-black w-full'>
                <div className='w-[208px] h-[65px]'>
                    <img src='/logo.webp' alt='logo' className='w-full h-full' />
                </div>
                <ul className='flex gap-10 items-center max-[540px]:gap-4 max-[394px]:flex-wrap max-[394px]:justify-center'>
                    {
                        FooterLinks.map((item, index) => {
                            return (
                                <li key={index} className='cursor-pointer text-[15px] max-sm:text-sm max-[540px]:!text-[12px] font-medium text-[#2A2A2AB2] hover:text-mainBlueHover'>
                                   <NavLink to={item.path}>{item.name}</NavLink>
                                </li>
                            )
                        })}
                </ul>
            </div>
            <Copyright/>
        </footer>
    )
}

export default FooterIndex
