import React from 'react';

function Projects()
{
    const projects = [
        {
            title: 'Inventory Management System',
            role: 'Full Stack Developer',
            technologies: 'C#, .NET Core, React, SQL Server, Docker, Azure',
            duration: 'March 2022 - Present',
            overview: 'A scalable inventory management system for a retail client.',
            responsibilities: [
                'Designed and implemented backend API using .NET Core.',
                'Developed a responsive front-end using React.',
                'Deployed using Docker containers.'
            ],
            keyHighlights: [
                'Automated inventory alerts.',
                'Optimized backend performance.',
                'Reduced deployment times.'
            ],
            repoLink: 'https://github.com/yourusername/inventory-management-system'
        },
        {
            title: 'E-commerce Web App',
            role: 'Backend Developer',
            technologies: 'C#, ASP.NET MVC, SQL Server, Azure DevOps',
            duration: 'June 2021 - February 2022',
            overview: 'Secure e-commerce platform for browsing and purchasing products.',
            responsibilities: [
                'Designed RESTful APIs for authentication and product management.',
                'Integrated Stripe and PayPal payment systems.',
                'Managed CI/CD pipelines using Azure DevOps.'
            ],
            keyHighlights: [
                'OAuth2 security for user authentication.',
                'Increased sales with a recommendation system.',
                'Automated pipelines for deployment.'
            ],
            repoLink: 'https://github.com/yourusername/e-commerce-web-app'
        }
    ];

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6">Projects</h2>
            {projects.map((project, index) => (
                <div key={index} className="bg-white p-6 mb-6 shadow-lg rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                    <p className="text-gray-600"><strong>Role:</strong> {project.role}</p>
                    <p className="text-gray-600"><strong>Technologies:</strong> {project.technologies}</p>
                    <p className="text-gray-600"><strong>Duration:</strong> {project.duration}</p>
                    <p className="text-gray-600"><strong>Overview:</strong> {project.overview}</p>

                    <ul className="list-disc pl-6 text-gray-700 mt-4">
                        {project.responsibilities.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>

                    <p className="font-semibold text-lg mt-4">Key Highlights:</p>
                    <ul className="list-disc pl-6 text-gray-700">
                        {project.keyHighlights.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                    <p className="mt-4">
                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub Repository</a>
                    </p>
                </div>
            ))}
        </div>
    );
}

export default Projects;
