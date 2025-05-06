import React from 'react';

function WorkExperiences()
{
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Work Experience</h1>

            <div className="experience-item bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900">Software Engineer</h3>
                        <p className="italic text-gray-600">ABC Technologies</p>
                    </div>
                    <p className="text-gray-500">June 2019 - Present</p>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Key Responsibilities:</h4>
                <ul className="list-disc pl-5 text-gray-700">
                    <li>Developed and maintained microservices using .NET Core and Docker.</li>
                    <li>Led a team of 3 developers in building a scalable solution for client X.</li>
                    <li>Optimized performance of data processing pipelines by 25%.</li>
                </ul>
                <h4 className="font-semibold text-gray-800 mt-4 mb-2">Key Achievements:</h4>
                <ul className="list-disc pl-5 text-gray-700">
                    <li>Reduced response time by 40% through database optimization.</li>
                    <li>Contributed to the implementation of CI/CD pipelines using Azure DevOps.</li>
                </ul>
            </div>

            <div className="experience-item bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900">Senior Developer</h3>
                        <p className="italic text-gray-600">XYZ Solutions</p>
                    </div>
                    <p className="text-gray-500">January 2015 - May 2019</p>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Key Responsibilities:</h4>
                <ul className="list-disc pl-5 text-gray-700">
                    <li>Developed front-end features using ReactJS and integrated them with back-end APIs.</li>
                    <li>Led code reviews and maintained high-quality standards across the team.</li>
                    <li>Collaborated with product teams to deliver features in an Agile environment.</li>
                </ul>
                <h4 className="font-semibold text-gray-800 mt-4 mb-2">Key Achievements:</h4>
                <ul className="list-disc pl-5 text-gray-700">
                    <li>Helped to decrease the load time of the application by 30%.</li>
                    <li>Implemented a fully automated testing suite that improved the QA process.</li>
                </ul>
            </div>

            <div className="text-center mt-8">
                <p className="text-lg text-gray-700">For a detailed look at my work history, <a href="/resume" className="text-blue-600 hover:underline">view my resume</a>.</p>
            </div>
        </div>
    );
}

export default WorkExperiences;
