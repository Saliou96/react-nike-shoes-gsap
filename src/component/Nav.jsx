import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // npm install lucide-react

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['MEN', 'WOMEN', 'KIDS', 'ACCESSORIES', 'SALES'];

  return (
    <nav className="w-full px-6 py-4 md:px-20 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/assets/logo.png" alt="logo" className="w-24 md:w-32" />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-10 text-lg font-bold">
        {navLinks.map((link) => (
          <a href="#" key={link} className="hover:text-gray-700">
            {link}
          </a>
        ))}
      </div>

      {/* Icons */}
      <div className="hidden md:flex gap-4 items-center text-2xl">
        <img src="/assets/search.png" alt="search" className="w-6 h-6" />
        <img src="/assets/cart.png" alt="cart" className="w-6 h-6" />
      </div>

      {/* Hamburger (mobile) */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-6 mt-2 md:hidden">
          {navLinks.map((link) => (
            <a
              href="#"
              key={link}
              className="text-lg font-semibold hover:text-gray-700"
              onClick={() => setIsOpen(false)} // close menu on click
            >
              {link}
            </a>
          ))}
          <div className="flex gap-4 mt-4">
            <img src="/assets/search.png" alt="search" className="w-6 h-6" />
            <img src="/assets/cart.png" alt="cart" className="w-6 h-6" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
