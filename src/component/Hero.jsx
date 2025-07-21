// v1
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const shoeOptions = [
    {
        color: 'Red',
        image: '/assets/shoe2.png',
        name: 'NIKE JORDAN WHY NOT 6 - RED',
        price: 160,
        description: "Russell Westbrook’s 6th signature shoe in red is engineered for explosive speed. The bold red design adds intensity to your moves.",
    },
    {
        color: 'White',
        image: '/assets/shoe1.png',
        name: 'NIKE JORDAN WHY NOT 6 - WHITE',
        price: 155,
        description: "This white edition brings a clean, classic look while offering maximum traction and comfort for dynamic performance on court.",
    },
    {
        color: 'Purple',
        image: '/assets/shoe3.png',
        name: 'NIKE JORDAN WHY NOT 6 - PURPLE',
        price: 165,
        description: "The purple version combines futuristic design with full-speed support. Perfect for standing out while playing fast and smart.",
    },
];

const sizes = ['8', '8.5', '9', '9.5', '10'];

const Hero = () => {
    const [selectedColor, setSelectedColor] = useState(shoeOptions[0]);
    const [selectedSize, setSelectedSize] = useState('8.5');

    const shoeRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        if (shoeRef.current) {
            gsap.fromTo(
                shoeRef.current,
                { opacity: 0, y: 30, scale: 0.9 },
                { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power2.out' }
            );
        }
        if (textRef.current) {
            gsap.fromTo(
                textRef.current,
                { opacity: 0, x: -30 },
                { opacity: 1, x: 0, duration: 0.5, delay: 0.1, ease: 'power2.out' }
            );
        }
    }, [selectedColor]);

    return (
        <div className="flex justify-center items-center px-4 py-8 sm:px-6 md:px-12 lg:px-20">
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-xl flex flex-col lg:flex-row max-w-6xl w-full gap-6">

                {/* Image */}
                <div className="flex-1 flex flex-col items-center justify-center">
                    <img
                        ref={shoeRef}
                        src={selectedColor.image}
                        alt="Nike shoe"
                        className="w-[220px] sm:w-[280px] md:w-[340px] lg:w-[400px] transition-all"
                    />
                    <div className="flex flex-wrap justify-center gap-4 mt-4">
                        {shoeOptions.map((opt, index) => (
                            <img
                                key={index}
                                src={opt.image}
                                alt={opt.color}
                                className={`w-16 h-12 object-contain cursor-pointer rounded-md border-2 ${selectedColor.color === opt.color ? 'border-black' : 'border-transparent'
                                    }`}
                                onClick={() => setSelectedColor(opt)}
                            />
                        ))}
                    </div>
                </div>

                {/* Infos produit */}
                <div className="flex-1 space-y-4" ref={textRef}>
                    <p className="text-sm font-semibold">Men's Shoes</p>
                    <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                        {selectedColor.name}
                    </h1>
                    <p className="text-xl sm:text-2xl font-bold">${selectedColor.price}</p>
                    <p className="text-gray-600 text-sm sm:text-base">
                        {selectedColor.description}
                    </p>

                    {/* Select Size */}
                    <div className="mt-4">
                        <label className="block text-sm font-medium">Select Size</label>
                        <select
                            value={selectedSize}
                            onChange={(e) => setSelectedSize(e.target.value)}
                            className="mt-1 block w-32 border border-gray-300 rounded-md shadow-sm p-2"
                        >
                            {sizes.map((size) => (
                                <option key={size} value={size}>US {size}</option>
                            ))}
                        </select>
                    </div>

                    {/* Add to cart */}
                    <button className="bg-black text-white px-6 py-3 rounded-md mt-4 hover:bg-gray-800 transition">
                        🛒 Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;

