import React from 'react'
// import { useContactUsMutation } from '../../services/ContactApi'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'

const ContactForm = () => {
    // const [ContactUs, { isLoading }] = useContactUsMutation();

    const ContactSchema = Yup.object().shape({
        name: Yup.string().required('First name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        phoneNumber: Yup.string().required('Contact number is required'),
        subject: Yup.string().required('Subject is required'),
        message: Yup.string()
            .min(10, 'Message must be at least 10 characters')
            .required('Message is required'),
    })

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        console.log(values)
        // try {
        //     await ContactUs(values).unwrap();
        //     toast.success('Your message has been sent successfully')
        //     setSubmitting(false);
        //     resetForm();
        // } catch (error) {
        //     console.log(error)
        //     toast.error('unable to send message. please try later')
        // } finally {
        //     setSubmitting(false)
        // }
    }


    return (
        <div className='rounded-xl flex justify-self-center flex-col gap-7 lg:flex-row items-stretch w-full  min-h-[400px]'>
            {/* Form section */}
            <div className='w-full'>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        phoneNumber: '',
                        subject: '',
                        message: '',
                    }}
                    validationSchema={ContactSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting, setFieldValue, values }) => (
                        <Form className='w-full'>
                            <div className='w-full mb-8 me-8 lg:me-0 md:me-8'>
                                <label htmlFor='name' className='block text-[16px] font-semibold text-black/70 mb-1'>
                                    Name
                                </label>
                                <Field
                                    name='name'
                                    aria-label='Name'
                                    className='w-full border border-gray-300 rounded p-3'
                                />
                                <ErrorMessage
                                    name='name'
                                    component='div'
                                    className='text-red-500 text-sm'
                                />
                            </div>

                            <div className='flex flex-col md:flex-row gap-3 mb-3 me-8 lg:me-0 md:me-8 w-full'>

                                <div className='w-full md:w-3/4 mb-5 lg:mb-5 md:mb-3 sm:mb-2'>
                                    <label htmlFor='email' className='block text-[16px] font-semibold text-black/70 mb-1'>
                                        Email Address
                                    </label>
                                    <Field
                                        type='email'
                                        name='email'
                                        aria-label='Email'
                                        className='w-full border border-gray-300 rounded p-3'
                                    />
                                    <ErrorMessage
                                        name='email'
                                        component='div'
                                        className='text-red-500 text-sm'
                                    />
                                </div>
                                <div className='w-full md:w-3/4  lg:mb-5 md:mb-3 mb-2'>
                                    <label htmlFor='phone' className='block text-[16px] max-sm:text-sm font-semibold text-black/70 mb-1'>
                                        Phone Number
                                    </label>
                                    <Field
                                        name='phoneNumber'
                                        aria-label='Phone'
                                        className='w-full border border-gray-300 rounded p-3'
                                    />
                                    <ErrorMessage
                                        name='phoneNumber'
                                        component='div'
                                        className='text-red-500 text-sm'
                                    />
                                </div>
                            </div>

                            <div className='w-full mb-8 me-8 lg:me-0 md:me-8'>
                                <label htmlFor='subject' className='block text-[16px] font-semibold text-black/70 mb-1'>
                                    Subject
                                </label>
                                <Field
                                    name='subject'
                                    aria-label='Subject'
                                    className='w-full border border-gray-300 rounded p-3'
                                />
                                <ErrorMessage
                                    name='subject'
                                    component='div'
                                    className='text-red-500 text-sm'
                                />
                            </div>

                            <div className='mb-3 me-8 lg:me-0 md:me-8 w-full'>
                                <label htmlFor='message' className='block text-[16px] font-semibold text-black/70 mb-1'>
                                    Your Messsage
                                </label>
                                <Field
                                    as='textarea'
                                    name='message'
                                    rows='4'
                                    aria-label='Message'
                                    className='w-full border border-gray-300 rounded p-3 resize-none'
                                />
                                <ErrorMessage
                                    name='message'
                                    component='div'
                                    className='text-red-500 text-sm'
                                />
                            </div>

                            <button
                                type='submit'
                                disabled={isSubmitting}
                                className='bg-mainBlue text-white px-4 py-2 rounded w-[50%] md:w-auto md:min-w-[25%] sm:w-[25%] mb-3 hover:bg-mainBlueHover transition-colors cursor-pointer'
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default ContactForm
