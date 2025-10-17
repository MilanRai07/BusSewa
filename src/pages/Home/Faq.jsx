import React, { useState } from 'react'
import { AnimatePresence,motion } from 'framer-motion'
import { FAQData } from '../../localData/FAQData'

const Faq = () => {
     const [selectedQuestion, setSelectedQuestion] = useState(null) 

    const toggleQuestion = (index) => {
        setSelectedQuestion(prev => (prev === index ? null : index))
    }
  return (
    <section>
              <h1 className='font-bold text-[20px] max-md:text-[18px] max-sm:text-base tracking-wide mb-8 max-[800px]:mb-7'>
                FAQs related to Bus Tickets Booking
              </h1>
 <div className='space-y-6'>
                {FAQData.map((item, index) => {
                    const isOpen = selectedQuestion === index
                    return (
                        <div
                            key={index}
                            className='w-full shadow-[0px_0px_10px_2px_rgba(0,0,0,0.05)] p-6 max-[464px]:p-4 rounded-[10px] flex flex-col transition-all duration-300'
                        >
                            <div className='flex justify-between items-center cursor-pointer' onClick={() => toggleQuestion(index)}>
                                <h1 className='text-sm max-sm:text-sm font-semibold text-black/80'>
                                    {item.question}
                                </h1>
                                <span className='text-[22px] max-sm:text-base font-bold text-chocolate transition-transform duration-300'>
                                    {isOpen ? '−' : '+'}
                                </span>
                            </div>

                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.p
                                        className='text-[13px] max-sm:text-xs mt-4 max-sm:mt-2 text-justify leading-5 sm:leading-[22px] tracking-[0.01em] text-black/70'
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        {item.answer}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>
                    )
                })}
            </div>
    </section>
  )
}

export default Faq
