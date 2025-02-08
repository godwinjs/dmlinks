import { useState } from "react";

interface BasicProps {
    userName: string;
    profession: string;
    aboutMe: string;
    whatsapp?: string;
    instagram?: string;
  }
  
  export default function Basic( { user }: { user: BasicProps } ) {
    
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const { userName, profession, aboutMe, whatsapp, instagram  } = user;
  
    const toggleDarkMode = (): void => {
      setIsDarkMode(!isDarkMode);
    };
  
    return (
      <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-milk text-gray-800'}`}>
        {/* Header */}
        <header className="relative h-60 flex items-center justify-center">
          {/* Gradient Background */}
          <div
            className={`absolute inset-0 bg-gradient-to-b ${
              isDarkMode ? 'from-gray-800 to-gray-900' : 'from-light-green to-milk'
            }`}
            style={{ height: '60%' }}
          ></div>
  
          {/* Rounded Image */}
          <div className="relative z-10">
            <img
              src="https://via.placeholder.com/100" // Replace with your image URL
              alt="Profile"
              className="w-24 h-24 rounded-full shadow-lg border-4 border-white"
            />
          </div>
  
          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className={`absolute top-4 right-4 p-2 rounded-full ${
              isDarkMode ? 'bg-gray-700 text-white' : 'bg-light-brown text-gray-800'
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
          <a href={whatsapp} className="text-2xl hover:text-light-brown">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href={instagram} className="text-2xl hover:text-light-brown">
            <i className="fab fa-instagram"></i>
          </a>
        </footer>
      </div>
    );
  }