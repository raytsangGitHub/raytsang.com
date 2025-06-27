import React from 'react';
import { Link } from 'react-router-dom';

function Projects()
{
    const projects = [
        {
            title: 'School Registration System – A RESTful API Application',
            role: 'Full Stack Developer',
            duration: 'April 2025 – Present',
            technologies: 'ASP.NET Core Web API, C#, React, Vite, TailwindCSS, PostgreSQL (Supabase), Docker, GitHub Actions',
            hosting: 'GitHub, Render.com, Fly.io',
            overview: 'A cloud-native, modular school registration system built for scalability, maintainability, and ease of deployment. Developed using Clean Architecture and SDLC best practices.',
            architecture_design: [
                'Designed a layered architecture with clear separation of concerns across domain, application, infrastructure, and presentation layers.',
                'Backend API developed in ASP.NET Core and hosted on Fly.io, adhering to RESTful standards.',
                'PostgreSQL database provisioned and managed using Supabase, allowing real-time debugging and scalability.',
                'Frontend built using React, Vite, and TailwindCSS, deployed to GitHub Pages for fast global delivery.',
                'Codebase structured to support plug-and-play module extension, enabling rapid development of future features.'
            ],
            devOps_deployment: [
                'Architected CI/CD pipelines using GitHub Actions to automate build, test, and deployment workflows.',
                'Leveraged Docker for local development and production parity, reducing environment-specific issues.',
                'Managed secrets and environment variables securely across environments to ensure safe deployment practices.'
            ],
            keyAccomplishments: [
                'Deployed a fully operational cloud-based app using free-tier infrastructure with Fly.io, Supabase, and GitHub Pages.',
                'Reduced manual deployment effort by 80% via automated CI/CD.',
                'Ensured seamless cross-device user experience with a responsive, modern frontend.'
            ],
            schoolreg: 'https://raytsanggithub.github.io/SchoolRegistration/',
            repoLink: 'https://github.com/raytsangGitHub/raytsang.com'
        },
    ];

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6">Projects</h2>
            {projects.map((project, index) => (
                <div key={index} className="bg-white p-6 mb-6 shadow-lg rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                    <p className="text-gray-600"><strong>Role:</strong> {project.role}</p>
                    <p className="text-gray-600"><strong>Duration:</strong> {project.duration}</p>
                    <p className="text-gray-600"><strong>Technologies:</strong> {project.technologies}</p>
                    <p className="text-gray-600"><strong>Hosting:</strong> {project.hosting}</p>
                    <p className="text-gray-600 mt-4"><strong>Overview:</strong> {project.overview}</p>

                    <p className="font-semibold text-lg mt-4">System Architecture & Design:</p>
                    <ul className="list-disc pl-6 text-gray-700">
                        {project.architecture_design.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>

                    <p className="font-semibold text-lg mt-4">DevOps & Deployment:</p>
                    <ul className="list-disc pl-6 text-gray-700">
                        {project.devOps_deployment.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>

                    <p className="font-semibold text-lg mt-4">Key Accomplishments:</p>
                    <ul className="list-disc pl-6 text-gray-700">
                        {project.keyAccomplishments.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>

                    <p className="mt-4">
                        <a href={project.schoolreg} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                            Visit School Registration
                        </a>
                        <span className="text-blue-500">{" | "}</span>
                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                            GitHub Repository
                        </a>
                    </p>
                </div>
            ))}
        </div>
    );

}

export default Projects;
