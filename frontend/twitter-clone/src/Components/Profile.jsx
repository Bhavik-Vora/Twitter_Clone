import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Avatar from 'react-avatar';

export default function Profile() {

    return (
        <div className="w-[52%] border border-gray-200 ml-2 ">
            <div>
                <div className="flex items-center py-2">
                    <Link to="/home" className="p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer">
                        <IoMdArrowRoundBack size="24px" />
                    </Link>
                    <div className="ml-2">
                        <h1 className="font-bold text-lg">Bhavik</h1>
                        <p className="text-gray-500 text-sm">10 Posts</p>
                    </div>
                </div>
                <img src="https://digital-dividend.se/wp-content/uploads/2023/06/MERN-Stack-Banner.jpg" alt="cover-profile" />
                <div className="absolute top-40 border border-white-200 rounded-full ml-2">
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDxBVZWDN_XFigRvkezeDpe_GgodQ2MhpvuKbe6T4vTg&s" size="120" round={true} />
                </div>
                <div className="text-right m-4">
                    <button className="px-4 py-1 hover:bg-gray-200 rounded-full border border-gray-400   ">Edit Profile</button>
                </div>
                <div className="m-4">
                    <h1 className="font-bold text-xl">Bhavik</h1>
                    <p>@vorabhavik</p>
                </div>
                <div className="m-4 text-sm">
                    <p>Emerging Full-Stack Developer | Proficient in Express, Node.js, MySQL, MongoDB, React.js, Redux | Knowledgeable in Git, Bootstrap, Tailwind CSS| 🚀</p>
                </div>
            </div>
        </div>

    )
}