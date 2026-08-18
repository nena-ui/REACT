import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className='flex w-full'>
      <div className='h-screen bg-blue-950 text-white w-1/6 p-10 space-y-6 flex flex-col gap-6'>
        <Link to={"/admin"} className='hover:bg-white hover:text-black'>Dashboard</Link>
        <Link to="blog" className='hover:bg-white hover:text-black'>Blog</Link>
        <Link to="product" className='hover:bg-white hover:text-black'>Product</Link>
      </div>
      <div className='w-4/6'>
        <Outlet/>
      </div>
    </div>
  )
}

export default DashboardLayout
