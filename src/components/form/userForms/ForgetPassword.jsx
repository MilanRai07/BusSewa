import React, { useState } from 'react'
import { ReactComponent as Lock } from '../../../assets/svg/lock.svg'
import Verification from './Verification';

const ForgetPassword = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [goOTP, setGOOTP] = useState(false);
  const [phone, setPhone] = useState('');

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(phone)
    setIsSubmitting(true);
    setGOOTP(true);
  }

  if (!goOTP) {
    return (
      <div className="flex justify-center items-center min-h-screen px-3">
        <div className="flex flex-col justify-center items-center px-6 py-10 shadow-[0px_0px_10px_2px_rgba(0,0,0,0.1)] rounded-[10px] w-[450px] max-sm:w-full max-sm:mx-3">
          {/* Lock icon */}
          <div className="w-[120px] aspect-square bg-mainBlue rounded-full grid place-items-center max-sm:w-[90px]">
            <Lock className="w-16 h-16 fill-white max-sm:w-12 max-sm:h-12" />
          </div>

          {/* Heading */}
          <h1 className="text-mainBlue text-[20px] font-bold mt-3 mb-2 max-sm:text-[18px] text-center">
            Forgot Password
          </h1>

          {/* Subtext */}
          <p className="text-[13px] text-black/60 text-center mb-8 w-[70%] max-sm:w-[90%] leading-6 max-sm:leading-5">
            Enter your phone number and we will send you an OTP to reset your password
          </p>

          {/* Form */}
          <form className="w-[408px] max-sm:w-full" onSubmit={onSubmit}>
            <input
              type="tel"
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded p-4 text-sm focus:outline-none focus:ring-2 focus:ring-mainBlue"
            />
            <button
              type="submit"
              disabled={isSubmitting || !phone}
              className={`mt-4 text-white px-5 py-3 rounded w-full transition-colors ${isSubmitting || !phone
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-mainBlue hover:bg-mainBlueHover'
                }`}
            >
              {isSubmitting ? 'Sending OTP...' : 'Send OTP'}
            </button>
          </form>
        </div>
      </div>
    )
  } else {
    return (
      <Verification phone={phone}/>
    )
  }
}

export default ForgetPassword
