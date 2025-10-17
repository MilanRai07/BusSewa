import {ReactComponent as Offer} from '../assets/svg/navbarSvg/offers.svg'
import {ReactComponent as Booking} from '../assets/svg/navbarSvg/booking.svg'
import {ReactComponent as Notification} from '../assets/svg/navbarSvg/notification.svg'

import {ReactComponent as Account} from '../assets/svg/navbarSvg/account.svg'   

export const NavbarItem = [
    {
        icon: <Offer />,
        name: 'Offers',
        path: '/offers'
    },
    {
        icon: <Booking />,
        name: 'Bookings',
        path: '/bookings'
    },

    {
        icon: <Notification />,
        name: 'Notifications',
        path: '/notifications'
    },
    // {
    //     icon: '',
    //     name: 'Our Team',
    //     path: '/our-team'
    // },
    {
        icon: <Account className='w-[16px] h-[16px] fill-black'/>,
        name: 'Login/SignUp',
        path: '/login'
    },

]