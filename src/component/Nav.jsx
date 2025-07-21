import React, { useState } from 'react'

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className='flex justify-between items-center px-6 md:px-40 py-6 md:py-10 relative'>
            <div>
                <img src="/assets/logo.png" alt="logo" className='w-24 md:w-30' />
            </div>
            {/* Desktop Menu */}
            <div className='hidden md:flex gap-10 text-xl md:text-3xl font-bold'>
                <a href="#">MEN</a>
                <a href="#">WOMEN</a>
                <a href="#">KIDS</a>
                <a href="#">ACCESSORIES</a>
                <a href="#">SALES</a>
            </div>
            {/* Mobile Icons & Burger */}
            <div className='flex items-center gap-4 md:gap-4 text-xl md:text-2xl'>
                {/* Icônes visibles seulement sur desktop */}
                <img src="/assets/search.png" alt="search" className='w-7 h-7 hidden md:block' />
                <img src="/assets/cart.png" alt="cart" className='w-7 h-7 hidden md:block' />
                {/* Burger icon visible on mobile */}
                <button className='md:hidden ml-2' onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
                    <svg className='w-8 h-8' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            {/* Mobile Menu Drawer */}
            {menuOpen && (
                <div className='md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 flex flex-col items-center py-6 gap-6 text-xl font-bold'>
                    <a href="#" onClick={() => setMenuOpen(false)}>MEN</a>
                    <a href="#" onClick={() => setMenuOpen(false)}>WOMEN</a>
                    <a href="#" onClick={() => setMenuOpen(false)}>KIDS</a>
                    <a href="#" onClick={() => setMenuOpen(false)}>ACCESSORIES</a>
                    <a href="#" onClick={() => setMenuOpen(false)}>SALES</a>
                    <div className='flex gap-8 mt-4'>
                        <img src="/assets/search.png" alt="search" className='w-7 h-7' />
                        <img src="/assets/cart.png" alt="cart" className='w-7 h-7' />
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Nav