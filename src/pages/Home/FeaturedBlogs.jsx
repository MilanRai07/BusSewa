import React from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Arrow } from '../../assets/svg/blogArrow.svg'
const featuredBlogs = [
  {
    id: 1,
    title: "How Technology is Transforming Education in the Digital Age",
    featured_image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800",
    createdAt: "2025-09-20T10:30:00Z",
    blogCategory: { name: "Technology" },
    slugs: "technology-transforming-education",
    content: `
      <p>The integration of technology in education has reshaped how students learn and teachers instruct. 
      From interactive online classes to AI-driven personalized learning tools, digital transformation is 
      making education more accessible and engaging.</p>
    `
  },
  {
    id: 2,
    title: "5 Effective Strategies to Stay Productive While Working Remotely",
    featured_image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
    createdAt: "2025-08-12T08:15:00Z",
    blogCategory: { name: "Productivity" },
    slugs: "remote-work-productivity-tips",
    content: `
      <p>Remote work offers flexibility but also brings distractions. Learn how to stay productive 
      by setting clear boundaries, creating a dedicated workspace, and maintaining a consistent 
      daily routine to keep your workflow smooth.</p>
    `
  },
  {
    id: 3,
    title: "Sustainable Living: Small Changes That Make a Big Difference",
    featured_image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800",
    createdAt: "2025-07-05T15:45:00Z",
    blogCategory: { name: "Lifestyle" },
    slugs: "sustainable-living-tips",
    content: `
      <p>Adopting sustainable habits doesn’t have to be difficult. From reducing single-use plastics 
      to supporting eco-friendly brands, these small steps contribute to a healthier planet and a 
      greener future.</p>
    `
  },
  {
    id: 4,
    title: "The Future of Artificial Intelligence: What to Expect in 2030",
    featured_image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
    createdAt: "2025-09-01T12:00:00Z",
    blogCategory: { name: "AI & Innovation" },
    slugs: "future-of-ai-2030",
    content: `
      <p>Artificial Intelligence continues to advance rapidly, influencing industries like healthcare, 
      finance, and education. By 2030, we can expect smarter automation, improved data ethics, and 
      even AI creativity emerging in new fields.</p>
    `
  }
]

const FeaturedBlogs = () => {
  return (
    <section>
      <h1 className='font-bold text-[20px] max-md:text-[18px] max-sm:text-base tracking-wide mb-8 max-[800px]:mb-7'>
        Blogs
      </h1>

      <div className='grid grid-cols-4 gap-6 max-[1390px]:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1'>
        {featuredBlogs.map((items) => {
          const content = items.content
          return (
            <div key={items.id} className="w-full h-auto">
              <div>
                <div className="bg-slate-300 h-[260px] w-full overflow-hidden">
                  {items.featured_image && (
                    <img src={items?.featured_image||'https://placehold.co/400'} alt={items.title} className='w-full h-full object-cover' />
                  )}
                </div>

                <div className="relative -mt-11 w-[95%] min-h-[150px] py-5 pr-5 bg-white">
                  <h1 className='font-bold text-[15px] leading-[25px]'>{items.title.slice(0, 55) + '...'}</h1>
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

export default FeaturedBlogs
