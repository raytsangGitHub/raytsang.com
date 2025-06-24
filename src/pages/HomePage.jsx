import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

export default function Home()
{
    const buttonmapper = [
        { id: 'rest-api', name: 'Rest API Project', url: 'https://raytsanggithub.github.io/SchoolRegistration/', },

        { id: 'Cryptocurrency', name: 'Cryptocurrency Project' },
        { id: 'ai-ml', name: 'Machine Learning Project' },
        { id: 'gpu-cuda', name: 'Parallel Programming - CUDA' },

    ];
    return (
        <div className="min-h-screen bg-white flex justify-center px-2 py-3">
            <div className="max-w-3xl text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                    Hi, I'm Raymond M. Tsang
                </h1>
                <p className="text-lg text-gray-700 mb-4 flex text-justify">
                    An experienced software developer skilled in the full software development life cycle (SDLC), including solution architecture, system design, and object-oriented design. Adept at leveraging design patterns and SOLID principles to build scalable, extensible, maintainable, and modular software.
                </p>
                <p className="text-lg text-gray-700 mb-4 text-justify" >Skilled in frontend development with HTML, CSS, JavaScript, and React or Blazor, and backend development using ASP.NET Core Web API, Entity Framework and SQL Server or PostgreSQL. Experienced in designing and implementing scalable, secure Restful API and web applications.</p>
                <p className="text-lg text-gray-700 mb-4 text-justify" >Specialized in high-performance parallel computing using the CUDA SDK, and applying AI solutions using platforms such as Microsoft AI and OpenAI for intelligent, real-world applications.</p>
                <p className="text-lg text-gray-700 mb-4 text-justify">Proficient in cloud deployment, containerization with Docker, and CI/CD automation using GitHub Actions.</p>
                <p className="text-lg text-gray-700 mb-4 text-justify" >Proven track record as a lead developer and technical architect, championing clean architecture and driving high-performing engineering teams. </p>
                <p className="text-lg text-gray-700 mb-4 text-justify">
                    With a passion for problem-solving and a track record of full-cycle project leadership, I bring clarity, precision, and a collaborative mindset to every team I join.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                    Let's build something powerful together.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Link //link is for internal routing within the SPA
                        to="/projects"
                        className="inline-block bg-blue-600 text-white text-sm font-semibold px-6 py-3 rounded-2xl shadow-md hover:bg-blue-700 transition duration-300"
                    >
                        Explore My Projects
                    </Link>

                </div><br></br>

                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {buttonmapper.map((mapper) =>
                        mapper.url ? (
                            <a
                                key={mapper.id}
                                href={mapper.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-blue-600 text-white text-sm font-semibold px-6 p-3 rounded-2xl shadow-md hover:bg-blue-700 transition duration-300"
                            >
                                {mapper.name}
                            </a>
                        ) : (
                            <Link
                                key={mapper.id}
                                to={`/under-construction?project=${mapper.id}`}
                                className="block bg-gray-400 text-white text-sm font-semibold px-6 p-3 rounded-2xl shadow-md hover:bg-gray-500 transition duration-300"
                            >
                                {mapper.name}
                            </Link>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}


