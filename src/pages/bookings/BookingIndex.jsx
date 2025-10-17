import React from 'react'
import DownloadIndex from '../../components/download/DownloadIndex'
import BookHistoryCard from '../../components/cards/BookHistoryCard'

const bookingData = [
    {
        title: 'Maitri Express',
        PNR: 'MTE235693',
        status: 'upcoming',
        from: 'Kathmandu',
        to: 'Pokhara',
        start: '06:00 AM',
        end: '07:00 PM',
        date: 'sat, Aug 10,2025',
        seats: ['A1','A2'],
        total: '2400',
        file: 'https://res.cloudinary.com/dbfpirpsr/image/upload/v1758609950/bajra_energy_ventures/vrqpkndsqlklmz8lxaaw.pdf'
    },
     {
        title: 'Maitri Express',
        PNR: 'MTE235693',
        status: 'completed',
        from: 'Kathmandu',
        to: 'Pokhara',
        start: '06:00 AM',
        end: '07:00 PM',
        date: 'sat, Aug 10,2025',
        seats: ['A1','A2'],
        total: '2400',
        file: 'https://res.cloudinary.com/dbfpirpsr/image/upload/v1758609950/bajra_energy_ventures/vrqpkndsqlklmz8lxaaw.pdf'
    },
     {
        title: 'Maitri Express',
        PNR: 'MTE235693',
        status: 'cancelled',
        from: 'Kathmandu',
        to: 'Pokhara',
        start: '06:00 AM',
        end: '07:00 PM',
        date: 'sat, Aug 10,2025',
        seats: ['A1','A2'],
        total: '2400',
        file: 'https://res.cloudinary.com/dbfpirpsr/image/upload/v1758609950/bajra_energy_ventures/vrqpkndsqlklmz8lxaaw.pdf'
    }
]
const BookingIndex = () => {
    return (
        <>
            <main className='px-16 max-[800px]:px-10 max-sm:px-8 my-14 max-sm:my-9'>
                <div className='max-w-[1070px] flex flex-col items-center mx-auto gap-3 mb-14 max-[800px]:mb-7'>
                    <h1 className='font-bold text-[25px] max-[909px]:text-[20px] max-sm:text-[18px] text-mainBlue'>Bookings</h1>
                    <p className='text-[13px] leading-[25px] text-[#000000B2] text-center max-sm:leading-[20px] '>
                        Get track of your booking history
                    </p>
                </div>

                {/* booking history */}
                <div className='flex justify-center flex-col gap-11 items-center'>
                    {
                        bookingData.map((item, index) => {
                            return (
                                <BookHistoryCard key={index} item={item} />
                            )
                        })
                    }
                </div>
            </main>
            <DownloadIndex />
        </>
    )
}

export default BookingIndex
