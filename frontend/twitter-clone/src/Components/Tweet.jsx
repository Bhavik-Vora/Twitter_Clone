import Avatar from 'react-avatar';
import { FaComment } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { IoIosBookmark } from "react-icons/io";

export default function Tweet() {

    return (
        <div className='border border-b gray-200'>
            <div>
                <div className="flex p-4">
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDxBVZWDN_XFigRvkezeDpe_GgodQ2MhpvuKbe6T4vTg&s" size="40" round={true} />

                    <div className='ml-2 w-full'>
                        <div className="flex items-center ">
                            <h1 className='font-bold'>Bhavik</h1>
                            <h1 className='text-gray-500 text-sm ml-1'>@Bhavik 1m.</h1>
                        </div>
                        <div className="">
                            <p>Hello Developers I am working on Twitter Project</p>
                        </div>

                        <div className='flex justify-between my-3'>
                            <div className="flex items-center">
                                <div className="p-2 hover:bg-green-200 cursor-pointer rounded-full">
                                    <FaComment size="20px" />
                                </div>
                                <p className=''>0</p>
                            </div>

                            <div className="flex items-center   ">
                                <div className="p-2 hover:bg-pink-200 cursor-pointer rounded-full">
                                    <FaHeart size="24px" />
                                </div>
                                <p className=''>0</p>
                            </div>

                            <div className="flex items-center   ">
                                <div className="p-2 hover:bg-yellow-200 cursor-pointer rounded-full">
                                    <IoIosBookmark size="24px" />
                                </div>
                                <p className=''>0</p>
                            </div>
 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}