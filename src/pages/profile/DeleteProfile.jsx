import React, { useState } from 'react'
import { ReactComponent as History } from '../../assets/svg/history.svg'
import { toast } from 'react-toastify'

const DeleteProfile = () => {
    const [agreed, setAgreed] = useState(false)

    const handleDelete = () => {
       
        toast.success('Your account has been scheduled for deletion.')
    }

    return (
        <div className='flex justify-center items-center min-h-[60vh] px-4'>
            <div className='w-full max-w-[1000px] bg-white shadow-md rounded-xl p-6 sm:p-8 text-center border border-gray-100'>
                <h1 className='font-bold text-[25px] sm:text-[22px] text-mainBlue mb-6'>
                    Delete Profile
                </h1>

                <p className='text-gray-700 text-sm sm:text-[15px] mb-8'>
                    Are you sure you want to permanently delete your account?
                </p>

                <div className='flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5 bg-[#f9fafb] p-4 rounded-lg border border-gray-200 mb-8'>
                    <div className='flex-shrink-0'>
                        <History className='w-[35px] h-[35px] text-mainBlue' />
                    </div>
                    <div className='text-gray-700 text-sm text-center sm:text-left'>
                        <p className='font-semibold mb-1'>Return within 30 days!</p>
                        <p>If you log in again within the next 30 days, your account will be restored.</p>
                    </div>
                </div>

                {/* Checkbox */}
                <div className='flex items-start justify-center gap-2 mb-8 text-sm sm:text-[15px]'>
                    <input
                        type='checkbox'
                        id='terms'
                        checked={agreed}
                        onChange={() => setAgreed(!agreed)}
                        className='mt-[2px] accent-mainBlue cursor-pointer w-4 h-4'
                    />
                    <label htmlFor='terms' className='text-gray-700 cursor-pointer leading-5'>
                        By proceeding, I acknowledge that I have read and agreed to{' '}
                        <span className='text-mainBlue hover:underline cursor-pointer'>
                            Terms & Conditions
                        </span>
                        .
                    </label>
                </div>

                {/* Buttons */}
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                    <button
                        onClick={handleDelete}
                        className={`w-full sm:w-auto text-white rounded-md py-3 px-6 font-semibold transition-all duration-300 ${agreed
                                ? 'bg-red-500 hover:bg-red-600'
                                : 'bg-red-300 cursor-not-allowed'
                            }`}
                        disabled={!agreed}
                    >
                        Delete Account
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteProfile
