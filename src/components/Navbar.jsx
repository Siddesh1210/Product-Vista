import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/images/logo.jpg'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return (
    <nav className="bg-white sticky top-0 z-40">
      <div className="flex justify-between items-center p-4 shadow-md">
        <div className="flex items-center space-x-3 ml-2">
          <img src={logo} width="50px" className="filter grayscale" loading="lazy"/>
          <span className="text-xl inline font-extrabold text-black">Product-Vista</span>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="flex space-x-2 md:space-x-4 lg:hidden items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <i className="bi bi-list text-3xl text-primary"></i>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed z-10 top-0 left-0 h-full w-64 bg-gray-100 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 lg:hidden`}
      >
        <button className="absolute top-4 right-4 space-x-2" onClick={() => setIsOpen(false)}>
            <i className="bi bi-x text-4xl text-gray-800"></i>
        </button>
        <ul className="flex flex-col space-y-4 p-6 mt-8">
          <Link onClick={() => setIsOpen(false)} to="/" className={`p-2 rounded text-xl cursor-pointer ${ location.pathname === "/" ? "bg-primary text-white" : "text-primary" }`}><i className="bi bi-grid"></i> &nbsp;Products</Link>
          <Link onClick={() => setIsOpen(false)} to="/compare-products" className={`p-2 rounded text-xl cursor-pointer ${ location.pathname === "/compare-products" ? "bg-primary text-white" : "text-primary" }`}><i className="bi bi-wallet2"></i> &nbsp;Compare</Link>
        </ul>
      </div>
    </nav>
  );
}


export default Navbar;
