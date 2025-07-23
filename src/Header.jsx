import React, { useState } from 'react';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa'; //icons hamburgurs, cross, search

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    //const [searchOpen, setSearchOpen] = useState(false);

    return (
        <header className="bg-pink-100 rounded-2xl md:rounded-full mt-3 ml-2 mr-2 mb-3 shadow-md">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
            <div className="text-2xl font-bold text-pink-600">
                Scoopify.
            </div>
            <nav className="hidden md:flex items-center gap-6">
                <a href="#home" className="relative text-gray-700 font-medium px-2 py-1 transition duration-300 hover:text-pink-600 hover:underline underline-offset-8">Home</a>
                <a href="#about" className="relative text-gray-700 font-medium px-2 py-1 transition duration-300 hover:text-pink-600 hover:underline underline-offset-8">About</a>
                <a href="#flavors" className="relative text-gray-700 font-medium px-2 py-1 transition duration-300 hover:text-pink-600 hover:underline underline-offset-8">Flavors</a>
                {/* <button
                    onClick={() => setSearchOpen(!searchOpen)}
                    className="bg-pink-500 text-white font-medium px-5 py-2 rounded-full shadow-sm transition duration-300 hover:bg-pink-600 hover:scale-105 active:scale-95 cursor-pointer">
                    Search
                </button> */}
                {/* {searchOpen && (  //rendering the search input bar, using short-circuit condition operator '&&'. it checks if searchOpen is true so shows the input else renders nothing. 
                    <input type="text" placeholder="Search a flavor"
                    className="ml-4 px-4 py-2 bg-pink-200 text-gray-800 rounded-full transition duration-300 w-64 focus:outline-none"
                    />
                )} */}
            </nav>
            
            <div className="md:hidden flex items-center gap-4"> 
                {/* <button //these are for mobile 
                    onClick={() => setSearchOpen(!searchOpen)} 
                    className="text-pink-600 text-xl">
                    <FaSearch />
                </button> */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-2xl text-pink-600"> 
                    {menuOpen ? <FaTimes /> : <FaBars />} {/*ternary if else condition, 
                    if ? true : else */} 
                </button>
            </div>
        </div>
        {/* {searchOpen && (   //for mobile
            <div className="md:hidden px-4 pb-3">
            <input type="text" placeholder="Search a flavor"
                className="w-full px-4 py-2 bg-pink-200 text-gray-800 rounded-full transition duration-300 focus:outline-none"/>
            </div>
        )} */}
        {menuOpen && (    //for mobile
            <div className="md:hidden flex flex-col items-center gap-3 px-4 pb-4">
                <a href="#home" className="text-gray-700 font-medium px-4 py-2 rounded-md transition duration-300 hover:bg-pink-100 hover:text-pink-600 text-center">Home</a>
                <a href="#about" className="text-gray-700 font-medium px-4 py-2 rounded-md transition duration-300 hover:bg-pink-100 hover:text-pink-600 text-center">About</a>
                <a href="#flavors" className="text-gray-700 font-medium px-4 py-2 rounded-md transition duration-300 hover:bg-pink-100 hover:text-pink-600 text-center">Flavors</a>
            </div>
        )}
    </header>
    );
};

export default Header;
