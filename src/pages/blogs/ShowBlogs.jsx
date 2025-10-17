import React from 'react'
import {ReactComponent as Arrow} from '../../assets/svg/blogArrow.svg'


const ShowBlogs = ({ blogs }) => {
    return (
        <section>
            <div className='grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1'>
                {blogs.map((items) => {
                    const content = items.content
                    return (
                        <div key={items.id} className="w-full h-auto">
                            <div>
                                <div className="bg-slate-300 h-[260px] w-full overflow-hidden">
                                    {items.featured_image && (
                                        <img src={items?.featured_image || 'https://placehold.co/400'} alt={items.title} className='w-full h-full object-cover' />
                                    )}
                                </div>

                                <div className="relative -mt-11 w-[95%] min-h-[150px] py-5 pr-5 bg-white">
                                    <h1 className='font-bold text-[15px] leading-[25px]'>{items.title.slice(0, 85) + '...'}</h1>
                                    <div className='mt-3'>
                                        <p className='font-semibold text-[11px]'>
                                            {new Date(items.createdAt).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </p>
                                        <div className='w-[10%] h-0.5 mt-1 bg-mainBlue'></div>
                                    </div>

                                    <p dangerouslySetInnerHTML={{ __html: content.slice(0, 160) + '...' }} className='font-medium text-[10px] leading-[22px] mt-2 min-h-[60px]' />
                                    {/* 
                  <NavLink to={`/blogs-singlepage/${items.slugs}`}> */}
                                    <div className='flex items-center gap-3 mt-3 group'>
                                        <p className='font-bold text-[11px] text-mainBlue group-hover:text-mainBlueHover cursor-pointer'>Read More</p>
                                        <Arrow className='w-[16px] h-[12px] 2x-l:w-[14px] 2x-l:h-[14px] !fill-mainBlue group-hover:!fill-mainBlueHover' />
                                    </div>
                                    {/* </NavLink> */}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default ShowBlogs
