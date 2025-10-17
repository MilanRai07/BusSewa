import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Eye, EyeOff } from 'lucide-react'

const ChangePassword = () => {
    const validationSchema = Yup.object({
        currentPassword: Yup.string()
            .required('Current password is required'),
        newPassword: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                'Password must contain one uppercase, one lowercase, one number, and one special character'
            )
            .required('Password is required'),

        confirmPassword: Yup.string()
            .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
            .required('Confirm password is required'),
    });

    const initialValues = {
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    };

    const handleSubmit = (values, { resetForm }) => {
        console.log('Password Updated:', values);
        resetForm();
    };

    const [showPassword, setShowPassword] = useState({
        current: false,
        new: false,
        confirm: false,
    });

    const toggleVisibility = (field) => {
        setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    return (
        <>
            <div className='max-w-[1070px] flex flex-col items-center mx-auto gap-2 mb-14 max-[800px]:mb-7'>
                <h1 className='font-bold text-[25px] max-[909px]:text-[20px] max-sm:text-[18px] text-mainBlue'>
                    Change Password
                </h1>
            </div>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className='space-y-8'>

                        {/* Current Password */}
                        <div>
                            <p className='text-xs font-medium mb-2'>Current Password</p>
                            <div className='relative'>
                                <Field
                                    type={showPassword.current ? 'text' : 'password'}
                                    name='currentPassword'
                                    className='text-sm font-medium w-full border border-[#D9D9D9] p-3 rounded-[4px] focus:outline-none focus:border-mainBlue pr-10'
                                    placeholder='Enter your current password'
                                />
                                <div
                                    onClick={() => toggleVisibility('current')}
                                    className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500'
                                >
                                    {showPassword.current ? <EyeOff size={18} /> : <Eye size={18} />}
                                </div>
                            </div>
                            <ErrorMessage name='currentPassword' component='div' className='text-red-500 text-xs mt-1' />
                        </div>

                        {/* New Password */}
                        <div>
                            <p className='text-xs font-medium mb-2'>New Password</p>
                            <div className='relative'>
                                <Field
                                    type={showPassword.new ? 'text' : 'password'}
                                    name='newPassword'
                                    className='text-sm font-medium w-full border border-[#D9D9D9] p-3 rounded-[4px] focus:outline-none focus:border-mainBlue pr-10'
                                    placeholder='Enter your new password'
                                />
                                <div
                                    onClick={() => toggleVisibility('new')}
                                    className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500'
                                >
                                    {showPassword.new ? <EyeOff size={18} /> : <Eye size={18} />}
                                </div>
                            </div>
                            <ErrorMessage name='newPassword' component='div' className='text-red-500 text-xs mt-1' />
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <p className='text-xs font-medium mb-2'>Confirm Password</p>
                            <div className='relative'>
                                <Field
                                    type={showPassword.confirm ? 'text' : 'password'}
                                    name='confirmPassword'
                                    className='text-sm font-medium w-full border border-[#D9D9D9] p-3 rounded-[4px] focus:outline-none focus:border-mainBlue pr-10'
                                    placeholder='Confirm your new password'
                                />
                                <div
                                    onClick={() => toggleVisibility('confirm')}
                                    className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500'
                                >
                                    {showPassword.confirm ? <EyeOff size={18} /> : <Eye size={18} />}
                                </div>
                            </div>
                            <ErrorMessage name='confirmPassword' component='div' className='text-red-500 text-xs mt-1' />
                        </div>

                        {/* Submit Button */}
                        <button
                            type='submit'
                            disabled={isSubmitting}
                            className='text-white rounded-[5px] py-3 px-4 text-[17px] font-bold bg-mainBlue hover:bg-mainBlueHover transition-all duration-300'
                        >
                            {isSubmitting ? 'Updating...' : 'Update Password'}
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default ChangePassword;
