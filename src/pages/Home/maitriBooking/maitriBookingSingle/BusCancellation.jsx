import React from 'react'

const BusCancellation = () => {
    const data = [
        { time: 'Up to 12hrs before departure', refund: '90%' },
        { time: '5hrs before departure', refund: '75%' },
        { time: 'Less than 3hrs before departure', refund: '0%' },
    ];

    return (
        <div className='w-full shadow-[0px_0px_10px_2px_rgba(0,0,0,0.1)] bg-white p-5 rounded-[10px]'>
            <h2 className='text-base font-semibold mb-3'>Cancellation Policy</h2>
            <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 rounded-lg shadow-sm border-collapse">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="text-left px-6 py-3 font-semibold text-gray-700 border border-gray-300">
                                Time window
                            </th>
                            <th className="text-left px-6 py-3 font-semibold text-gray-700 border border-gray-300">
                                Refund
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, i) => (
                            <tr key={i} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-3 text-gray-800 border border-gray-300">
                                    {row.time}
                                </td>
                                <td className="px-6 py-3 font-semibold text-gray-900 border border-gray-300">
                                    {row.refund}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BusCancellation
