import React, { useState } from 'react';
import { doctors } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

function Doctor() {
  const navigate = useNavigate();
  const [selectedSpeciality, setSelectedSpeciality] = useState('');

  const handleSpecialityClick = (speciality) => {
    setSelectedSpeciality(speciality);
  };

  // Filter doctors based on the selected specialty
  const filteredDoctors = selectedSpeciality
    ? doctors.filter((doctor) => doctor.speciality === selectedSpeciality)
    : doctors;

  return (
    <div className="flex justify-between mt-5">
      {/* Left Box for Text */}
      <div className="flex flex-col gap-5 w-1/3">
        <p className='text-gray-600'>Browse through the doctors specialist.</p>
        <div>
          <div className='flex text-sm text-gray-600 flex-col gap-4'>
            <p onClick={() => handleSpecialityClick('General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer`}>General physician</p>
            <p onClick={() => handleSpecialityClick('Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer`}>Gynecologist</p>
            <p onClick={() => handleSpecialityClick('Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer`}>Dermatologist</p>
            <p onClick={() => handleSpecialityClick('Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer`}>Pediatricians</p>
            <p onClick={() => handleSpecialityClick('Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer`}>Neurologist</p>
            <p onClick={() => handleSpecialityClick('Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer`}>Gastroenterologist</p>
          </div>
        </div>
      </div>

      {/* Right Side for Cards */}
      <div className='w-full grid grid-cols-auto gap-4 px-4'>  
        {filteredDoctors.map((item, index) => (
          <div
            onClick={() => navigate(`/appointments/${item._id}`)}
            className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
            key={index}
          >
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
    </div>
  );
}

export default Doctor;
 