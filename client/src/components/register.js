import React, { useState } from 'react';

export default function Register() {
    const [name, setName] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    // const [upiId, setUpiId] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);

    const handleRegister = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('username', username);
        formData.append('email', email);
        formData.append('phoneNumber', phoneNumber);
        // formData.append('upiId', upiId);
        formData.append('profilePicture', profilePicture);

        const response = await fetch('/api/register', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            // Registration successful
            console.log('Registration successful');
        } else {
            // Registration failed
            console.log('Registration failed');
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-[#0D1717] to-[#234141]">
            <div className="bg-opacity-10 rounded-xl p-10 bg-gradient-to-b from-[#ffffff34] to-[#ffffff10] max-w-md w-full">
                <h1 className="text-4xl text-center text-[#9FD6D6] font-extrabold mb-8">Register</h1>
                <form onSubmit={handleRegister}>
                    <input className="w-full p-2 mb-6 rounded text-black" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <input className="w-full p-2 mb-6 rounded text-black" type="text" placeholder="UserName" value={username} onChange={(e) => setUserName(e.target.value)} required />
                    <input className="w-full p-2 mb-6 rounded text-black" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input className="w-full p-2 mb-6 rounded text-black" type="tel" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                    {/* <input className="w-full p-2 mb-6 rounded text-black" type="text" placeholder="UPI ID (optional)" value={upiId} onChange={(e) => setUpiId(e.target.value)} /> */}
                    <p className="text-sm text-gray-400 mb-2">Profile Picture</p>
                    <label for="uploadFile1"
                        class="bg-[#0000003f] text-center rounded w-full sm:w-[360px] min-h-[160px] py-4 px-4 flex flex-col items-center justify-center cursor-pointer border-2 border-[#55D3D3] mx-auto font-[sans-serif] m-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 mb-6 fill-gray-400" viewBox="0 0 24 24">
                            <path
                                d="M22 13a1 1 0 0 0-1 1v4.213A2.79 2.79 0 0 1 18.213 21H5.787A2.79 2.79 0 0 1 3 18.213V14a1 1 0 0 0-2 0v4.213A4.792 4.792 0 0 0 5.787 23h12.426A4.792 4.792 0 0 0 23 18.213V14a1 1 0 0 0-1-1Z"
                                data-original="#000000" />
                            <path
                                d="M6.707 8.707 11 4.414V17a1 1 0 0 0 2 0V4.414l4.293 4.293a1 1 0 0 0 1.414-1.414l-6-6a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 1.414 1.414Z"
                                data-original="#000000" />
                        </svg>
                        <p class="text-gray-400 font-semibold text-sm">Drag & Drop or <span class="text-[#55D3D3]">Choose file</span> to
                            upload</p>
                        <input type="file" id='uploadFile1' class="hidden" onChange={(e) => setProfilePicture(e.target.files[0])} required />
                        <p class="text-xs text-gray-400 mt-2">PNG, JPG SVG, WEBP, and GIF are Allowed.</p>
                    </label>
                    <button className="w-full p-2 mb-6 rounded bg-[#55D3D3] text-white font-semibold hover:bg-[#bbe5e5] hover:text-black" type="submit">Register</button>
                </form>
                <p className="text-center text-white">Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login here</a>.</p>
            </div>
        </div>
    );
}

