import React, { useState } from "react";
import { FaHome, FaInfoCircle, FaServicestack } from "react-icons/fa";
import { FaMoon, FaClipboard, FaBell, FaChevronDown } from "react-icons/fa";
import logo from "../../photos/logo-light.png";
import smlogo from "../../photos/logo-sm.png";
import { ProductInfo } from "../add-product";


export function Dashboard() {
  const [isOpen, setIsOpen] = useState(true); // Start as open for full side panel
  const [isDropdownOpen, setDropdownOpen] = useState(false); // Dropdown for profile
  const [isDarkMode, setDarkMode] = useState(false); // Dark mode toggle
  const [isFullscreen, setFullscreen] = useState(false); // Fullscreen toggle
  const [isNotificationOpen, setNotificationOpen] = useState(false); // Notification dropdown state
  const [currentPage, setCurrentPage] = useState("dashboard"); // New state to track current page

  const toggleSidePanel = () => {
    setIsOpen(!isOpen);
  };

  const handleLogoClick = () => {
    console.log("Logo button clicked!");
    // Add your desired action here
  };
  

  const handleBellClick = () => {
    setNotificationOpen(!isNotificationOpen); // Toggle notification dropdown visibility
  };

  const handleClipboardClick = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setFullscreen(!isFullscreen);
  };

  const handleMoonClick = () => {
    setDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode); // Toggle dark mode
  };

  // Function to change the page
  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div
      className={`relative flex  ${
        isDarkMode ? "bg-[#2d313e] text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      {/* Side Panel */}
      <div
        className={`fixed top-0 left-0 h-full transition-all duration-0 ease-in-out shadow-md ${
          isDarkMode ? "bg-[#2a2e3a]" : "bg-white"
        } ${isOpen ? "w-64" : "w-16"}`}
      >
        <div className="p-3">
          {/* Logo as Button */}
          <button
            onClick={handleLogoClick}
            className="focus:outline-none focus:ring-[#34c38f3b]"
          >
            <img
              src={isOpen ? logo : smlogo}
              alt="Side Panel Logo"
              className={` ease-in-out ${
                isOpen ? "w-36 pl-4 pt-4" : "w-8 pt-3"
              }`}
            />
          </button>
          <ul className={`mt-10 space-y-2  ${isOpen ? "ml-2" : "ml-0"}`}>
            <li
              className={`group flex items-center p-3 rounded hover:bg-[#34c38f15] transition duration-300 ease-in-out ${
                isOpen ? "" : "justify-center"
              }`}
              onClick={() => changePage("dashboard")} // Change page on click
            >
              <FaHome
                className={`text-black group-hover:text-[#34c38f] transition duration-300 ease-in-out ${
                  isDarkMode ? "text-gray-400" : "text-black"
                }`}
              />
              {isOpen && (
                <a
                  href="#Dashboard"
                  className={`${
                    isDarkMode ? "text-gray-400" : "text-black"
                  } ml-4 block text-black group-hover:text-[#34c38f] transition duration-300 ease-in-out`}
                >
                  Dashboard
                </a>
              )}
            </li>
            <li
              className={`group flex items-center p-3 rounded hover:bg-[#34c38f15] transition duration-300 ease-in-out ${
                isOpen ? "" : "justify-center"
              }`}
              onClick={() => changePage("addProduct")} // Change page on click
            >
              <FaInfoCircle
                className={`text-black group-hover:text-[#34c38f] transition duration-300 ease-in-out ${
                  isDarkMode ? "text-gray-400" : "text-black"
                }`}
              />
              {isOpen && (
                <a
                  href="#Add Product"
                  className={`${
                    isDarkMode ? "text-gray-400" : "text-black"
                  } ml-4 block text-black group-hover:text-[#34c38f] transition duration-300 ease-in-out`}
                >
                  Add Product
                </a>
              )}
            </li>
            <li
              className={`group flex items-center p-3 rounded hover:bg-[#34c38f15] transition duration-300 ease-in-out ${
                isOpen ? "" : "justify-center"
              }`}
            >
              <FaServicestack
                className={`text-black group-hover:text-[#34c38f] transition duration-300 ease-in-out ${
                  isDarkMode ? "text-gray-400" : "text-black"
                }`}
              />
              {isOpen && (
                <a
                  href="#services"
                  className={`${
                    isDarkMode ? "text-gray-400" : "text-black"
                  } ml-4 block text-black group-hover:text-[#34c38f] transition duration-300 ease-in-out`}
                >
                  Manage Inventory
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>

      {/* Content */}
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isOpen ? "ml-64" : "ml-16"
        }`}
      >
        {/* Top Navbar */}
        <nav
          className={` table-fixed w-full flex items-center justify-between p-4 ${
            isDarkMode ? "bg-[#2a2e3a]" : "bg-[#FFFFFF]"
          } transition-all duration-300`}
        >
          {/* Toggle Button - Now on Left Side */}
          <button
            className={`text-2xl ${
              isDarkMode ? "text-[#f5f6f8]" : "text-black"
            }`}
            onClick={toggleSidePanel}
          >
            ☰
          </button>

          {/* Icons and Profile */}
          <div className="flex items-center space-x-6">
            {/* Moon Icon */}
            <FaMoon
              className="text-gray-600 text-lg cursor-pointer"
              onClick={handleMoonClick}
            />

            {/* Clipboard Icon */}
            <FaClipboard
              className="text-gray-600 text-lg cursor-pointer"
              onClick={handleClipboardClick}
            />

            {/* Notification Bell */}
            <div className="relative">
              <FaBell
                className="text-gray-600 text-lg cursor-pointer"
                onClick={handleBellClick}
              />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full"></span>
            </div>

            {/* Profile Section */}
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              <img
                src={smlogo}
                alt="Profile of Hamza"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-gray-700 font-medium">Huzaifa</span>
              <FaChevronDown
                className={`text-gray-600 text-sm transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>
        </nav>

        {/* Page Content */}
        {currentPage === "dashboard" && (
          <div
            className={`p-8 h-screen ${
              isDarkMode ? "bg-[#2d313e]" : "bg-[#f5f6f8]"
            }`}
          >
            <h1 className="text-xl font-semibold pt-16">Dasboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
              {/* Box 1 */}
              <div
                className={`flex flex-col items-start p-10  rounded-lg shadow-md ${
                  isDarkMode ? "bg-[#2d313e]" : "bg-white"
                }`}
              >
                <p className="text-left">₨0.00</p>
                <p className="text-left text-xs text-gray-600 pt-1 pb-5">
                  Total Revenue
                </p>
                <p className="text-left">
                  <span className="text-red-600">0.00%</span> since last week
                </p>
              </div>

              {/* Box 2 */}
              <div
                className={`flex flex-col items-start p-10  rounded-lg shadow-md ${
                  isDarkMode ? "bg-[#2d313e]" : "bg-white"
                }`}
              >
                <p className="text-left">0</p>
                <p className="text-left text-xs text-gray-600 pt-1 pb-5">
                  Orders
                </p>
                <p className="text-left">
                  <span className="text-red-600">0.00%</span> since last week
                </p>
              </div>

              {/* Box 3 */}
              <div
                className={`flex flex-col items-start p-10  rounded-lg shadow-md ${
                  isDarkMode ? "bg-[#2d313e]" : "bg-white"
                }`}
              >
                <p className="text-left">0</p>
                <p className="text-left text-xs text-gray-600 pt-1 pb-5">
                  Customers
                </p>
                <p className="text-left">
                  <span className="text-red-600">0.00%</span> since last week
                </p>
              </div>

              {/* Box 4 */}
              <div
                className={`flex flex-col items-start p-10  rounded-lg shadow-md ${
                  isDarkMode ? "bg-[#2d313e]" : "bg-white"
                }`}
              >
                <p className="text-left">0</p>
                <p className="text-left text-xs text-gray-600 pt-1 pb-5">
                  Growth
                </p>
                <p className="text-left">
                  <span className="text-red-600">0.00%</span> since last week
                </p>
              </div>
            </div>
          </div>
        )}
        {currentPage === "addProduct" && <ProductInfo isDarkMode={isDarkMode} />}
      </div>
    </div>
  );
}
