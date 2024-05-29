import { FaHome } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { IoLogOutSharp } from "react-icons/io5";
import {Link} from "react-router-dom";

import "./Components.css";

export default function LeftSideBar() {
  return (
    <div className="w-[25%]">

      <div>
        <div className="logo ml-3">
          <img
            width={"40px"}
            src="https://seeklogo.com/images/T/twitter-x-logo-0339F999CF-seeklogo.com.png?v=638264860180000000"
            alt="twitter-logo"
          />
        </div>

        <div className="my-4">
          <Link to="/home" className="flex items-center my-2 px-4 py-2 hover:bg-gray-100 hover:cursor-pointer rounded-full ">
            <div className="">
              <FaHome size="24px" />
            </div>
            <h1 className="font-bold text-lg ml-2">Home</h1>
          </Link>

          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-100 hover:cursor-pointer rounded-full ">
            <div className="">
              <FaHashtag size="24px" />
            </div>
            <h1 className="font-bold text-lg ml-2">Explore</h1>
          </div>

          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-100 hover:cursor-pointer rounded-full ">
            <div className="">
              <IoMdNotifications size="24px" />
            </div>
            <h1 className="font-bold text-lg ml-2">Notification</h1>
          </div>

          <Link to="/profile" className="flex items-center my-2 px-4 py-2 hover:bg-gray-100 hover:cursor-pointer rounded-full ">
            <div className="">
              <FaUserCircle size="24px" />
            </div>
            <h1 className="font-bold text-lg ml-2">Profile</h1>
          </Link>

          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-100 hover:cursor-pointer rounded-full ">
            <div className="">
              <FaBookmark size="24px" />
            </div>
            <h1 className="font-bold text-lg ml-2">Bookmarks</h1>
          </div>

          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full ">
            <div className="">
              <IoLogOutSharp size="24px" />
            </div>
            <h1 className="font-bold text-lg ml-2">Logout</h1>
          </div>

          <button className="px-4 py-2 border-none text-md bg-[#1D9BF0] w-full rounded-full text-white font-bold">Post</button>
        </div>
      </div>
    </div>
  );
}
