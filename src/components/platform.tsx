import React from 'react';

const Platform: React.FC = () => {
    return (
        <section id='platform' className="min-h-screen w-full py-16 px-4 md:px-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Taleem ka Safar
                    </h1>
                    <h1 className="text-xl md:text-3xl text-white mb-8">
                        Pakistan's First Free Online Test Preparation Platform
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    <div className="text-white">
                        <h3 className="text-2xl font-semibold mb-4">Free Practice Tests</h3>
                        <p>Access unlimited practice tests that mirror the actual university entrance exams environment.</p>
                    </div>

                    <div className="text-white">
                        <h3 className="text-2xl font-semibold mb-4">Authentic Experience</h3>
                        <p>Practice in the same environment you'll face during your actual entrance test.</p>
                    </div>

                    <div className="text-white">
                        <h3 className="text-2xl font-semibold mb-4">Comprehensive Coverage</h3>
                        <p>Access questions from all major subjects and topics required for university admissions.</p>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Why Choose Taleem ka Safar?
                    </h2>
                    <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
                        We're committed to making quality education accessible to everyone. Our platform
                        provides free, high-quality test preparation resources to help you achieve your
                        academic goals without any financial burden.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Platform;
