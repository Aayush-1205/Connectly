'use client'
import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';

const ProfileDetails = () => {

    const [request, setRequest] = useState(false);
    const [activeTab, setActiveTab] = useState("timeline");
    const [profileData, setProfileData] = useState(null);
    const token = Cookies.get("token");
    console.log(token);
    async function fetchProfileData() {
        const apiURL = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${apiURL}/api/profile/me`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": `${token}`,
            },
        });

        const responseData = await response.json();
        console.log(responseData);
        if (response.status === 200) {
            setProfileData(responseData);
        }
    }

    const [avatarUrl, setAvatarUrl] = useState('');
    const [uploadedFile, setUploadedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');
    const [showRemoveConfirm, setShowRemoveConfirm] = useState(false);
    const fileInputRef = useRef(null);
    const [interestIn, setInterestIn] = useState(false);
    const [lookingFor, setLookingFor] = useState(false);
    const [isCountry, setIsCountry] = useState(false);

    const handleInterestToggle = () => {
        setInterestIn(!interestIn);
    };
    const handleLookingToggle = () => {
        setLookingFor(!lookingFor);
    };
    const handleCountryToggle = () => {
        setIsCountry(!isCountry);
    };

    const handleAvatarChange = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setUploadedFile(file);

        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewUrl(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleAvatarUpload = () => {
        // TO DO: implement API call to upload avatar to server
        console.log('Uploading avatar...');
        // For now, let's just update the state with the new URL
        setAvatarUrl(previewUrl);
        setUploadedFile(null);
    };

    const handleRemoveClick = () => {
        setShowRemoveConfirm(true);
    };

    const handleRemoveConfirm = () => {
        // TO DO: implement remove profile logic here
        console.log('Profile removed!');
        setAvatarUrl('');
        setShowRemoveConfirm(false);
    };

    const handleRemoveCancel = () => {
        setShowRemoveConfirm(false);
    };

    const countries = [
        "United States",
        "China",
        "Japan",
        "United Kingdom",
        "India",
        "France",
        "Germany",
        "Italy",
        "Brazil",
        "Canada",
        "Australia",
        "South Korea",
        "Spain",
        "Indonesia",
        "Turkey",
        "Poland",
        "Russia",
        "Mexico",
        "Thailand",
        "Vietnam"
    ];

    const [availableInterests, setAvailableInterests] = useState([
        { icon: "📷", name: "Photography" },
        { icon: "🎨", name: "Art" },
        { icon: "✂️", name: "Crafts" },
        { icon: "💃", name: "Dancing" },
        { icon: "✏️", name: "Design" },
        { icon: "💄", name: "Make-up" },
        { icon: "🎥", name: "Making videos" },
        { icon: "🎤", name: "Singing" },
        { icon: "✍️", name: "Writing" },
        { icon: "🏃", name: "Athletics" },
        { icon: "🏸", name: "Badminton" },
        { icon: "⚾️", name: "Baseball" },
        { icon: "🏀", name: "Basketball" },
        { icon: "🧗", name: "Bouldering" },
        { icon: "🎳", name: "Bowling" },
        { icon: "🥊", name: "Boxing" },
        { icon: "🚣", name: "Crew" },
        { icon: "🏏", name: "Cricket" },
        { icon: "🚲", name: "Cycling" },
        { icon: "🏈", name: "Football" },
        { icon: "🏎️", name: "Go karting" },
        { icon: "⛳️", name: "Golf" },
        { icon: "🤸", name: "Gym" },
        { icon: "🤸‍♀️", name: "Gymnastics" },
        { icon: "🤾", name: "Handball" },
        { icon: "🏒", name: "Hockey" },
        { icon: "🐎", name: "Horse riding" },
        { icon: "🥋", name: "Martial arts" },
        { icon: "🧘", name: "Meditation" },
        { icon: "🏐", name: "Netball" },
        { icon: "🧘‍♀️", name: "Pilates" },
        { icon: "🏓", name: "Ping pong" },
        { icon: "🏉", name: "Rugby" },
        { icon: "🏃‍♀️", name: "Running" },
        { icon: "🛹", name: "Skateboarding" },
        { icon: "⛷️", name: "Skiing" },
    ]);

    useEffect(() => {
        fetchProfileData()
    })

    console.log(profileData);

    return (
        <div className="flex flex-col p-5 gap-2">
            <h2 className="text-xl font-semibold mb-4">Profile Details</h2>
            <div className="flex items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mr-4">
                    <Image src={avatarUrl} width={500} height={500} alt="Profile Avatar" className='object-cover w-full h-full' />
                    
                </div>
                <div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />
                    <div className='flex items-center gap-5'>
                        <div className='flex flex-col gap-3'>
                            <button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                onClick={handleAvatarChange}
                            >
                                Change Avatar
                            </button>
                            <button
                                className="hover:border-red-700 hover:text-red-700 border text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
                                onClick={handleRemoveClick}
                            >
                                Remove
                            </button>
                        </div>
                        {uploadedFile && (
                            <div className="mt-2">
                                <Image src={previewUrl} width={500} height={500} alt="Uploaded Avatar" className="w-24 h-24 rounded-full object-cover" />
                                <button
                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    onClick={handleAvatarUpload}
                                >
                                    Upload Avatar
                                </button>
                            </div>
                        )}
                    </div>
                    {showRemoveConfirm && (
                        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-50">
                            <div className="bg-white p-4 rounded">
                                <h3 className="text-lg font-bold mb-2">Remove Profile?</h3>
                                <p className="text-gray-600">Are you sure you want to remove your profile?</p>
                                <div className="flex justify-end">
                                    <button
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                                        onClick={handleRemoveConfirm}
                                    >
                                        Yes, Remove
                                    </button>
                                    <button
                                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        onClick={handleRemoveCancel}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <p className='text-[#656565] text-sm mt-2 my-5'>PNG or JPG no bigger than 800px wide and tall.</p>

            <div className='flex flex-col gap-5'>
                <div>
                    <h1 className='text-xl font-semibold mb-2'>Personal Details</h1>
                    <p className='text-[#656565] text-sm '>Edit your personal information and address.</p>
                </div>


                <form onSubmit={(e) => e.preventDefault()}>
                    <div className='grid grid-cols-2 gap-5'>
                        <div className='flex flex-col gap-1'>
                            <label for="real-name" className='text-sm font-medium text-black'>Real Name</label>
                            <input type="text" id='real-name' placeholder='Write Real Name' className='placeholder:text-xs placeholder:text-black px-2 py-1 rounded-md' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label for="display-name" className='text-sm font-medium text-black'>Display Name</label>
                            <input type="text" id='display-name' placeholder='Write Display Name' className='placeholder:text-xs placeholder:text-black px-2 py-1 rounded-md' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label for="occupation" className='text-sm font-medium text-black'>Occupation</label>
                            <input type="text" id='occupation' placeholder='Write Occupation' className='placeholder:text-xs placeholder:text-black px-2 py-1 rounded-md' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label for="organization" className='text-sm font-medium text-black'>Organization/Company/College/University</label>
                            <input type="text" id='organization' placeholder='Write Organization/Company/College/University' className='placeholder:text-xs placeholder:text-black px-2 py-1 rounded-md' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label for="email" className='text-sm font-medium text-black'>Email</label>
                            <input type="text" id='email' placeholder='Write Email' className='placeholder:text-xs placeholder:text-black px-2 py-1 rounded-md' />
                        </div>
                        <div className='flex flex-col gap-1 relative'>
                            <label for="country" className='text-sm font-medium text-black'>Country</label>
                            <button
                                id='country'
                                onClick={handleCountryToggle}
                                className="bg-white text-xs px-4 py-2 rounded-md flex items-center justify-between gap-2"
                            >
                                Country
                                <svg
                                    className={`w-4 h-4 transition-transform duration-300 ${isCountry ? "rotate-180" : ""
                                        }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                            {isCountry && (
                                <div className="absolute top-16 left-0 rounded-md shadow-lg h-32 overflow-y-auto bg-white w-48 z-50">
                                    <ul className="py-2 text-sm">
                                        {countries.map((c, i) =>
                                            <li key={i} className="px-4 py-2 hover:bg-gray-100">
                                                <Link
                                                    href={"/explore"}
                                                    className="text-gray-800  hover:text-gray-900"
                                                >
                                                    {c}
                                                </Link>
                                            </li>
                                        )}

                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label for="address" className='text-sm font-medium text-black'>Address</label>
                            <input type="text" id='address' placeholder='Write Address' className='placeholder:text-xs placeholder:text-black px-2 py-1 rounded-md' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label for="zip-code" className='text-sm font-medium text-black'>Zip Code</label>
                            <input type="number" id='zip-code' placeholder='Write Zip Code' className='placeholder:text-xs placeholder:text-black px-2 py-1 rounded-md' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label for="phone" className='text-sm font-medium text-black'>Phone Number</label>
                            <input type="number" id='phone' placeholder='Write Phone Number' className='placeholder:text-xs placeholder:text-black px-2 py-1 rounded-md' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label for="birthdate" className='text-sm font-medium text-black'>Birthdate</label>
                            <input type="date" id='birthdate' placeholder='Write Birthdate' className='placeholder:text-xs placeholder:text-black px-2 py-1 rounded-md' />
                        </div>
                        <div className='flex flex-col gap-1 relative'>
                            <label for="interest" className='text-sm font-medium text-black'>Interest</label>
                            <button
                                id='interest'
                                onClick={handleInterestToggle}
                                className="bg-white text-xs px-4 py-2 rounded-md flex items-center justify-between gap-2"
                            >
                                Choose
                                <svg
                                    className={`w-4 h-4 transition-transform duration-300 ${interestIn ? "rotate-180" : ""
                                        }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                            {interestIn && (
                                <div className="absolute top-16 left-0 rounded-md shadow-lg h-32 overflow-y-auto bg-white w-48 z-50">
                                    <ul className="py-2 text-sm">
                                        {availableInterests.map((inter, index) =>
                                            <li key={index} className="px-4 py-2 hover:bg-gray-100">
                                                <Link
                                                    href={"/explore"}
                                                    className="text-gray-800 hover:text-gray-900 flex items-center gap-2"
                                                >
                                                    {inter.icon}{inter.name}
                                                </Link>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className='flex flex-col gap-1 relative'>
                            <label for="looking-for" className='text-sm font-medium text-black'>Looking For</label>
                            <button
                                id='looking-for'
                                onClick={handleLookingToggle}
                                className="bg-white text-xs px-4 py-2 rounded-md flex items-center justify-between gap-2"
                            >
                                Choose
                                <svg
                                    className={`w-4 h-4 transition-transform duration-300 ${lookingFor ? "rotate-180" : ""
                                        }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                            {lookingFor && (
                                <div className="absolute top-16 left-0 rounded-md shadow-lg bg-white w-48 z-50">
                                    <ul className="py-2 text-sm">
                                        <li className="px-4 py-2 hover:bg-gray-100">
                                            <Link
                                                href={"/explore"}
                                                className="text-gray-800  hover:text-gray-900"
                                            >
                                                ♂️ Male
                                            </Link>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-100">
                                            <Link
                                                href={"/explore"}
                                                className="text-gray-800  hover:text-gray-900"
                                            >
                                                ♀️ Female
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='flex flex-col gap-1 relative w-full mt-5'>
                        <label for="about" className='text-sm font-medium text-black'>About(Bio)</label>
                        <textarea id="about" rows={4} className='px-2 py-1 rounded-md' placeholder='Description'></textarea>
                    </div>

                    <button
                        className="bg-red-500 hover:bg-red-700 mt-5 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                        type='submit'
                    >
                        Update Profile
                    </button>
                </form>

            </div>
        </div>
    );
};

export default ProfileDetails;