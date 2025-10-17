import React, { useState } from 'react'
import DownloadIndex from '../../components/download/DownloadIndex'
import { ReactComponent as Maitri } from '../../assets/svg/maitri.svg'
import { ReactComponent as Profile } from '../../assets/svg/navbarSvg/account.svg'
import { ReactComponent as Edit } from '../../assets/svg/edit.svg'
import { ReactComponent as Dustbin } from '../../assets/svg/dustbin.svg'
import { ReactComponent as Lock } from '../../assets/svg/lock.svg'
import ProfileInfo from './ProfileInfo'
import EditProfile from './EditProfile'
import ChangePassword from './ChangePassword'
import DeleteProfile from './DeleteProfile'



const ProfileIndex = () => {
    const [selectedCategory, setSelectedCategory] = useState('Profile');
    return (
        <>
            <main className='px-16 max-[800px]:px-10 max-sm:px-8 my-14 max-sm:my-9 flex flex-col lg:flex-row justify-between items-start gap-10'>
                {/* menu */}
                <div className='lg:sticky lg:top-24 rounded-[10px] w-full lg:w-[380px] shadow-[0px_0px_10px_2px_rgba(0,0,0,0.1)] p-6 space-y-3'>
                    <div className='flex justify-center gap-4 items-center mb-5'>
                        <Maitri className='w-[30px] h-[30px] max-sm:w-[25px] max-sm:h-[25px]' />
                        <div>
                            <p className='font-bold text-[18px] text-mainBlue'>Maitri Bus</p>
                            <p className='text-black/60 text-xs font-medium'>Your journey, one tap away</p>
                        </div>
                    </div>

                    <div className={`flex cursor-pointer items-center gap-3 w-full rounded-[10px] p-3 ${selectedCategory === 'Profile' ? 'bg-mainBlue text-white' : 'text-black'}`}
                        onClick={() => setSelectedCategory('Profile')}
                    >
                        <Profile className={`w-[14px] h-[14px] ${selectedCategory === 'Profile' ? 'fill-white' : 'fill-black'}`} />
                        <p className='font-medium text-sm'>Profile</p>
                    </div>
                    <div className={`flex cursor-pointer items-center gap-3 w-full  rounded-[10px] p-3 ${selectedCategory === 'Edit' ? 'bg-mainBlue text-white' : 'text-black'}`}
                        onClick={() => setSelectedCategory('Edit')}
                    >
                        <Edit className={`w-[14px] h-[14px] ${selectedCategory === 'Edit' ? 'fill-white' : 'fill-black'}`} />
                        <p className='font-medium text-sm'>Edit Profile</p>
                    </div>
                    <div className={`flex cursor-pointer items-center gap-3 w-full  rounded-[10px] p-3 ${selectedCategory === 'Change' ? 'bg-mainBlue text-white' : 'text-black'}`}
                        onClick={() => setSelectedCategory('Change')}
                    >                        <Lock className={`w-[14px] h-[14px] ${selectedCategory === 'Change' ? 'fill-white' : 'fill-black'}`} />
                        <p className='font-medium text-sm'>Change Password</p>
                    </div>
                    <div className={`flex cursor-pointer items-center gap-3 w-full rounded-[10px] p-3 ${selectedCategory === 'Delete' ? 'bg-mainBlue text-white' : 'text-black'}`}
                        onClick={() => setSelectedCategory('Delete')}
                    >                        <Dustbin className={`w-[14px] h-[14px] ${selectedCategory === 'Delete' ? 'fill-white' : 'fill-black'}`} />
                        <p className='font-medium text-sm'>Delete Account</p>
                    </div>
                </div>

                {/* content sections */}
                <div className='w-full p-6 rounded-[10px] shadow-[0px_0px_10px_2px_rgba(0,0,0,0.1)]'>
                    {
                        selectedCategory === 'Profile' && (
                            <ProfileInfo />
                        )
                    }

                    {
                        selectedCategory === 'Edit' && (
                            <EditProfile />
                        )
                    }

                    {
                        selectedCategory === 'Change' && (
                            <ChangePassword/>
                        )
                    
                    }

                    {
                        selectedCategory === 'Delete' && (
                            <DeleteProfile/>
                        )
                    }
                </div>
            </main>

            <DownloadIndex />

        </>
    )
}

export default ProfileIndex
