import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the updated CSS

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar-metallic fixed w-full z-50">
            <div className="navbar-container">
                {/* Hamburger for small screens */}
                <div className="flex md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>

                {/* Centered nav items for larger screens */}
                <div className="hidden md:flex space-x-8 items-center mx-auto">
                    <Link to="/" className="navbar-text hover:text-gray-300 transition-all duration-500">Home</Link>
                    <Link to="/projects" className="navbar-text hover:text-gray-300 transition-all duration-500">Projects</Link>
                    <Link to="/members" className="navbar-text hover:text-gray-300 transition-all duration-500">Members</Link>
                    <Link to="/contact" className="navbar-text hover:text-gray-300 transition-all duration-500">Contact Us</Link>
                </div>
            </div>

            {/* Mobile menu (shown when isOpen is true) */}
            <div className={`md:hidden navbar-mobile-metallic ${isOpen ? 'block' : 'hidden'}`}>
                <div className="space-y-2 py-4 px-4">
                    <Link to="/" className="block text-white text-lg hover:text-gray-300 transition-all duration-300">Home</Link>
                    <Link to="/projects" className="block text-white text-lg hover:text-gray-300 transition-all duration-300">Projects</Link>
                    <Link to="/members" className="block text-white text-lg hover:text-gray-300 transition-all duration-300">Members</Link>
                    <Link to="/contact" className="block text-white text-lg hover:text-gray-300 transition-all duration-300">Contact Us</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
