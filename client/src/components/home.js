import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaDiscord, FaTwitter } from "react-icons/fa";

export default function Home() {
    return (
        <>
            <div className="bg-gradient-to-b from-[#0D1717] to-[#234141] h-screen flex flex-col justify-center items-center">
                <div className="absolute top-0 left-0 m-4 ">
                <img src="/splitB.png" alt="Logo" width="100" height="100"/>
                </div>
                <h1 className="text-7xl text-center text-[#55D3D3] font-bold mb-5">Split-Blitz</h1>
                <p className="text-2xl text-center text-white mb-10">The easiest way to split bills with friends and family</p>
                <Link to="/login">
                    <button className="bg-[#55D3D3] hover:bg-[#3cb371] text-white font-bold py-2 px-4 rounded">
                        Get Started
                    </button>
                </Link>
            </div>
            <footer className="bg-gradient-to-r from-[#0D1717] to-[#0D1717] text-white text-center p-4 mt-auto">
                <p>Developed by Om Hinge</p>
                <div className="flex justify-center space-x-4">
                    <a href="https://github.com/Aisu2635" className="hover:text-[#55D3D3]"><FaGithub /></a>
                    <a href="http://discordapp.com/users/549286481705828363" className="hover:text-[#55D3D3]"><FaDiscord /></a>
                    <a href="https://twitter.com/IamOm_ace" className="hover:text-[#55D3D3]"><FaTwitter /></a>
                </div>
            </footer>
        </>
    );
}