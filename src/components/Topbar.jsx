import React from 'react';
import { Link } from 'react-router-dom';

function TopBar()
{
    return (

        <header className="h-16 bg-gradient-to-r from-blue-500 via-purple-300 to-pink-200 text-shadow-white flex items-center px-4">
            <h2 className="text-right"> <Link to="/" className="cursor-pointer whitespace-nowrap hover:underline hover:text-yellow-300 hover:drop-shadow-md transition duration-300">Raymond M. Tsang | Software Engineer</Link></h2>
            <nav className="flex w-full">
                <ul className="flex space-x-8 ml-auto">

                    <li> <Link to="/skills" className="cursor-pointer hover:underline hover:text-yellow-300 hover:drop-shadow-md transition duration-300">Skills</Link></li>
                    <li> <Link to="/Work-Experiences" className="cursor-pointer hover:underline hover:text-yellow-300 hover:drop-shadow-md transition duration-300">Experiences</Link></li>
                    <li> <Link to="/Projects" className="cursor-pointer hover:underline hover:text-yellow-300 hover:drop-shadow-md transition duration-300">Projects</Link></li>
                    <li> <Link to="Resume" className="cursor-pointer hover:underline hover:text-yellow-300 hover:drop-shadow-md transition duration-300">Resume</Link></li>
                    <li> <Link to="/ContactMe" className="cursor-pointer hover:underline hover:text-yellow-300 hover:drop-shadow-md transition duration-300">Contact</Link></li>

                </ul>
            </nav>

        </header>
    );
}

export default TopBar;