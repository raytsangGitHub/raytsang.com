import React, { useState } from 'react';

const skills = {
    openSource: [
        'JavaScript', 'Python', 'Node.js', 'React',
        'Docker', 'Kubernetes', 'GitHub Actions',
        'GitLab CI/CD', 'NUnit', 'xUnit',
        'Postman', 'Swagger', 'VS Code',
    ],
    proprietary: [
        'C#', '.NET Core', 'ASP.NET MVC',
        'Entity Framework', 'Visual Studio',
        'SQL Server', 'Azure App Services',
        'Azure DevOps Pipelines', 'Microsoft MCP (SQL Server 2000)',
    ],
};

export default function SkillsPage()
{
    const [activeTab, setActiveTab] = useState('openSource');

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Skills</h1>

            {/* Tablist */}
            <div role="tablist" className="flex justify-center gap-4 mb-6">
                {Object.entries({
                    openSource: 'Open Source',
                    proprietary: 'Proprietary',
                }).map(([key, label]) => (
                    <button
                        key={key}
                        role="tab"
                        aria-selected={activeTab === key}
                        aria-controls={`${key}-panel`}
                        className={`cursor-pointer px-6 py-2 rounded-full text-sm font-medium 
              ${activeTab === key
                                ? 'bg-blue-600 text-white border-2 border-blue-600'
                                : 'bg-gray-100 text-gray-800 border-2 border-gray-300 hover:bg-gray-200'}
              transition-all duration-200`}
                        onClick={() => setActiveTab(key)}
                    >
                        {label}
                    </button>
                ))}
            </div>

            {/* Tab Panels */}
            <div>
                {Object.keys(skills).map((key) => (
                    <div
                        key={key}
                        role="tabpanel"
                        id={`${key}-panel`}
                        hidden={activeTab !== key}
                        className="grid grid-cols-2 md:grid-cols-3 gap-4"
                    >
                        {skills[key].map((skill) => (
                            <div
                                key={skill}
                                className="border border-gray-200 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition"
                            >
                                <span className="font-medium text-gray-800">{skill}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
