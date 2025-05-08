import { useState } from "react";
import { Link } from 'react-scroll'; 
import LanguageSwitcher from "../Components/LanguageSwitcher";  
import { useTranslation } from "react-i18next";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import icon1 from "../../public/Icons/Logo (18).png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-30">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={icon1} alt="Logo" className="w-[100px] h-auto" />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        
        <ul className={`sm:flex gap-8 font-medium text-gray-700 absolute sm:static top-16 left-0 w-full sm:w-auto bg-white sm:bg-transparent sm:flex-row items-start sm:items-center px-6 sm:px-0 transition-all duration-300 ${menuOpen ? "flex" : "hidden"}`}>
          <div className="sm:flex flex-col sm:flex-row gap-8 w-full sm:w-auto cursor-pointer">
            <li><Link to="hero" smooth={true} duration={200} onClick={() => setMenuOpen(false)}>{t('navbar.h1')}</Link></li>
            <li><Link to="statistics" smooth={true} duration={200} onClick={() => setMenuOpen(false)}>{t('navbar.h2')}</Link></li>
            <li><Link to="features" smooth={true} duration={200} onClick={() => setMenuOpen(false)}>{t('navbar.h3')}</Link></li>
            <li><Link to="blog" smooth={true} duration={200} onClick={() => setMenuOpen(false)}>{t('navbar.h4')}</Link></li>
            <li><Link to="additional-blog" smooth={true} duration={200} onClick={() => setMenuOpen(false)}>{t('navbar.h5')}</Link></li>
            <li><Link to="case-study" smooth={true} duration={200} onClick={() => setMenuOpen(false)}>{t('navbar.h6')}</Link></li>
          </div>

          
          <div className="flex flex-col gap-2 mt-4 w-full sm:hidden">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="px-5 py-2 text-green-500 bg-slate-100 font-normal rounded-[6px] hover:bg-slate-200 transition-all duration-300 w-full">
                  Login
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </ul>

        
        <div className="hidden sm:flex items-center gap-4">
          <LanguageSwitcher />

          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-5 py-2 font-normal rounded-[6px] bg-green-500 text-white hover:bg-green-600 transition-all duration-300">
                Sign up
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
