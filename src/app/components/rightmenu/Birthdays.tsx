import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Birthdays = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
         <div className='flex items-center justify-between font-medium'>
        <span className='text-gray-500'>Birthdays</span>
       

      </div>
      {/* User */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
            <Image src="https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={40} height={40} alt="" className='rounded-full w-10 h-10 object-cover'/>
            <span className='font-medium'>Masa Ashraf</span>
        </div>
        <div className='flex gap-3'>
        <button className='bg-blue-500 text-white text-xs px-2 py-1 rounded-md'>Celebrate</button>
        </div>

      </div>
      {/* Upcoming */}
      <div className='p-4 bg-slate-100 rounded-lg flex items-center gap-4'>

<Image src="/gift.png" width={42} height={42} alt="" />
<Link href="/" className='flex flex-col gap-1 text-sm'>
<span className='text-gray-700 font-semibold'>Upcoming Birthdays</span>
<span className='text-gray-500 text-xs '>See others 16 have upcoming birthdays</span>
</Link>
      </div>
    </div>
  )
}

export default Birthdays
