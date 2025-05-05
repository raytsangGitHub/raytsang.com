import React from 'react';

function ContactMe()
{
    return (
        <section className="min-h-screen bg-gray-100 py-12 px-4">
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Information</h2>
                <div className="space-y-6">
                    <div className="flex items-center">
                        <i className="fas fa-phone-alt text-blue-500 mr-4"></i>
                        <p className="text-xl">Phone: <a href="tel:+1234567890" className="text-blue-500">+1 (206) 687-8364</a></p>
                    </div>
                    <div className="flex items-center">
                        <i className="fas fa-envelope text-blue-500 mr-4"></i>
                        <p className="text-xl">Email: <a href="mailto:your_email@example.com" className="text-blue-500">Igenericpro@gmail.com</a></p>
                    </div>
                    <div className="flex items-center">
                        <i className="fas fa-map-marker-alt text-blue-500 mr-4"></i>
                        <p className="text-xl">Location: Seattle, Washington</p>
                    </div>
                    <div className="flex items-center">
                        <i className="fas fa-link text-blue-500 mr-4"></i>
                        <p className="text-xl">Website: <a href="https://raytsanggithub.github.io/raytsang.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500">My Portfolio</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactMe;
