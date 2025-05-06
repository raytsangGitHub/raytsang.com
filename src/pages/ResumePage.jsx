import React from 'react';

export default function Resume()
{
    return (
        <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
            <h1 className="text-3xl font-bold mb-2">Raymond M. Tsang</h1>
            <p className="mb-2">
                📞 (206) 687-8364 | 📧 <a href="mailto:Raytsang21@gmail.com" className="text-blue-600 hover:underline">Raytsang21@gmail.com</a>
            </p>
            <p className="text-xl font-semibold mb-6">Software Engineer</p>

            <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download="Tsang-Resume.pdf"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow hover:bg-blue-700 transition mb-8"
            >
                Download Resume (PDF)
            </a>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Professional Summary</h2>
                <p>
                    Experienced Software Engineer with over 20 years of expertise in full-stack development, cloud services, and data engineering...
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Key Achievements</h2>
                <ul className="list-disc list-inside space-y-1">
                    <li>Developed high-performing MVC web applications using C#, ASP.NET...</li>
                    <li>Implemented microservices with Docker...</li>
                    <li>Automated data extraction processes using Python and BeautifulSoup...</li>
                    <li>Proficient in CI/CD pipeline management...</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Technical Skills</h2>
                <p><span className="font-semibold">Languages:</span> C/C++, C#, Python, Java, React.js, Golang, HTML...</p>
                <p><span className="font-semibold">Frameworks:</span> ASP.NET CORE, Entity Framework, Node.js...</p>
                <p><span className="font-semibold">DevOps:</span> GitHub Actions, Jenkins, Docker, Azure...</p>
                <p><span className="font-semibold">Databases:</span> SQL Server, MySQL, LevelDB...</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-2">GitHub Projects</h2>
                <ul className="list-disc list-inside space-y-1">
                    <li><span className="font-semibold">ParallelComputing:</span> PLINQ-based multithreading solutions in C#.</li>
                    <li><span className="font-semibold">DesignPatterns:</span> Library showcasing C# design patterns.</li>
                    <li><span className="font-semibold">AlgorithmMastery:</span> Optimized solutions for common algorithms.</li>
                    <li><span className="font-semibold">KotlinTutorial:</span> Kotlin applications demonstrating features.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Professional Experience</h2>
                <div className="mb-4">
                    <h3 className="font-semibold">Software Development Engineer</h3>
                    <p>Self Employment – Seattle, WA | Dec 2018 – Aug 2023</p>
                    <ul className="list-disc list-inside ml-4">
                        <li>Developed full-stack analytic web app, boosting data processing by 30%.</li>
                        <li>Automated web scraping with BeautifulSoup, saving 100+ hours weekly.</li>
                    </ul>
                </div>
                {/* Repeat similarly for other jobs... */}
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Education</h2>
                <p>
                    Bachelor of Science in Electrical Engineering<br />
                    University of Washington, Seattle, WA — June 1993
                </p>
                <p className="mt-2">Certifications: Microsoft SQL Server 2000 (MCP)</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-2">Languages</h2>
                <p>English, Chinese (Proficient in read, write, and speak)</p>
            </section>
        </div>
    );
}
