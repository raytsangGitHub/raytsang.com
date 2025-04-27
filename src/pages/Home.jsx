import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

export default function Home()
{
    return (

        <Routes>
            <Route path="*" element={<MainLayout />} />
        </Routes>

    );
}

