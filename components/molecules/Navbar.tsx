'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import PulsatingButton from "@/components/magicui/pulsating-button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar bg-base-100 md:px-20 z-10 sticky top-0 transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 font-semibold rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a>Promo</a></li>
            <li><a>Bantuan</a></li>
            <li><a>Hubungi Kami</a></li>
          </ul>
        </div>
        <a href="#" className="flex flex-row items-center justify-center gap-1 md:gap-2 cursor-pointer">
          <Image
            src="/images/bisamart.png"
            width="23"
            height="28"
            alt="Logo"
          />
          <span className="font-bold text-xl md:text-2xl mt-1.5">BisaMart</span>
        </a>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 font-semibold hidden lg:flex">
            <li><a>Promo</a></li>
            <li><a>Bantuan</a></li>
            <li><a>Hubungi Kami</a></li>
        </ul>
        <a href="#" className="text-white font-medium text-sm">
        <PulsatingButton>Download Sekarang</PulsatingButton>
        </a>
      </div>
    </div>
  )
}
