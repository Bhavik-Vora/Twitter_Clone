import React from 'react';
import Avatar from 'react-avatar';
import { CiSearch } from "react-icons/ci";


export default function RightSideBar() {
  return (
    <div className='w-[28%] ml-3'>

      <div className='flex items-center p-2 bg-gray-100 rounded-full outline-none w-full'>
        <CiSearch size="20px" />
        <input type="text" placeholder='Search' className='outline-none px-2 bg-transparent' />
      </div>

      <div className="p-4 bg-gray-100 rounded-2xl m-4 ">
        <h1>Who to Follow</h1>
        <div className="flex items-center justify-between  my-3 ">
          <div className='flex'>
            <div>
              <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDxBVZWDN_XFigRvkezeDpe_GgodQ2MhpvuKbe6T4vTg&s" size="40" round={true} />
            </div>
            <div className=' ml-2 '>
              <h1 className='font-bold'>Bhavik</h1>
              <p className='text-sm'>@Bhavik</p>
            </div>
            <div>
          <button className='mx-12 px-4 py-1 bg-black text-white rounded-full'>Profile</button>

            </div>
          </div>
        </div>
        <div className="flex items-center justify-between  my-3 ">
          <div className='flex'>
            <div>
              <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDxBVZWDN_XFigRvkezeDpe_GgodQ2MhpvuKbe6T4vTg&s" size="40" round={true} />
            </div>
            <div className=' ml-2 '>
              <h1 className='font-bold'>Bhavik</h1>
              <p className='text-sm'>@Bhavik</p>
            </div>
            <div>
          <button className='mx-12 px-4 py-1 bg-black text-white rounded-full'>Profile</button>

            </div>
          </div>
        </div>
        <div className="flex items-center justify-between  my-3 ">
          <div className='flex'>
            <div>
              <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDxBVZWDN_XFigRvkezeDpe_GgodQ2MhpvuKbe6T4vTg&s" size="40" round={true} />
            </div>
            <div className=' ml-2 '>
              <h1 className='font-bold'>Bhavik</h1>
              <p className='text-sm'>@Bhavik</p>
            </div>
            <div>
          <button className='mx-12 px-4 py-1 bg-black text-white rounded-full'>Profile</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}