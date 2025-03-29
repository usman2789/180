import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-navy-900 py-4">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 order-2 md:order-1 mb-4 md:mb-0 text-center md:text-left">
                        <a
                            href="/privacy-policy"
                            className="text-sm hover:text-blue-600 transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="/terms-of-use"
                            className="text-sm hover:text-blue-600 transition-colors"
                        >
                            Terms of Use
                        </a>
                        <a
                            href="mailto:usman@taleemkasafar.com"
                            className="text-sm hover:text-blue-600 transition-colors"
                        >
                            Feedback: usman@taleemkasafar.com
                        </a>
                    </div>
                    <div className="order-3 md:order-2 text-center md:text-left mt-4 md:mt-0">
                        <span className="text-sm">
                            © {new Date().getFullYear()} Taleem ka Safar. All rights reserved.
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;