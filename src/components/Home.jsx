// Home.js
import React from 'react';
import logo from './elite.jpg'; // Replace with your actual logo path
import CometBackground from './CometBackground'; // Import the CometBackground component
import './Home.css'; // Ensure to import your styles

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col relative">
            <CometBackground /> {/* Add comet background component */}
            {/* Section 1 */}
            <div className="flex flex-col items-center justify-center py-20">
                <h1 className="text-6xl font-bold animate-fall">Team Elite Into the Action</h1>
                <img 
                    src={logo} 
                    alt="Team Elite Logo" 
                    className="logo w-60 my-8 animate-contraction" 
                />
            </div>
            <hr className="border-t border-gray-700" />

            {/* Section 2: Motto */}
            <div className="flex flex-col items-center justify-center py-20 bg-metallic mx-4 section-3d">
                <div className="section-3d-content">
                    <h2 className="text-4xl font-semibold animate-shine">Our MOTO</h2>
                    <p className="text-lg text-center max-w-xl mt-4 italic">
                        "Transforming Ideas into Reality with Cutting-Edge Software Solutions."
                    </p>
                </div>
            </div>
            <hr className="border-t border-gray-700" />

            {/* Section 3: Vision and Future Plans */}
            <div className="flex flex-col items-center justify-center py-20 bg-metallic mx-4 section-3d">
                <div className="section-3d-content">
                    <h2 className="text-4xl font-semibold">Vision & Future Plans</h2>
                    <p className="text-lg text-center max-w-xl mt-4">
                        Our vision is to be the leading provider of innovative software solutions that empower businesses and individuals to achieve their goals efficiently and effectively.
                    </p>
                    <ul className="list-disc list-inside mt-4 text-lg">
                        <li>Expand our services to include AI and machine learning solutions.</li>
                        <li>Enhance user experience through continuous feedback and improvements.</li>
                        <li>Build a strong community of satisfied clients and partners.</li>
                    </ul>
                </div>
            </div>
            <hr className="border-t border-gray-700" />

            {/* Footer Section */}
            <footer className="bg-gray-800 text-center p-4">
                <p>© 2024 Team Elite. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
