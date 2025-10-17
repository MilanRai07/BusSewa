import React, { useState, useRef, useEffect } from 'react'
import { ReactComponent as Lock } from '../../../assets/svg/lock.svg'
import { useNavigate } from 'react-router-dom'

const Verification = ({ phone = 'your number' }) => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [otp, setOtp] = useState(['', '', '', ''])
    const inputsRef = useRef([])
    const [timer, setTimer] = useState(30)

    const handleChange = (index, value) => {
        if (/[^0-9]/.test(value)) return // only numbers

        const newOtp = [...otp]
        newOtp[index] = value
        setOtp(newOtp)

        // move focus to next
        if (value && index < 3) inputsRef.current[index + 1]?.focus()
    }

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputsRef.current[index - 1]?.focus()
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const otpValue = otp.join('')
        console.log('OTP entered:', otpValue)
        setIsSubmitting(true)
        navigate('/reset-password')
    }

    // Countdown timer logic
    useEffect(() => {
        if (timer === 0) return

        const interval = setInterval(() => {
            setTimer((prev) => prev - 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [timer])

    const handleResend = () => {
        setTimer(30)
        setOtp(['', '', '', ''])
        inputsRef.current[0]?.focus()
        console.log('Resend code triggered!')
    }

    return (
        <div className="flex justify-center items-center min-h-screen px-3">
            <div className="flex flex-col justify-center items-center px-6 py-10 shadow-[0px_0px_10px_2px_rgba(0,0,0,0.1)] rounded-[10px] w-[450px] max-sm:w-full max-sm:mx-3">
                {/* Lock icon */}
                <div className="w-[120px] aspect-square bg-mainBlue rounded-full grid place-items-center max-sm:w-[90px]">
                    <Lock className="w-16 h-16 fill-white max-sm:w-12 max-sm:h-12" />
                </div>

                {/* Heading */}
                <h1 className="text-mainBlue text-[20px] font-bold mt-3 mb-2 max-sm:text-[18px] text-center">
                    OTP Verification
                </h1>

                {/* Subtext */}
                <p className="text-[13px] text-black/60 text-center mb-8 w-[70%] max-sm:w-[90%] leading-6 max-sm:leading-5">
                    {`Enter the 4-digit code sent to ${phone}`}
                </p>

                {/* OTP Inputs */}
                <form className="w-[290px]" onSubmit={onSubmit}>
                    <div className="flex justify-between mb-6">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                ref={(el) => (inputsRef.current[index] = el)}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                className="w-[60px] h-[60px] border border-gray-300 rounded text-center text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-mainBlue max-sm:w-[50px] max-sm:h-[50px]"
                            />
                        ))}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting || otp.some((val) => val === '')}
                        className={`mt-2 text-white px-5 py-3 rounded w-full transition-colors ${isSubmitting || otp.some((val) => val === '')
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-mainBlue hover:bg-mainBlueHover'
                            }`}
                    >
                        {isSubmitting ? 'Verifying OTP...' : 'Verify OTP'}
                    </button>
                </form>

                {/* Timer or Resend */}
                <div className="mt-4 text-sm text-gray-600">
                    {timer > 0 ? (
                        <>Resend code in <span className="font-semibold">{timer}</span> seconds</>
                    ) : (
                        <button
                            onClick={handleResend}
                            className="text-mainBlue font-semibold hover:underline"
                        >
                            Resend Code
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Verification
