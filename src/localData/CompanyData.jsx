import { ReactComponent as Location } from '../assets/svg/seedLocation.svg';
import { ReactComponent as Phone } from '../assets/svg/seedPhone.svg';
import { ReactComponent as Mail } from '../assets/svg/seedEmail.svg';
import { ReactComponent as Facebook } from '../assets/svg/seedFacebook.svg';
import { ReactComponent as X } from '../assets/svg/seedX.svg';
import { ReactComponent as Insta } from '../assets/svg/seedInsta.svg';
import { ReactComponent as Linked } from '../assets/svg/seedLinked.svg';


export const CompanyData = [
    {
        icon: <Location className='w-[20px] h-[28px] max-lg:w-[17px] max-lg:h-[23px] max-sm:w-[15px] max-sm:h-[19px] fill-mainBlue' />,
        title: 'Our Location',
        info1: {
            name: 'kathmandu, Nepal',
            path: '#'
        },
    },
    {
        icon: <Phone className='w-[24px] h-[24px] max-lg:w-[21px] max-lg:h-[19px] max-sm:w-[15px] max-sm:h-[19px]  fill-mainBlue' />,
        title: 'Phone Numbers',
        info1: {
            name: '+977 9812345678',
            path: 'tel:+977 9123578544'
        },
       
        info3: {
            name: '+977 92345456',
            path: 'tel:+9773453454'
        }
    },
    {
        icon: <Mail className='w-[24px] h-[20px] max-lg:w-[21px] max-lg:h-[19px] max-sm:w-[15px] max-sm:h-[19px]  fill-mainBlue' />,
        title: 'Email Address',
        info1: {
            name: 'example@gmail.com',
            path: 'mailto:example@gmail.com'
        },
    },
]

export const socialMedia = [
    {
        icon: <Facebook className='w-[12px] h-[23px] max-sm:w-[10px] max-sm:h-[18px] ' />,
        path: 'https://www.facebook.com/'
    },
    {
        icon: <Insta className='w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[19px] ' />,
        path: ''
    },
    {
        icon: <Linked className='w-[17px] h-[16px] max-sm:w-[15px] max-sm:h-[19px] ' />,
        path: ''
    },
    {
        icon: <X className='w-[21px] h-[19px] max-sm:w-[15px] max-sm:h-[19px] ' />,
        path: ''
    },

]