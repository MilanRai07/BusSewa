import React from 'react'
import AboutHero from './AboutHero'
import WhyMaitri from './WhyMaitri'
import OurTeam from './OurTeam'
import DownloadIndex from '../../components/download/DownloadIndex'

const AboutUsIndex = () => {
    return (
        <main>
            <AboutHero />
            <div className='px-16 max-[800px]:px-10 max-sm:px-8 my-14 flex flex-col gap-28 max-lg:gap-24 max-md:gap-20 max-sm:gap-16'>
                <WhyMaitri />
                <OurTeam/>
            </div>
            <div className=''>
                <DownloadIndex/>
            </div>
        </main>
    )
}

export default AboutUsIndex
