import React, { useEffect, useState } from "react";
import {
  ClosedDrawerIcon,
  OpenDrawerIcon,
  TravlogIcon,
} from "@/assets/svg/SvgIcons";

const navLinks = [
  {
    link: "/",
    text: "Home",
    alias: "home",
  },
  {
    link: "/",
    text: "Discover",
    alias: "discover",
  },
  {
    link: "/",
    text: "Special Deals",
    alias: "deals",
  },
  {
    link: "/",
    text: "Contact",
    alias: "contact",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [inFirstSection, setInFirstSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition < 10) {
        setInFirstSection(true);
      } else {
        setInFirstSection(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const scrollToSection = (alias: string) => {
    const section = document.getElementById(alias);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50,
        behavior: "smooth",
      }); 
    }
};

  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionKey = entry.target.id;
            setActive(sectionKey)
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    navLinks.forEach((section) => {
      const target = document.getElementById(section.alias);
      if (target) {
        observer.observe(target);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <nav
      className={`sticky w-full transform ease-in ${
        inFirstSection ? "bg-transparent" : "bg-white shadow-sm"
      } bg-transparent border-gray-200 py-2.5 top-0 z-50`}
    >
      <div className="md:w-[1199px] flex flex-wrap items-center justify-between max-w-screen-xl mx-auto px-3">
        <a href="#" className="flex items-center">
          <TravlogIcon />
        </a>
        <div className="flex items-center md:order-2 gap-2">
          <div className="hidden mt-2 mr-4 sm:inline-block">
            <span></span>
          </div>
          <button className="hidden md:flex cursor-pointer text-travlog-pink bg-travlog-pink transition-all ease-in-out text-white font-medium rounded-full text-sm px-4 md:px-5 py-2 md:py-2.5 sm:mr-2 md:mr-0 gap-2 flex-row items-center">
            Log In
          </button>
          <button className="hidden md:flex cursor-pointer text-travlog-pink bg-white hover:bg-travlog-pink transition-all ease-in-out hover:text-white font-medium rounded-full text-sm px-4 md:px-5 py-2 md:py-2.5 sm:mr-2 md:mr-0 gap-2 flex-row items-center">
            Sign up
          </button>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-travlog-dark rounded-lg md:hidden"
            aria-controls="mobile-menu-2"
            aria-expanded="true"
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <ClosedDrawerIcon fill="#222831FF" className="w-6 h-6" />
            ) : (
              <OpenDrawerIcon fill="#222831FF" className="w-6 h-6" />
            )}
          </button>
        </div>
        <div className="items-center justify-between w-full hidden md:flex md:w-auto md:order-1">
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
            {navLinks.map((data) => (
              <li key={data.alias}>
                <a
                  onClick={() => scrollToSection(data.alias)}
                  className={`cursor-pointer block py-2 pl-3 pr-4 ${
                    active === data.alias
                      ? "text-travlog-pink"
                      : "text-secondary-50"
                  } hover:text-travlog-dark hover:text-purple-700`}
                >
                  {data.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {isMenuOpen && (
          <div className="items-center justify-between w-full md:hidden md:w-auto md:order-1 z-50">
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 gap-2">
              {navLinks.map((data) => (
                <li key={data.alias}>
                  <a
                    onClick={() => scrollToSection(data.alias)}
                    className={`cursor-pointer  block py-2 pl-3 pr-4 ${
                      active === data.alias
                        ? "text-white bg-travlog-pink"
                        : "text-secondary-50"
                    } rounded md:bg-transparent md:p-0`}
                    aria-current="page"
                  >
                    {data.text}
                  </a>
                </li>
              ))}
              <li>
                <button className="flex md:hidden cursor-pointer text-travlog-pink bg-travlog-pink transition-all ease-in-out text-white font-medium rounded-full text-sm px-4 md:px-5 py-2 md:py-2.5 sm:mr-2 md:mr-0 gap-2 flex-row items-center">
                  Log In
                </button>
              </li>
              <li>
                <button className="flex md:hidden cursor-pointer text-travlog-pink bg-white hover:bg-travlog-pink transition-all ease-in-out hover:text-white font-medium rounded-full text-sm px-4 md:px-5 py-2 md:py-2.5 sm:mr-2 md:mr-0 gap-2 flex-row items-center">
                  Sign up
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
