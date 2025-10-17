import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
// import * as Yup from 'yup'

const EditProfile = () => {

    // const validationSchema = Yup.object({
    //     fullName: Yup.string()
    //         .required('Full name is required'),
    //     email: Yup.string()
    //         .email('Invalid email address')
    //         .required('Email is required'),
    //     phone: Yup.string()
    //         .matches(/^[0-9]+$/, 'Must be only digits')
    //         .min(10, 'Must be at least 10 digits')
    //         .required('Phone number is required'),
    //     location: Yup.string()
    //         .required('Location is required')
    // });

    const initialValues = {
        fullName: 'Milan Rai',
        email: 'example@gmail.com',
        phone: '98523234234',
        location: 'Kathmandu'
    };

    const handleSubmit = (values) => {
        console.log('Updated Profile:', values);
    };

    return (
        <>
            <div className='max-w-[1070px] flex flex-col items-center mx-auto gap-2 mb-14 max-[800px]:mb-7'>
                <h1 className='font-bold text-[25px] max-[909px]:text-[20px] max-sm:text-[18px] text-mainBlue'>Edit Profile</h1>
            </div>

            <Formik
                initialValues={initialValues}
                // validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className='space-y-8'>
                        {/* Full Name */}
                        <div>
                            <p className='text-xs font-medium mb-2'>Full Name</p>
                            <Field
                                type='text'
                                name='fullName'
                                className='text-sm font-medium w-full border border-[#D9D9D9] p-3 rounded-[4px] focus:outline-none focus:border-mainBlue'
                            />
                            <ErrorMessage name='fullName' component='div' className='text-red-500 text-xs mt-1' />
                        </div>

                        {/* Email */}
                        <div>
                            <p className='text-xs font-medium mb-2'>Email Address</p>
                            <Field
                                type='email'
                                name='email'
                                className='text-sm font-medium w-full border border-[#D9D9D9] p-3 rounded-[4px] focus:outline-none focus:border-mainBlue'
                            />
                            <ErrorMessage name='email' component='div' className='text-red-500 text-xs mt-1' />
                        </div>

                        {/* Phone */}
                        <div>
                            <p className='text-xs font-medium mb-2'>Phone Number</p>
                            <Field
                                type='text'
                                name='phone'
                                className='text-sm font-medium w-full border border-[#D9D9D9] p-3 rounded-[4px] focus:outline-none focus:border-mainBlue'
                            />
                            <ErrorMessage name='phone' component='div' className='text-red-500 text-xs mt-1' />
                        </div>

                        {/* Location */}
                        <div>
                            <p className='text-xs font-medium mb-2'>Location</p>
                            <Field
                                type='text'
                                name='location'
                                className='text-sm font-medium w-full border border-[#D9D9D9] p-3 rounded-[4px] focus:outline-none focus:border-mainBlue'
                            />
                            <ErrorMessage name='location' component='div' className='text-red-500 text-xs mt-1' />
                        </div>

                        {/* Submit Button */}
                        <button
                            type='submit'
                            disabled={isSubmitting}
                            className='text-white rounded-[5px] py-3 px-4 text-[17px] font-bold bg-mainBlue hover:bg-mainBlueHover transition-all duration-300'
                        >
                            {isSubmitting ? 'Updating...' : 'Update Profile'}
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default EditProfile
