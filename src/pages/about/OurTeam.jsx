import React from 'react'
import { TeamData } from '../../localData/TeamData';
import TeamCard from '../../components/cards/TeamCard';

const OurTeam = () => {
    return (
        <section>
            <h1 className='font-bold text-[20px] max-md:text-[18px] max-sm:text-base tracking-wide mb-8 max-[800px]:mb-7'>
                Our Management Team
            </h1>
            <div className='grid grid-cols-4 gap-7 mt-5 max-[1185px]:grid-cols-3 max-[802px]:grid-cols-2 max-[508px]:grid-cols-1'>
                {
                    TeamData.map((item, index) => {
                        const { img, name, designation } = item;
                        return (
                            <TeamCard key={index} image={img} name={name} designation={designation} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default OurTeam
