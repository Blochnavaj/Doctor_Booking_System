import React, { useContext } from 'react';
 import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/App.Context';

function TopDoctors() {
    const navigate = useNavigate()
    const {doctors} = useContext(AppContext)
    return (
        <div className='flex flex-col gap-4 text-gray-900 items-center my-16 md:mx-10'>
            <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
            <p className='text-sm text-center sm:w-1/3'>Simply browse through our extensive list of trusted doctors.</p>
            <div className='w-full grid grid-cols-2 md:grid-cols-5 gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                {doctors.slice(0, 10).map((item, index) => (
                    <div onClick={() => {navigate(`/appiontments/${item._id}`); scrollTo(0,0)}} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                        <img className='bg-blue-50' src={item.image} alt="" />
                        <div className='p-4'>
                            <div className='flex text-sm text-green-500 items-center text-center gap-2'>
                                <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                                <p>Available</p>
                            </div>
                            <p className='text-gray-900 font-medium text-lg'>{item.name}</p>
                            <p className='text-gray-600 text-sm'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={() => {navigate('/doctor'); scrollTo(0,0)}} className='mt-10 px-12 py-3 bg-blue-50 text-grey-600 rounded-full'>More</button>
        </div>
    );
}

export default TopDoctors;