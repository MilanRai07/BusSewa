import React from 'react'
import HeroHome from './HeroHome'
import Offers from './Offers'
import WhyChoose from './WhyChoose'
import Bus from './Bus'
import DownloadIndex from '../../components/download/DownloadIndex'
import FeaturedBlogs from './FeaturedBlogs'
import Faq from './Faq'

const HomeIndex = () => {
    return (
        <main>
            <HeroHome />
            <div className='px-16 max-[800px]:px-10 max-sm:px-8 mt-14 flex flex-col gap-28 max-lg:gap-24 max-md:gap-20 max-sm:gap-16'>
                <Offers />
                <WhyChoose />
                <Bus />
            </div>
            <div className='my-28 max-lg:my-24 max-md:my-20 max-sm:my-16'>
                <DownloadIndex />
            </div>
            <div className='px-16 max-[800px]:px-10 max-sm:px-8 my-14 flex flex-col gap-28 max-lg:gap-24 max-md:gap-20 max-sm:gap-16'>
                <FeaturedBlogs/>
                <Faq/>
            </div>

        </main>
    )
}

export default HomeIndex
