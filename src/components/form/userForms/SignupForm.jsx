import React from 'react'
import Bus from '../../../assets/image/loginBus.webp'
import Flag from '../../../assets/image/nepalIndia.webp'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

const SignupForm = () => {
    const validationSchema = Yup.object().shape({
        password: Yup.string().required('Password is required'),
        phoneNumber: Yup.string().required('Contact number is required'),
    })

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true)
        console.log(values)
        setSubmitting(false)
    }

    return (
        <div className="flex justify-center items-center min-h-screen p-4">
            <div
                className="w-[900px] flex justify-between shadow-[0px_0px_10px_2px_rgba(0,0,0,0.1)] rounded-[10px] overflow-hidden
        max-lg:w-[700px] max-md:w-full max-md:flex-col-reverse"
            >
                {/* Left side */}
                <div
                    className="w-[40%] flex flex-col justify-between items-center bg-[#F0F0F0] p-7
          max-md:w-full max-md:p-6 max-md:h-[250px]"
                >
                    <div>
                        <div className="text-[#C62828] text-[20px] font-bold flex gap-2 items-center max-sm:text-[16px]">
                            <p>नेपाल</p>
                            <img src={Flag} alt="Nepal and India flag" className="w-6 h-6 max-sm:w-5 max-sm:h-5" />
                            <p>भारत मैत्री</p>
                        </div>
                        <p className="text-mainBlue text-[20px] font-bold max-sm:text-[16px] text-center">बस सेवा</p>
                    </div>

                    <div className="w-[200px] aspect-square max-sm:w-[150px]">
                        <img src={Bus} alt="bus" loading="lazy" className="w-full h-full object-contain" />
                    </div>
                </div>

                {/* Right side */}
                <div className="w-[60%] h-auto p-7 max-md:w-full max-md:p-6">
                    <h1 className="text-[22px] font-bold text-black/70 max-sm:text-[18px] text-center max-md:text-center">
                        Create Your Account
                    </h1>
                    <p className='text-[13px] leading-[25px] text-black/60 text-center max-sm:leading-[20px] mb-8'>
                       Your journey, one tap away.
                    </p>

                    <Formik
                        initialValues={{
                            fullName: '',
                            phoneNumber: '',
                            password: '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form className="max-w-[400px] mx-auto w-full">
                                <div className="w-full mb-6">
                                    <label
                                        htmlFor="phoneNumber"
                                        className="block text-sm font-medium text-black/50 mb-1"
                                    >
                                        Phone Number
                                    </label>
                                    <Field
                                        name="phoneNumber"
                                        aria-label="phoneNumber"
                                        className="w-full border border-gray-300 rounded p-3 text-sm"
                                    />
                                    <ErrorMessage
                                        name="phoneNumber"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>

                                <div className="w-full mb-6">
                                    <label
                                        htmlFor="fullName"
                                        className="block text-sm font-medium text-black/50 mb-1"
                                    >
                                        Full Name
                                    </label>
                                    <Field
                                        name="fullName"
                                        aria-label="fullNamer"
                                        className="w-full border border-gray-300 rounded p-3 text-sm"
                                    />
                                    <ErrorMessage
                                        name="fullName"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>

                                <div className="w-full mb-8">
                                    <label htmlFor="password" className="block text-sm font-medium text-black/50 mb-1">
                                        Password
                                    </label>
                                    <Field
                                        name="password"
                                        aria-label="password"
                                        type="password"
                                        className="w-full border border-gray-300 rounded p-3 text-sm"
                                    />
                                    <ErrorMessage
                                        name="password"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>

                                <div className="w-full flex justify-center">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="bg-mainBlue text-white px-5 py-2.5 rounded w-[60%] sm:w-[50%] max-sm:w-full mb-3 hover:bg-mainBlueHover transition-colors"
                                    >
                                        {isSubmitting ? 'Signing up...' : 'Sign Up'}
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default SignupForm
