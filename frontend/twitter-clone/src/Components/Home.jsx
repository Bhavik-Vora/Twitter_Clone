
import Feed from './Feed'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'
import {Outlet} from "react-router-dom";

export default function Home(){
    return(
        <div className='flex justify-between w-[80%] mx-auto mt-1'>
         
        <LeftSideBar/>
        <Outlet/>
        <RightSideBar/>
       
        </div>
    )
}