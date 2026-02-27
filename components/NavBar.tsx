import { UserButton } from '@clerk/nextjs'
import React from 'react'

function NavBar() {
    return (
        <div className='flex justify-between p-5 border-b shadow-lg'>
            <div className=''>
                <img src="/logo.png" alt=""  height={30} width={30}/>
            </div>
            <div className='hidden md:flex justify-between gap-5 items-center'>
                <div className='pr-3 hover:text-gray-400 rounded transition-all '>Home</div>
                <div className='pr-3 hover:text-gray-400 rounded transition-all '>History</div>
                <div className='pr-3 hover:text-gray-400 rounded transition-all '>Help</div>
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    )
}

export default NavBar
