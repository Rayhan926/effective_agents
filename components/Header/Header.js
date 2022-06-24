import Link from "next/link";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const navLinks = [
  {
    text: "For Sellers",
    url: "#",
  },
  {
    text: "For Buyers",
    url: "#",
  },
  {
    text: "Why It Works",
    url: "#",
  },
  {
    text: "About",
    url: "#",
    withDropdownIcon: true,
  },
];

const Header = () => {
  return (
    <header className="bg-white px-[30px] py-6 flex justify-between items-center">
      <Link href="/">
        <a>
          <img
            src="/img/effective-agents.png"
            alt="effective-agents"
            className="max-w-[120px] lg:max-w-[138px]"
          />
        </a>
      </Link>

      <nav className="hidden lg:block">
        <ul className="flex items-center">
          {navLinks.map((navLink, i) => (
            <li key={i}>
              <Link href={navLink.url}>
                <a className="font-medium text-black hover:text-primary py-2 px-4 flex items-center gap-1">
                  {navLink.text}
                  {navLink.withDropdownIcon && <FiChevronDown size={19} />}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="hidden lg:block">
        <button className="__button">FIND AN AGENT</button>
      </div>

      <MobileHeader />
    </header>
  );
};

export default Header;

const MobileHeader = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  const shouldCloseMobileNav = (e) => {
    if (e.target.id === "mobileNavOverley") {
      setIsOpenNav(false);
    }
  };

  return (
    <div className="lg:hidden">
      <div onClick={() => setIsOpenNav((prev) => !prev)}>
        <svg
          width="30"
          height="18"
          viewBox="0 0 30 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            y1="1.63086"
            x2="25"
            y2="1.63086"
            stroke="#174888"
            strokeWidth="2"
          />
          <line
            x1="5"
            y1="9.13086"
            x2="30"
            y2="9.13086"
            stroke="#174888"
            strokeWidth="2"
          />
          <line
            y1="16.6309"
            x2="25"
            y2="16.6309"
            stroke="#174888"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div
        id="mobileNavOverley"
        onClick={shouldCloseMobileNav}
        className={`fixed bg-black/50 top-0 left-0 w-full h-screen z-50 duration-200 ${
          isOpenNav
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`w-[75%] h-full bg-white ${
            isOpenNav ? "translate-x-0" : "-translate-x-full"
          } duration-200`}
        >
          <nav className="h-full flex flex-col">
            <ul className="pt-3">
              {navLinks.map((navLink, i) => (
                <li key={i}>
                  <Link href={navLink.url}>
                    <a className="font-medium text-black hover:text-primary px-6 py-3 flex items-center gap-1">
                      {navLink.text}
                      {navLink.withDropdownIcon && <FiChevronDown size={19} />}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-auto p-6">
              <button className="__button">FIND AN AGENT</button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
