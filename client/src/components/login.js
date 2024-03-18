import React from "react";

export default function Login() {
    const handleLogin = (event) => {
        event.preventDefault();
       
    }

    const handleRegister = (event) => {
        event.preventDefault();
        // Add your register logic here
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-[#0D1717] to-[#234141]">
            <div className="bg-white bg-opacity-10 rounded p-10">
                <h1 className="text-4xl text-center text-[#9FD6D6] font-extrabold mb-8">Login</h1>
                <form onSubmit={handleLogin}>
                    <input className="w-full p-2 mb-6 rounded text-black" type="text" placeholder="Username" />
                    <input className="w-full p-2 mb-6 rounded text-black" type="password" placeholder="Password" />
                    <button className="w-full p-2 mb-6 rounded bg-[#55D3D3] text-white" type="submit">Login</button>
                </form>
                <button className="w-full p-2 mb-6 rounded bg-[#2B7C7D] text-white" onClick={handleRegister}>Register</button>
            </div>
        </div>
    );
}