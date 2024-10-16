import React from 'react';
import { Link } from 'react-router-dom';
import { IoChevronBackOutline } from 'react-icons/io5';
import { CiSearch } from 'react-icons/ci';
import { FiShoppingCart, FiBell, FiUser } from 'react-icons/fi';
import SearchBar from "../SearchBar/SearchBar";

const MobileNavbar = ({ isLoggedIn, isOpened, handleClick, isSearchOpen, setIsSearchOpen, theme, logout, toggleTheme }) => {
  return (
    <>
      {/* Hamburger */}
      <div className={`flex fixed items-center h-16 w-screen justify-between z-[10] ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} shadow-md px-4`}>
        <Link to={"/"} className="text-xl font-bold">
          eCommerce
        </Link>
        <div className="flex items-center gap-4">
          <button onClick={() => setIsSearchOpen(true)} className="text-xl">
            <CiSearch size={24} />
          </button>
          {isLoggedIn && (
            <>
              <Link to="/notifications" className="text-xl">
                <FiBell size={24} />
              </Link>
              <Link to="/profile" className="text-xl">
                <FiUser size={24} />
              </Link>
              <Link to="/cart" className="text-xl">
                <FiShoppingCart size={24} />
              </Link>
            </>
          )}
          <button
            className={`menu z-50 ${isOpened ? "opened" : ""}`}
            onClick={handleClick}
            aria-expanded={isOpened}
            aria-label="Main Menu"
          >
            <svg width="24" height="24" viewBox="0 0 100 100">
              <path
                className="line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                style={{ stroke: theme === 'dark' ? 'white' : 'black' }}
              />
              <path
                className="line line2"
                d="M 20,50 H 80"
                style={{ stroke: theme === 'dark' ? 'white' : 'black' }}
              />
              <path
                className="line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                style={{ stroke: theme === 'dark' ? 'white' : 'black' }}
              />
            </svg>
          </button>
        </div>
      </div>

      {isSearchOpen ? (
        <div
          className={`search-bar-mobile z-50 fixed top-0 w-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} h-screen transform transition-transform duration-500 ${
            isSearchOpen ? "slide-in" : ""
          }`}
        >
          <div className="w-[90%] my-3 mx-auto flex items-center justify-between">
            <IoChevronBackOutline
              onClick={() => setIsSearchOpen(false)}
              size={20}
              className="text-black font-thin"
            />
            <div className="w-[100%]">
              <SearchBar />
            </div>
          </div>
        </div>
      ) : (
        <div
          onClick={() => setIsSearchOpen(true)}
          className="search-icon z-50 right-4 top-4 fixed slide-out"
        >
          <CiSearch size={30} />
        </div>
      )}

      <nav
        className={`mobile-navbar ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} shadow-md transform transition-transform duration-500 fixed w-full top-0 z-10 ${
          !isOpened ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <div className="container flex flex-col h-screen items-center justify-between py-6 px-6">
          <div className="flex flex-col justify-between gap-4">
            <Link to={"/"} className="text-xl font-bold" onClick={handleClick}>
              eCommerce
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <Link to="/shop" className="relative group" onClick={handleClick}>
              Shop
            </Link>
            <Link to="/about" className="relative group" onClick={handleClick}>
              About
            </Link>
            <Link to="/contact" className="relative group" onClick={handleClick}>
              Contact
            </Link>
            <Link to="/cart" className="relative group" onClick={handleClick}>
              Cart
            </Link>
          </div>

          <div className="flex flex-col gap-10">
            {!isLoggedIn ? (
              <>
                <Link to="/login" className="px-5" onClick={handleClick}>
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="bg-teal-700 text-white px-5 py-2 rounded-lg"
                  onClick={handleClick}
                >
                  Signup
                </Link>
              </>
            ) : (
              <>
                <Link to="/profile" className="px-5" onClick={handleClick}>
                  Profile
                </Link>
                <button onClick={logout} className="bg-teal-700 text-white px-4 py-3 rounded-lg">
                  Log out
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileNavbar;