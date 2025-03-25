"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full h-[480px] md:h-[480px] lg:h-[580px] overflow-hidden" style={{ background: 'linear-gradient(90deg, rgba(0,24,36,0.9436566863073355) 0%, rgba(9,71,121,1) 37%, rgba(0,154,255,1) 92%)' }}>
      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8 lg:px-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Safar become easy
        </h1>
        <p className="text-xl md:text-2xl text-white -700 mb-8 max-w-3xl mx-auto">
          Let's make your safar more comfortable and your goals achievable
        </p>
        <Link
          href="/sign-in"
          className="bg-[#ffa502] hover:bg-[#ff9f00] text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
        >
          Start your journey
        </Link>
      </div>
    </div>
  );
};

export default Hero;
