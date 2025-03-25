import React from 'react';

const Features = () => {
    const features = [
        {
            title: "Online Assessment",
            description: "Take comprehensive tests to evaluate your knowledge and skills"
        },
        {
            title: "Instant Results",
            description: "Get detailed results and performance analysis immediately after completion"
        },
        {
            title: "Advanced Analytics",
            description: "Track your progress with in-depth analytics, including time spent per section"
        },
        {
            title: "Performance Tracking",
            description: "Monitor your improvement over time with detailed progress reports"
        }
    ];

    return (
        <section id='features' className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Discover the Features of Taleem ka Safar
                </h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Empower your learning journey with our comprehensive features designed to enhance your educational experience
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index} 
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;