import React, { useState } from "react";

function ContactMe()
{
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) =>
    {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // You can send data to Node.js backend or email API here.
    };

    return (
        <section className="min-h-screen bg-gray-100 py-12 px-4">
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Me</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block font-medium mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-400"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-medium mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-400"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block font-medium mb-1">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-400"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block font-medium mb-1">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-400"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}

export default ContactMe;