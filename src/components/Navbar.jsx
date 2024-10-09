import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-transparent fixed w-full z-50  bg-gray-300 ">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex w-full justify-between h-16 items-center">
                    {/* Hamburger for small screens */}
                    <div className="flex md:hidden">
                        <button onClick={toggleMenu} className="text-black focus:outline-none">
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>

                    {/* Centered nav items for larger screens */}
                    <div className="hidden md:flex space-x-8 items-center mx-auto">
                        <a href="#home" className="text-black text-lg hover:text-gray-600 transition-all duration-500 transform hover:scale-110 hover:">Home</a>
                        <a href="#projects" className="text-black text-lg hover:text-gray-600 transition-all duration-500 transform hover:scale-110">Projects</a>
                        <a href="#members" className="text-black text-lg hover:text-gray-600 transition-all duration-500 transform hover:scale-110">Members</a>
                        <a href="#contact" className="text-black text-lg hover:text-gray-600 transition-all duration-500 transform hover:scale-110">Contact Us</a>
                    </div>
                </div>
            </div>

            {/* Mobile menu (shown when isOpen is true) */}
            <div className={`md:hidden  bg-gray-300 ${isOpen ? 'block' : 'hidden'}`}>
                <div className="space-y-2 py-4 px-4">
                    <a href="#home" className="block text-black text-lg hover:text-gray-600 transition-all duration-300">Home</a>
                    <a href="#projects" className="block text-black text-lg hover:text-gray-600 transition-all duration-300">Projects</a>
                    <a href="#members" className="block text-black text-lg hover:text-gray-600 transition-all duration-300">Members</a>
                    <a href="#contact" className="block text-black text-lg hover:text-gray-600 transition-all duration-300">Contact Us</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
