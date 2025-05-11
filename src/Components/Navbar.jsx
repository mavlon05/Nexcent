import { useState } from "react";
import { Link } from "react-scroll";
import LanguageSwitcher from "../Components/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
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

        {/* Menu Items */}
        <ul className={`font-medium text-gray-700 absolute sm:static top-16 left-0 w-full sm:w-auto bg-white sm:bg-transparent 
                        flex-col sm:flex-row sm:flex gap-4  px-6 sm:px-0 transition-all duration-300 
                        ${menuOpen ? "flex" : "hidden"}`}>

          <li className="w-full sm:w-auto group">
            <Link
              to="hero"
              smooth={true}
              duration={200}
              onClick={() => setMenuOpen(false)}
              className="block py-2 px-3 rounded-md hover:text-green-600 transition-all duration-300 relative"
            >
              <span className="relative z-10">{t('navbar.h1')}</span>
              <span className="absolute bottom-1 left-0 w-0 group-hover:w-full h-[2px] bg-green-500 transition-all duration-300"></span>
            </Link>
          </li>

          <li className="w-full sm:w-auto group">
            <Link
              to="statistics"
              smooth={true}
              duration={200}
              onClick={() => setMenuOpen(false)}
              className="block py-2 px-3 rounded-md hover:text-green-600 transition-all duration-300 relative"
            >
              <span className="relative z-10">{t('navbar.h2')}</span>
              <span className="absolute bottom-1 left-0 w-0 group-hover:w-full h-[2px] bg-green-500 transition-all duration-300"></span>
            </Link>
          </li>

          <li className="w-full sm:w-auto group">
            <Link
              to="features"
              smooth={true}
              duration={200}
              onClick={() => setMenuOpen(false)}
              className="block py-2 px-3 rounded-md hover:text-green-600 transition-all duration-300 relative"
            >
              <span className="relative z-10">{t('navbar.h3')}</span>
              <span className="absolute bottom-1 left-0 w-0 group-hover:w-full h-[2px] bg-green-500 transition-all duration-300"></span>
            </Link>
          </li>

          <li className="w-full sm:w-auto group">
            <Link
              to="blog"
              smooth={true}
              duration={200}
              onClick={() => setMenuOpen(false)}
              className="block py-2 px-3 rounded-md hover:text-green-600 transition-all duration-300 relative"
            >
              <span className="relative z-10">{t('navbar.h4')}</span>
              <span className="absolute bottom-1 left-0 w-0 group-hover:w-full h-[2px] bg-green-500 transition-all duration-300"></span>
            </Link>
          </li>

          <li className="w-full sm:w-auto group">
            <Link
              to="additional-blog"
              smooth={true}
              duration={200}
              onClick={() => setMenuOpen(false)}
              className="block py-2 px-3 rounded-md hover:text-green-600 transition-all duration-300 relative"
            >
              <span className="relative z-10">{t('navbar.h5')}</span>
              <span className="absolute bottom-1 left-0 w-0 group-hover:w-full h-[2px] bg-green-500 transition-all duration-300"></span>
            </Link>
          </li>

          <li className="w-full sm:w-auto group">
            <Link
              to="case-study"
              smooth={true}
              duration={200}
              onClick={() => setMenuOpen(false)}
              className="block py-2 px-3 rounded-md hover:text-green-600 transition-all duration-300 relative"
            >
              <span className="relative z-10">{t('navbar.h6')}</span>
              <span className="absolute bottom-1   left-0 w-0 group-hover:w-full h-[2px] bg-green-500 transition-all duration-300"></span>
            </Link>
          </li>

          {/* Mobile: Auth */}
          <li className="flex flex-col gap-2 mt-4 w-full sm:hidden">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="px-5 py-2 text-green-600 bg-slate-200 font-normal rounded-md hover:bg-slate-200 transition-all duration-300x  w-full">
                  Login
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </li>
        </ul>

        {/* Desktop: Lang + Auth */}
        <div className="hidden sm:flex items-center gap-4 ">
          <LanguageSwitcher />

          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-5 py-2 font-normal rounded-md bg-green-500 hover:bg-transparent text-white hover:text-green-500 border-2 border-green-500 transition-all duration-300">
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
