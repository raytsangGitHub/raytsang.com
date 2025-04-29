import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar()
{
    return (
        <aside className="w-64 bg-gray-800 text-white p-2 space-y">
            <Link to="/" className="block hover:bg-gray-700 p-2 rounded">Home</Link>
            <Link to="/profile" className="block hover:bg-gray-700 p-2 rounded">Profile</Link>
            <Link to="/settings" className="block hover:bg-gray-700 p-2 rounded">Settings</Link>
        </aside>
    );
}

export default Sidebar;