import React from 'react';

function TopBar()
{
    return (

        <header className="h-16 bg-gradient-to-r from-blue-500 via-purple-300 to-pink-200 text-shadow-white flex items-center px-4">
            <h1>My Website</h1>
            <nav className="flex w-full">
                <ul className="flex space-x-8 ml-auto">
                    <li className="cursor-pointer hover:underline">Skills</li>
                    <li className="cursor-pointer hover:underline">Work Experiences</li>
                    <li className="cursor-pointer hover:underline">Project</li>
                    <li className="cursor-pointer hover:underline">Resume</li>
                    <li className="cursor-pointer hover:underline">Contact Me</li>
                </ul>
            </nav>

        </header>
    );
}

export default TopBar;