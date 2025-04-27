import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from '../components/Topbar';
import Sidebar from '../components/Sidebar';

function MainLayout()
{
    return (
        <div className="flex flex-col h-screen">
            <TopBar />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">
                    <Outlet /> {/* Render the nested page here */}
                </main>
            </div>
        </div>
    );
}

export default MainLayout;