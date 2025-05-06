import React from 'react';

function Skills()
{
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Skills</h1>

            <div className="skill-item bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">Programming Languages</h3>
                <ul className="list-disc pl-5 text-gray-700 mt-4">
                    <li>JavaScript (ES6+)</li>
                    <li>TypeScript</li>
                    <li>C# (.NET Core, ASP.NET MVC)</li>
                    <li>Python</li>
                    <li>Java</li>
                </ul>
            </div>

            <div className="skill-item bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">Web Development</h3>
                <ul className="list-disc pl-5 text-gray-700 mt-4">
                    <li>ReactJS / NextJS</li>
                    <li>Vue.js</li>
                    <li>HTML5 & CSS3</li>
                    <li>Node.js</li>
                    <li>RESTful APIs</li>
                </ul>
            </div>

            <div className="skill-item bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">Frameworks & Libraries</h3>
                <ul className="list-disc pl-5 text-gray-700 mt-4">
                    <li>React, Redux</li>
                    <li>ASP.NET Core</li>
                    <li>Spring Boot</li>
                    <li>Express.js</li>
                    <li>Tailwind CSS</li>
                </ul>
            </div>

            <div className="skill-item bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">Tools & Databases</h3>
                <ul className="list-disc pl-5 text-gray-700 mt-4">
                    <li>Git & GitHub</li>
                    <li>Docker</li>
                    <li>CI/CD (Azure DevOps, Jenkins)</li>
                    <li>SQL (MySQL, PostgreSQL, SQL Server)</li>
                    <li>MongoDB</li>
                </ul>
            </div>

            <div className="text-center mt-8">
                <p className="text-lg text-gray-700">For a more detailed breakdown of my skills, <a href="/resume" className="text-blue-600 hover:underline">view my resume</a>.</p>
            </div>
        </div>
    );
}

export default Skills;
