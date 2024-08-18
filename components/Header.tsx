'use client';

import { navLinks } from "@/constants"
import Link from "next/link"
import { SyntheticEvent, useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    const link = e.target as HTMLElement;

    const selector = link.getAttribute('href');
    if (!selector) return;

    const el = document.querySelector(selector);
    if (!el) return;

    setActiveHash(selector);
    el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <header className="fixed z-10 px-5 h-[70px] border-b border-blue-100 bg-white flex items-center w-full">
      <nav className="flex h-full w-full">
        <div className="flex items-center">
          Michael Carey Portfolio
        </div>
        <div className="ml-auto flex items-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={`md:hidden cursor-pointer`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-6 ${isMenuOpen ? 'hidden' : 'inline'}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-6 ${isMenuOpen ? 'inline' : 'hidden'}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </div>
          <ul className={`z-10 absolute md:relative top-[70px] md:h-full md:top-0 left-0 w-full md:w-auto bg-white flex-col md:flex-row md:flex ${isMenuOpen ? 'flex' : 'hidden'}`}>
            {navLinks.map(({ label, anchor }) => {
              const isLinkActive = activeHash === anchor;

              return (
                <li key={label}>
                  <Link href={anchor} 
                        onClick={handleClick}
                        className={`hover:text-blue-500 hover:bg-blue-200 h-full flex items-center justify-center px-2 py-4 md:py-0 ${isLinkActive ? 'bg-blue-100 text-blue-500' : ''}`}>
                          {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header