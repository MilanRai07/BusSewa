import React from 'react'
import { ReactComponent as Upcoming } from '../../assets/svg/bookingSvg/upcoming.svg'
import { ReactComponent as Completed } from '../../assets/svg/bookingSvg/completed.svg'
import { ReactComponent as Cancelled } from '../../assets/svg//bookingSvg/cancelled.svg'
import { ReactComponent as Destination } from '../../assets/svg/bookingSvg/destination.svg'
import { ReactComponent as Calendar } from '../../assets/svg/bookingSvg/calendar.svg'
import { ReactComponent as Clock } from '../../assets/svg/bookingSvg/clock.svg'
import { ReactComponent as Download } from '../../assets/svg/bookingSvg/download.svg'
import { ReactComponent as People } from '../../assets/svg/bookingSvg/people.svg'

const BookHistoryCard = ({ item }) => {
   const handleDownload = async (fileUrl, fileName) => {
  try {
    const response = await fetch(fileUrl, { mode: 'cors' });
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName || 'ticket.pdf');
    document.body.appendChild(link);
    link.click();

    link.remove();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error downloading file:', error);
  }
};

    return (
        <div className='rounded-[12px] w-[955px] max-[1159px]:w-full shadow-[0px_0px_10px_2px_rgba(0,0,0,0.1)] h-auto p-8 space-y-9'>
            <div className='w-full flex justify-between items-center max-[490px]:flex-col-reverse max-[490px]:gap-3'>
                <div className='max-[490px]:text-center'>
                    <h1 className='font-bold text-[20px] max-sm:text-[18px]'>{item.title}</h1>
                    <p className='font-medium text-sm max-sm:text-xs text-[#00000099] mt-1'>PNR: {item.PNR}</p>
                </div>
                <div className={`py-3 px-6 max-sm:px-4 max-sm:py-2 rounded-[80px] ${item.status == 'Upcoming' ? 'bg-[#FF980026]' : item.status == 'completed' ? 'bg-[#50C87833]' : 'bg-[#C6282826]'}
                                        flex items-center gap-3
                                        `}>
                    {
                        item.status == 'upcoming' ?
                            <Upcoming className='w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px]' /> : item.status == 'completed' ?
                                <Completed className='w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px]' /> :
                                <Cancelled className='w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px]' />
                    }
                    <p className={`font-semibold text-sm max-sm:text-xs
                        ${item.status == 'upcoming' ? 'text-[#FF9800]' : item.status == 'completed' ?
                            'text-[#00A36C]' : 'text-[#C62828]'}
                        '
                        `}>{item.status}</p>
                </div>
            </div>

            {/* details */}
            <div className='space-y-4 py-5 border-t-[0.5px] border-b-[0.5px] text-[15px] max-sm:text-[13px] text-[#000000E5] border-[#00000033]'>
                <div className='flex justify-between items-center max-[490px]:flex-col max-[490px]:items-start max-[490px]:gap-2 '>
                    <div className='flex items-center gap-1 '>
                        <Destination className='mr-1' />
                        <p> {item.from}</p>
                        <p>{'→'}</p>
                        <p> {item.to}</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <Calendar className='mr-1' />
                        <p>{item.date}</p>
                    </div>
                </div>
                <div className='flex justify-between items-center max-[490px]:flex-col max-[490px]:items-start max-[490px]:gap-2'>

                    <div className='flex items-center gap-1'>
                        <Clock className='mr-1' />
                        <p> {item.start}</p>
                        <p>{'-'}</p>
                        <p> {item.end}</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <People className='mr-1' />
                        {
                            item?.seats.map((item, index) => {
                                return (
                                    <p key={index} className='ml-1 inline'>
                                        {item}{index !== item.length - 1 && ','}
                                    </p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            {/* total */}
            <div className='flex justify-between items-center'>
                <p className='font-semibold text-base max-sm:text-sm text-black/80'>Total Amount:</p>
                <p className='font-bold text-mainBlue text-[22px] max-sm:text-[18px]'>Rs. {item.total}</p>
            </div>

            {/* buttons */}
            {
                item?.status == 'upcoming' && (
                    <div className='grid grid-cols-2 gap-6 font-bold text-base max-sm:text-sm max-[490px]:grid-cols-1'>
                        <button className='flex justify-center items-center gap-3 bg-[#1565C00D] hover:bg-[#1565C033] transition-all duration-300 py-5 max-[490px]:py-3 rounded-[10px]'
                            onClick={() => handleDownload(item.file, `${item.title}.pdf`)}
                        >
                            <Download className='w-[22px] h-[22px] max-sm:w-[18px] max-sm:h-[18px]' />
                            <p className='text-mainBlue'>Download Pdf</p>
                        </button>
                        <button className='flex justify-center items-center gap-3 bg-[#C6282826] hover:bg-[#C6282840] transition-all duration-300 py-5 max-[490px]:py-3 rounded-[10px]'>
                            <Cancelled className='w-[22px] h-[22px] max-sm:w-[18px] max-sm:h-[18px]' />
                            <p className='text-[#C62828]'>Cancel</p>
                        </button>
                    </div>
                )
            }

            {
                item?.status == 'completed' && (
                    <button 
                      onClick={() => handleDownload(item.file, `${item.title}.pdf`)}
                    className='w-full flex justify-center items-center gap-3 bg-[#1565C00D] hover:bg-[#1565C033] transition-all duration-300 py-5 max-[490px]:py-3  rounded-[10px]'>
                        <Download className='w-[22px] h-[22px] max-sm:w-[18px] max-sm:h-[18px]' />
                        <p className='text-mainBlue max-sm:text-sm font-bold'>Download Pdf</p>
                    </button>
                )
            }

        </div>
    )
}

export default BookHistoryCard
