import Appointments from '@/components/appointments'
import App from 'next/app'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1 className='my-2'>Randevular</h1>
      <Appointments />
    </div>
  )
}

export default page