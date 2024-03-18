import React, { useState } from 'react';
import { FaUser, FaPlus, FaSignInAlt, FaSignOutAlt, FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa';

export default function Head() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    }

    return (
        <div>
            <button className="p-2 text-2xl bg-blue-500 text-white" onClick={toggleSidebar}><FaAngleDoubleRight/></button>
            <div className={`fixed top-0 left-0 h-full bg-[#2B7C7D] text-white w-64 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out`}>
                <button className="p-2 text-2xl bg-blue-500 text-white absolute top-0 right-0" onClick={toggleSidebar}><FaAngleDoubleLeft/></button>
                <ul className="mt-10 space-y-6">
                    <li className="flex items-center space-x-2 px-6 py-2 hover:bg-[#55D3D3] cursor-pointer">
                        <FaUser />
                        <span>Profile</span>
                    </li>
                    <li className="flex items-center space-x-2 px-6 py-2 hover:bg-[#55D3D3] cursor-pointer">
                        <FaPlus />
                        <span>Create Party</span>
                    </li>
                    <li className="flex items-center space-x-2 px-6 py-2 hover:bg-[#55D3D3] cursor-pointer">
                        <FaSignInAlt />
                        <span>Join Party</span>
                    </li>
                    <li className="flex items-center space-x-2 px-6 py-2 hover:bg-[#55D3D3] cursor-pointer">
                        <FaSignOutAlt />
                        <span>Log Out</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}