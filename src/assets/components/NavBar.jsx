import React, { useState } from 'react';
import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';
import logo from '/images/logo.png';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full h-16 bg-white shadow-md px-4 py-3 flex items-center justify-between relative z-50">
        {/* Logo and Toggle */}
        <img className="w-16 h-16" src={logo} alt="Logo" />
        <button
          className="text-[#0590ee] text-2xl focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Fullscreen Overlay Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-40 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="mt-24 flex flex-col items-center gap-6 text-xl font-semibold text-white">
          <div className="bg-gradient-to-r from-[#0590ee] to-[#1acffe] p-6 rounded-xl shadow-lg flex flex-col gap-4 text-center w-3/4 max-w-md">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/subjects" onClick={() => setIsOpen(false)}>Subjects</Link>
            <Link to="/activities" onClick={() => setIsOpen(false)}>Activities</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          </div>
        </div>
      </div>
    </>
  );
}
