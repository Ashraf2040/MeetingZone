'use client'

import Link from "next/link"
import { useState } from "react"

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="md:hidden">
    <div className='flex flex-col space-y-[4.5px] cursor-pointer' onClick={() => setIsOpen(prev=> !prev)}>
     <div className={`w-6 h-1 bg-blue-600 rounded-sm ${isOpen ? 'rotate-45' : ''} origin-left ease-in-out duration-500`} />
     <div className={`w-6 h-1 bg-blue-600 rounded-sm ${isOpen ? 'opacity-0' : ''} ease-in-out duration-500 `} />
     <div className={`w-6 h-1 bg-blue-600 rounded-sm ${isOpen ? '-rotate-45' : ''} origin-left ease-in-out duration-500`} />
     
    
    </div>

    {isOpen && 
    <div className='absolute top-24 left-0 flex flex-col  justify-center gap-8 w-full bg-white items-center h-[calc(100vh-96px)] rounded-b-md shadow-md font-medium text-xl z-10 '>
        <Link href="/">Home</Link>
        <Link href="/">Friends</Link>
        <Link href="/">Groups</Link>
        <Link href="/">Stories</Link>
        <Link href="/">Login</Link>
        </div>}
    </div>
  )
}

export default MobileMenu
