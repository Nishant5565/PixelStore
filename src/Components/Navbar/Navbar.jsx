import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Avatar, IconButton, Badge } from "@mui/material";
import { Search, ShoppingCart, ExpandMore, AccountCircle } from "@mui/icons-material";
import MobileNavbar from "./MobileNavbar";
import api_call from "../../Functions/api_call";
import "./Navbar.css";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [device, setDevice] = useState("Desktop");
  const [isOpened, setIsOpened] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const { authuser } = api_call();

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  useEffect(() => {
    const user = localStorage.getItem("token");
    if (user) {
      authuser().then((data) => {
        if (data) {
          if (data.theme !== theme) {
            toggleTheme();
          }
          setIsLoggedIn(true);
          setUserInfo(data);
        }
      });
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  useEffect(() => {
    if (window.innerWidth < 900) {
      setDevice("Mobile");
    }
  }, []);

 

  return device === "Desktop" ? (
    <nav className={`fixed w-full z-20 top-0 shadow-lg rounded-b-xl`}>
      <div className="flex items-center justify-between max-w-7xl mx-auto px-8 py-6 space-x-8">
        {/* Left Section - Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className={`text-3xl font-bold  tracking-wider`}>
              PixelStore
            </span>
          </Link>
        </div>

        {/* Center Section - Search Bar */}
        <div className="hidden lg:flex flex-1 items-center mx-8 space-x-3">
          <select
            className={`rounded-l-full bg-gray-100 text-sm px-6 py-3 focus:outline-none `}
          >
            <option value="all">All Categories</option>
          </select>
          <input
            type="text"
            className={`flex-1 py-3 px-6 rounded-none focus:outline-none border`}
            placeholder="Search PixelStore"
          />
          <button className={`px-6 py-3 rounded-r-full  transition-all duration-300`}>
            <Search className='' />
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-8">
          {/* Account & Lists */}
          <div className="flex flex-col items-start cursor-pointer">
            <span className={`text-sm `}>Hello, {userInfo ? userInfo.name : "Sign In"}</span>
            <div className="flex items-center space-x-1">
              <span className={`font-bold text-sm `}>
                Account & Lists
              </span>
              <ExpandMore className='' />
            </div>
          </div>

          {/* Cart */}
          <div className="cursor-pointer">
            <IconButton>
              <Badge badgeContent={4} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>

          {/* Toggle Theme Button */}
          {
            isLoggedIn ? (
              <div className="cursor-pointer">
                <IconButton>
                  <AccountCircle  />
                </IconButton>
              </div>
            ) : (
              ''
            )
          }
        </div>
      </div>
    </nav>
  ) : (
    <MobileNavbar
      isLoggedIn={isLoggedIn}
      isOpened={isOpened}
      handleClick={handleClick}
      isSearchOpen={isSearchOpen}
      setIsSearchOpen={setIsSearchOpen}
      theme={theme}
      logout={logout}
    />
  );
};

export default Navbar;
