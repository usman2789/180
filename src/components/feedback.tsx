"use client";

import React, { useState } from 'react';

const Feedback: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    return (
        
        <div id='feedback' className="max-w-2xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-6">
                Your Feedback is Valuable for Us
            </h2>
            <p className="text-center mb-8 text-gray-600">
                If you want to collaborate, we'd love to hear from you!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="number" className="block mb-2 text-sm font-medium">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="number"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md h-32"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                    Submit Feedback
                </button>
            </form>
        </div>
    );
};

export default Feedback;