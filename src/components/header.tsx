"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { SignInButton, useAuth } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isSignedIn } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 py-3 md:py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image 
                src="/header-logo.png" 
                alt="Aweera Innovations" 
                width={130} 
                height={50} 
                className="h-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-[#001F3F] hover:text-opacity-80 font-bold tracking-wide transition-colors"
            >
              HOME
            </Link>
            <Link 
              href="/#platform" 
              className="text-[#001F3F] hover:text-opacity-80 font-bold tracking-wide transition-colors"
            >
              PLATFORM
            </Link>
            <Link 
              href="/#features" 
              className="text-[#001F3F] hover:text-opacity-80 font-bold tracking-wide transition-colors"
            >
              FEATURE
            </Link>
            <Link 
              href="/#strategies" 
              className="text-[#001F3F] hover:text-opacity-80 font-bold tracking-wide transition-colors"
            >
              STRATEGIES
            </Link>
            <Link 
              href="/#feedback" 
              className="text-[#001F3F] hover:text-opacity-80 font-bold tracking-wide transition-colors"
            >
              FEEDBACK
            </Link>
          </nav>

          {/* Sign in button */}
          <div className="hidden md:block">
            {isSignedIn ? (
              <Link
                href="/lms"
                className="bg-[#ffa502] hover:bg-[#ff9f00] text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                LMS
              </Link>
            ) : (
              <Link href="/sign-in">
                <button className="bg-[#001F3F] hover:bg-[#ff9f00] text-white px-6 py-3 rounded-full font-medium transition-colors">
                  Sign In
                </button>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#001F3F] p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer menu */}
      {isOpen && (
        <div className="md:hidden bg-white transition-all duration-300 ease-in-out">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-[#001F3F] text-lg font-bold py-2 hover:text-opacity-80"
              onClick={closeMenu}
            >
              HOME
            </Link>
            <Link
              href="/#platform"
              className="text-[#001F3F] text-lg font-bold py-2 hover:text-opacity-80"
              onClick={closeMenu}
            >
              PLATFORM
            </Link>
            <Link
              href="/#feature"
              className="text-[#001F3F] text-lg font-bold py-2 hover:text-opacity-80"
              onClick={closeMenu}
            >
              FEATURE
            </Link>
            <Link
              href="/#strategies"
              className="text-[#001F3F] text-lg font-bold py-2 hover:text-opacity-80"
              onClick={closeMenu}
            >
              STRATEGIES
            </Link>
            <Link
              href="/#feedback"
              className="text-[#001F3F] text-lg font-bold py-2 hover:text-opacity-80"
              onClick={closeMenu}
            >
              FEEDBACK
            </Link>
            
            {/* Mobile sign in button */}
            <div className="py-2">
              {isSignedIn ? (
                <Link
                  href="/lms"
                  className="inline-block bg-[#ffa502] hover:bg-[#ff9f00] text-white px-6 py-3 rounded-full font-medium transition-colors"
                  onClick={closeMenu}
                >
                  LMS
                </Link>
              ) : (
                <SignInButton mode="modal">
                  <button className="bg-[#ffa502] hover:bg-[#ff9f00] text-white px-6 py-3 rounded-full font-medium transition-colors">
                    Sign In
                  </button>
                </SignInButton>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
