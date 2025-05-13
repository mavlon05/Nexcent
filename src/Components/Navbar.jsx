import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import LanguageSwitcher from "../Components/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import icon1 from "../../public/Icons/Logo (18).png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  const menuItems = [
    { id: "hero", text: t("navbar.h1") },
    { id: "statistics", text: t("navbar.h2") },
    { id: "features", text: t("navbar.h3") },
    { id: "blog", text: t("navbar.h4") },
    { id: "additional-blog", text: t("navbar.h5") },
    { id: "case-study", text: t("navbar.h6") },
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-md cursor-pointer fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={icon1} alt="Logo" className="w-[100px] h-auto" />
          </div>

          {/* Mobile menu toggle */}
          <div className="flex items-center gap-4 sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <ul className="hidden sm:flex flex-row gap-6 font-medium text-gray-700">
            {menuItems.map(({ id, text }) => (
              <li key={id}>
                <Link 
                  to={id}
                  smooth
                  duration={200}
                  className="relative inline-block py-2 px-3 transition-all duration-300 text-gray-700
                    after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-green-600
                    after:transition-all after:duration-300 hover:after:w-full"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop LanguageSwitcher & Auth */}
          <div className="hidden sm:flex items-center gap-4">
            <LanguageSwitcher />
            <SignedOut>
              <SignInButton mode="modal">
                <button className="px-5 py-2 font-medium rounded-md bg-green-500 hover:bg-transparent text-white hover:text-green-500 border-2 border-green-500 transition-all duration-300">
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

      {/* Mobile menu (animated modal) */}
      <ul
        className={`fixed top-0 left-0 w-full bg-white sm:hidden z-40 shadow-lg transform transition-all duration-500 ease-in-out ${
          menuOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"
        } flex flex-col gap-4 py-40 px-6 font-medium text-gray-700`}
      >
        {menuItems.map(({ id, text }) => (
          <li key={id} className="text-[17px] text-center">
            <Link
              to={id}
              smooth
              duration={200}
              onClick={() => setMenuOpen(false)}
              className="block py-3 px-4 rounded-md hover:text-green-600 hover:bg-gray-100 transition-all duration-300"
            >
              {text}
            </Link>
          </li>
        ))}

        <li className="flex flex-col gap-2 mt-6 border-t border-gray-200   pt-4">
          <div className="flex justify-center">
            <LanguageSwitcher />
          </div>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-5 py-2 mt-6 text-green-600 bg-slate-100 font-medium rounded-md hover:bg-slate-200 transition-all duration-300 w-full">
                Login
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <div className="flex justify-center">
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
