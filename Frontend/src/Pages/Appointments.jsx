import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../Context/App.Context';
import { assets } from '../assets/assets';
 
function Appointments() {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');


  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([])

    //getting current date 

    let today = new Date();
    for (let i = 0; i < 7; i++) {
      //geting date with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)
      //setting and time of the date with  index 
      let endTime = new Date();
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21, 0, 0, 0)

      // setting hours

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)

      }
      else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)

      }

      let timeSlots = []

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        //add slot to array

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime
        })

        //increment current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }

      setDocSlots(prev => ([...prev, timeSlots]))
    }
  }

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots)
  }, [docSlots])

  return (
    <>
      {docInfo && (
        <div className='flex flex-col sm:flex-row gap-4 p-4'>
          {/* --------- Doctors Details --------  */}
          <div className='flex items-start'>
            <img src={docInfo.image} alt={docInfo.name} className='w-32 h-32 rounded-lg mr-4 bg-primary' />
            {/* Doctors Name, Degree, and Experience */}
            <div className='flex-1 border border-gray-300 rounded-lg p-6 bg-white'>
              <div className='flex items-center justify-between mb-2'>
                <p className='text-2xl font-medium text-gray-900'>{docInfo.name}</p>
                <img src={assets.verified_icon} alt="Verified" className='w-5' />
              </div>
              <div className='flex items-center gap-2 text-sm text-gray-600 mb-2'>
                <p>{docInfo.degree} - {docInfo.speciality}</p>
                <button className='py-0.5 px-2 border border-gray-300 rounded-full text-xs'>{docInfo.experience}</button>
              </div>
              {/* ------- Doctors About ------ */}
              <div>
                <p className='flex items-center gap-1 text-sm font-medium text-gray-900'>
                  About <img src={assets.info_icon} alt="Info" className='inline' />
                </p>
                <p className='text-gray-600 mt-1 text-sm'>{docInfo.about}</p>
              </div>
              <p className='text-gray-500 font-medium mt-4'> Appointment Fess :  <span className='text-gray-600'> {currencySymbol} {docInfo.fees}</span></p>
            </div>
          </div>

          
        </div>
       
      )}
      {/* ------ booking slots ------- */}
      <div className='sm:ml-72 sm:pl-4 nt-4 font-medium text-gray-700'>
            <p>Booking slots</p>
            <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
              {
                docSlots.length && docSlots.map((item, index) => (
                  <div  onClick={() => setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-600'}`} key={index}>
                    <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                    <p>{item[0] && item[0].datetime.getDate()}</p>
                  </div>
                ))
              }
            </div>

            <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4 '>
              {
                docSlots.length && docSlots[slotIndex].map((item,index)=>(
                 <p onClick={() => setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`} key={index}>
                      {item.time.toLowerCase()}
                 </p>
                ))
              }
            </div>
           
            <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6 '>Book an Appointment</button>
            {/* Listing Related Doctors  */}
            
          </div>
    </>
  );
}

export default Appointments;
