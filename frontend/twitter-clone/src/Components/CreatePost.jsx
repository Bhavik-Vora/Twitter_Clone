import Avatar from 'react-avatar';
import { FaImage } from "react-icons/fa6";

export default function CreatePost() {


    return (
        <div className="w-[100%]">
            <div>
                <div className="upperdiv flex items-center justify-evenly border-b gray-200">
                    <div className="cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3">
                        <h1 className="font-semibold text-grey-600 text-lg">For You</h1>
                    </div>
                    <div className="cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3">
                        <h1 className="font-semibold text-grey-600 text-lg">Following</h1>
                    </div>
                </div>

                <div>
                    <div className="flex items-center p-4">
                        <div className="">
                            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDxBVZWDN_XFigRvkezeDpe_GgodQ2MhpvuKbe6T4vTg&s" size="40" round={true} />
                        </div>
                        <input type="text" name="" id="" placeholder='What is Happening' className='ml-2 w-full border-none outline-none text-lg' />
                    </div>
                    <div className="flex items-center justify-between p-4  border-b border-gray-300">
                        <div>
                            <FaImage size="20px" />
                        </div>
                        <button className='bg-[#1D9BF0] px-4 py-1 text-lg text-white text-right border-none rounded-full '>Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}