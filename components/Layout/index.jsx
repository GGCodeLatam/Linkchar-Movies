import React from 'react'
import Navbar from '../Navbar'

const Layout = ({ children }) => {
    return (
        <div className='h-screen w-screen'>
        <Navbar />
            <div className='h-5/6 grid grid-cols-4 grid-rows-3 gap-2'>
                {children}
            </div>
        </div>
    )
}

export default Layout