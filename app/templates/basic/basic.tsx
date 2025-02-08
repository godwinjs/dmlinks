'use client'

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface BasicProps {
    userName: string;
    profession: string;
    aboutMe: string;
    socials?: { name: string; url: string, color: string }[];
    image: string | StaticImageData;
    initials?: string;
  }
  
  export default function Basic( { user }: { user: BasicProps } ) {

    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const { userName, profession, aboutMe, socials, image  } = user;
  
    const toggleDarkMode = (): void => {
      setIsDarkMode(!isDarkMode);
    };
  
    return (
      <div className={` absolute min-h-screen max-w-[600px] flex flex-col ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} `}>
        {/* Header */}
        <header className="relative h-60 flex items-center justify-center ">
          {/* Gradient Background */}
          <div
            className={`absolute inset-0 bg-gradient-to-b ${
              isDarkMode ? 'from-gray-800 to-gray-900' : 'from-light-green to-white'
            }`}
            style={{ clipPath: 'ellipse(160% 60% at 50% 0%)' }}
          ></div>
  
          {/* Rounded Image */}
          <div className="relative z-10">
            <Image
              src={image} // Replace with your image URL
              alt="Profile"
              className="w-48 h-48 rounded-full shadow-lg border-4 border-white"
            />
          </div>
  
          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className={`absolute top-4 right-4 p-2 rounded-full ${
              isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'
            }`}
          >
            {isDarkMode ? '🌙' : '☀️'}
          </button>
        </header>
  
        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center p-4 text-center">
          <h1 className="text-3xl font-bold">{userName}</h1>
          <p className="text-xl text-light-brown mt-2">{profession}</p>
          <p className="mt-4 max-w-md">{aboutMe}</p>
        </main>
  
        {/* Social Icons */}
        <footer className="flex justify-center space-x-6 p-6">
              {socials?.map(({ name, url, color }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-${color} hover:text-light-brown`}
              >
                <i className={`fab fa-${name} fa-2x`}></i>
              </a>
            ))}
        </footer>

        <div className="bg-gray-900 text-center cursor-pointer mt-4 text-white"><p>&copy; Copyright BuynariSolutions <span>{new Date().getFullYear() }</span></p></div>
      </div>
    );
  }