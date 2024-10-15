/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Appointment = () => {

  const { docId } = useParams()
  const { doctors } = useContext(AppContext)
  const daysOfWeak = ['SUN', "MON", "TUE", "WED", "THU", "FRI", "SAT"]
  const [docInfo, setDocinfo] = useState(null)
  const [slotIndex , setSlotIndex] = useState(0)
  const [docSlot, setDocSlot] = useState([])

  const fetchInfo = async () => {
    const docInf = doctors.find(doc => doc._id === docId)
    setDocinfo(docInf)

  }

  const getTime = async () => {
    setDocSlot([])
    let today = new Date()
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today)
      currentDate.setDate(currentDate.getDate() + i)

      let endDate = new Date(today)
      endDate.setDate(endDate.getDate() + i)
      endDate.setHours(21, 0, 0, 0)

      if (today.getDate() === currentDate.getDate()) {
        if (currentDate.getHours() >= 10) {
          currentDate.setHours(currentDate.getHours() + 1)
        }
        else {
          currentDate.setHours(10)
        }
        currentDate.setMinutes(currentDate.getMinutes() >= 30 ? 30 : 0)
      }
      else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)

      }

      let timeSlots = []
      while (currentDate < endDate) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        timeSlots.push({
          time: formattedTime,
          dateTime: new Date(currentDate)
        })
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }
      setDocSlot(prev => ([...prev, timeSlots]))
    }
  }


  useEffect(() => {
    fetchInfo()
  }, [doctors, docId])

  useEffect(() => {
    getTime()
  }, [])
  useEffect(() => {
    console.log(docSlot)
  }, [docSlot])

  if (!docInfo) {
    return <div>Loading...</div>  // You can replace this with a loading spinner or message
  }
  return (
    <div>{
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt='docimg' />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 mx-2 sm:mx-0 py-4  mt-[-80px] sm:mt-0'>
          {/* Doctor Informations */}
          <p className='flex items-center  font-medium text-gray-900 text-2xl gap-2'>{docInfo.name} <img className="w-5" src={assets.verified_icon} /></p>

          <div className='flex items-center  font-medium text-gray-900 text-md gap-2'>
            <p >{docInfo.degree} - {docInfo.speciality}</p>
            <button className='text-xs border py-0.5 px-2 border-gray-500 rounded-full'>{docInfo.experience}</button>
          </div>
          <div>
            <p className='flex items-center py-3 font-medium text-gray-900 text-lg gap-2'>About <img src={assets.info_icon} /></p>
            <p className='text-xl'>{docInfo.about}</p>
          </div>
          <p className=' py-1 text-gray-600'>Appointment Fee : <span className='font-medium text-lg text-blue-800'>${docInfo.fees}</span></p>
        </div>
      </div>
    }
      <div className='sm:ml-72 sm:pl-4 mt-1 text-gray-500'>
        <p className='font-medium text-2xl py-3 text-white  w-full rounded-full text-center bg-primary'>Booking Slots</p>
        <div className='flex items-center  w-full mt-1 gap-14 overflow-x-auto'>
          {
            docSlot.length && docSlot.map((item, index) => (
              <div onClick={() => (setSlotIndex(index))} className={`text-center py-5 min-w-16 rounded-full cursor-pointer  ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`} key={index}>
                <p>{item[0] && daysOfWeak[item[0].dateTime.getDay()]}</p>
                <p>{item[0] && item[0].dateTime.getDate()}</p>
              </div>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Appointment