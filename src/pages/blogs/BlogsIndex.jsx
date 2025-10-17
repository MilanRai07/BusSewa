import React, { useEffect, useRef, useState } from 'react'
import ShowBlogs from './ShowBlogs';
import { ReactComponent as Search } from '../../assets/svg/search.svg'
import DownloadIndex from '../../components/download/DownloadIndex';

const blogs = [
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
        title: "5 Effective Strategies to Stay Productive While Working Remotely. 5 Effective Strategies to Stay Productive While Working Remotely",
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
const BlogsIndex = () => {
    const [selectedCategory, setSelectedCategory] = useState('Home');
    const [showSearch, setShowSearch] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const searchRef = useRef(null);
    const category = ['Home', 'Featured', 'News', 'Buses', 'Destinations'];

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setShowSearch(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
      <>
        <main className='px-16 max-[800px]:px-10 max-sm:px-8 my-14 max-sm:my-9'>
            {/* Header */}
            <div className='border-b-[0.5px] border-b-[#69696999] pb-7 max-md:pb-5 relative'>
                <p className='font-bold text-[25px] max-[909px]:text-[20px] max-sm:text-[18px] text-center text-mainBlue'>
                    Supa <span className='text-[#C62828]'>Ex</span>press Blogs
                </p>

                {/* Search button + input */}
                <div
                    ref={searchRef}
                    className='absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 max-md:static max-md:flex max-md:justify-center max-md:mt-9'
                >
                    {!showSearch ? (
                        <div
                            onClick={() => setShowSearch(true)}
                            className='flex gap-2 items-center cursor-pointer'
                        >
                            <Search className='w-[18px] h-[18px] stroke-black' />
                            <p className='text-[14px] font-medium'>Search</p>
                        </div>
                    ) : (
                        <input
                            type='text'
                            placeholder='Search blogs...'
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            autoFocus
                            className={`border border-gray-400 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-mainBlue transition-all duration-300 ${showSearch ? 'w-[180px] opacity-100' : 'w-0 opacity-0'
                                }`} onKeyDown={(e) => {
                                    if (e.key === 'Enter') setShowSearch(false);
                                }}
                        />
                    )}
                </div>
            </div>

            {/* Category */}
            <div className='flex justify-center mt-10 mb-14 max-sm:mt-7 max-sm:mb-9 flex-wrap max-lg:gap-4 max-sm:gap-2'>
                {category.map((item, index) => (
                    <div
                        onClick={() => setSelectedCategory(item)}
                        key={index}
                        className={`px-8 ${index !== 0 ? 'border-l border-gray-400 max-lg:border-none max-lg:px-0' : 'max-lg:px-0'
                            }`}
                    >
                        <p className={`${selectedCategory == item ? 'text-mainBlue' : 'text-black'} font-bold text-[16px] max-sm:text-[13px] cursor-pointer hover:text-mainBlue transition`}>
                            {item}
                        </p>
                    </div>
                ))}
            </div>

            {/* blogs showing  */}
            <ShowBlogs blogs={blogs} />
        </main>
        <DownloadIndex/>
      </>
    )
}

export default BlogsIndex
