import React from 'react';

function Skills()
{
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Skills</h1>

            <div className="skill-item bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">Programming Languages</h3>
                <ul className="list-disc pl-5 text-gray-700 mt-4">
                    <li>C# (.NET Core, ASP.NET Core Web API)</li>
                    <li>C/C++</li>
                    <li>JavaScript (ES6+)</li>
                    <li>TypeScript</li>
                    <li>Python</li>
                    <li>Java</li>
                </ul>
            </div>

            <div className="skill-item bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">Web Development</h3>
                <ul className="list-disc pl-5 text-gray-700 mt-4">
                    <li>RESTful APIs</li>
                    <li>Node.js</li>
                    <li>React.js</li>
                    <li>Vite.js</li>
                    <li>HTML5 & CSS3</li>
                    <li>TailwindCSS V4</li>

                </ul>
            </div>

            <div className="skill-item bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">Frameworks & Libraries</h3>
                <ul className="list-disc pl-5 text-gray-700 mt-4">
                    <li>React</li>
                    <li>ASP.NET Core</li>
                    <li>Pytouch</li>
                    <li>Tensorflow</li>
                    <li>Tailwind CSS</li>
                </ul>
            </div>
            <div className="skill-item bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">SDKs</h3>
                <ul className="list-disc pl-5 text-gray-700 mt-4">
                    <li>DotNet SDK8, SDK9</li>
                    <li>CUDA</li>
                </ul>
            </div>
            <div className="skill-item bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">Databases</h3>
                <ul className="list-disc pl-5 text-gray-700 mt-4">
                    <li>SQL (MySQL, PostgreSQL, SQL Server)</li>
                </ul>
            </div>

            <div className="skill-item bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">Tools</h3>
                <ul className="list-disc pl-5 text-gray-700 mt-4">
                    <li>Git & GitHub</li>
                    <li>Docker</li>
                    <li>Modelio for ULM diagrams</li>
                    <li>Google doc for decumentation depo</li>

                </ul>
            </div>

            <div className="text-center mt-8">
                <p className="text-lg text-gray-700">For a more detailed breakdown of my skills, <a href="/resume" className="text-blue-600 hover:underline">view my resume</a>.</p>
            </div>
        </div>
    );
}

export default Skills;
