import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

export default function Home()
{
    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
            <div className="max-w-3xl text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                    Hi, I'm Raymond M. Tsang
                </h1>
                <p className="text-lg text-gray-700 mb-4">
                    A seasoned Software Development Engineer with deep expertise in C#, .NET, DevOps, and scalable system architecture. I specialize in building data-driven web apps, designing robust services, and streamlining CI/CD workflows.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    With a passion for problem-solving and a track record of full-cycle project leadership, I bring clarity, precision, and a collaborative mindset to every team I join.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                    Let's build something powerful together.
                </p>
                <a
                    href="#projects"
                    className="inline-block bg-blue-600 text-white text-sm font-semibold px-6 py-3 rounded-2xl shadow-md hover:bg-blue-700 transition duration-300"
                >
                    Explore My Projects
                </a>
            </div>
        </div>

    );
}

