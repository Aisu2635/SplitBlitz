import React from "react";

export default function Login() {
    const handleLogin = (event) => {
        event.preventDefault();
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-[#0D1717] to-[#234141]">
            <div className=" bg-opacity-10 rounded-xl p-10 bg-gradient-to-b from-[#ffffff34] to-[#ffffff10]">
                <h1 className="text-4xl text-center text-[#9FD6D6] font-extrabold mb-8">Login</h1>
                <form onSubmit={handleLogin}>
                    <input className="w-full p-2 mb-6 rounded text-black" type="text" placeholder="Username" />
                    <input className="w-full p-2 mb-6 rounded text-black" type="password" placeholder="Password" />
                    <button className="w-full p-2 mb-6 rounded bg-[#55D3D3] text-white font-semibold hover:bg-[#bbe5e5] hover:text-black" type="submit">Login</button>
                </form>
                <p className="text-center text-[#ffffff]">Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Register here</a>.</p>
                <div className="flex items-center justify-center px-1 py-1">
                    <button class="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                        <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
                        <span>Login with Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
}