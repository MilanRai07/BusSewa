import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ReactComponent as Lock } from '../../../assets/svg/lock.svg';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const navigate=useNavigate();
  // Validation schema using Yup
  const validationSchema = Yup.object({
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  // Handle form submission
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Reset Password Data:', values);
    navigate('/login')
   
  };  
  return (
    <div className="flex justify-center items-center min-h-screen px-3">
      <div className="flex flex-col justify-center items-center px-6 py-10 shadow-[0px_0px_10px_2px_rgba(0,0,0,0.1)] rounded-[10px] w-[450px] max-sm:w-full max-sm:mx-3">
        
        {/* Lock icon */}
        <div className="w-[120px] aspect-square bg-mainBlue rounded-full grid place-items-center max-sm:w-[90px]">
          <Lock className="w-16 h-16 fill-white max-sm:w-12 max-sm:h-12" />
        </div>

        {/* Heading */}
        <h1 className="text-mainBlue text-[20px] font-bold mt-3 mb-2 max-sm:text-[18px] text-center">
          Reset Password
        </h1>

        <p className="text-[13px] text-black/60 text-center mb-8 w-[70%] max-sm:w-[90%] leading-6 max-sm:leading-5">
          Enter your new password and confirm it to reset your account.
        </p>

        {/* Formik Form */}
        <Formik
          initialValues={{ password: '', confirmPassword: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="w-[408px] max-sm:w-full">
              
              {/* Password field */}
              <div className="mb-4">
                <Field
                  type="password"
                  name="password"
                  placeholder="New Password"
                  className="w-full border border-gray-300 rounded p-4 text-sm focus:outline-none focus:ring-2 focus:ring-mainBlue"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Confirm Password field */}
              <div className="mb-4">
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="w-full border border-gray-300 rounded p-4 text-sm focus:outline-none focus:ring-2 focus:ring-mainBlue"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`mt-4 text-white px-5 py-3 rounded w-full transition-colors ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-mainBlue hover:bg-mainBlueHover'
                }`}
              >
                {isSubmitting ? 'Resetting...' : 'Reset Password'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ResetPassword;
