  import React, { useState, useEffect, useContext } from "react";
  import { Link, useNavigate, useLocation } from "react-router-dom";
  import { Avatar, IconButton, Badge } from '@mui/material';
  import { Search, ShoppingCart, ExpandMore, AccountCircle } from '@mui/icons-material';
  import MobileNavbar from "./MobileNavbar";
  import api_call from "../../Functions/api_call";
  import NavMenu from "./NavMenu";
  import { ThemeContext } from "../../Pages/ThemeContext";
  import themeConfig from "../../Functions/theme";
  import "./Navbar.css";
  
  const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [device, setDevice] = useState("Desktop");
    const [isOpened, setIsOpened] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();
    const location = useLocation().pathname;
    const [onlineStatus, setOnlineStatus] = useState(true);
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { authuser } = api_call();
  
    const handleClick = () => {
      setIsOpened(!isOpened);
    };
  
    const handleOnlineStatusToggle = () => {
      setOnlineStatus(!onlineStatus);
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
  
    useEffect(() => {
      document.body.style.backgroundColor = theme === "dark" ? "black" : "#fff";
    }, [theme]);
  
    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleProfileMenuClose = () => {
      setAnchorEl(null);
    };
  
    useEffect(() => {
      localStorage.setItem('theme', theme);
    }, [theme]);
  
    const currentTheme = themeConfig[theme];
  
    return device === "Desktop" ? (
      <nav className={`fixed w-full z-10 top-0 themeTransition rounded-b-[20px] ${currentTheme.background} ${currentTheme.text}`}>
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-2">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              {/* <img src="/path/to/logo.png" alt="logo" className="h-8" /> */}
              <span className={`text-lg font-semibold ${currentTheme.text}`}>eCommerce</span>
            </Link>
          </div>
  
          {/* Center Section - Search Bar */}
          <div className="hidden lg:flex flex-1 items-center mx-4">
            <select className={`bg-gray-800 text-white text-sm px-2 py-1 rounded-l-md focus:outline-none ${currentTheme.background} ${currentTheme.text}`}>
              <option value="all">All</option>
              {/* Add more options here */}
            </select>
            <input
              type="text"
              className={`flex-1 py-2 px-4 focus:outline-none ${currentTheme.text}  `}
              placeholder="Search eCommerce"
            />
            <button className={`px-4 py-2 rounded-r-md ${currentTheme.buttonBackground}`}>
              <Search className={currentTheme.text} />
            </button>
          </div>
  
          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}

  
            {/* Account & Lists */}
            <div className="flex flex-col items-start cursor-pointer">
              <span className={`text-xs ${currentTheme.text}`}>Hello, Nishant</span>
              <div className="flex items-center space-x-1">
                <span className={`font-bold text-sm ${currentTheme.text}`}>Account & Lists</span>
                <ExpandMore className={currentTheme.text} />
              </div>
            </div>
  
            {/* Returns & Orders */}
            <div className="flex flex-col items-start cursor-pointer">
              <span className={`text-xs ${currentTheme.text}`}>Returns</span>
              <span className={`font-bold text-sm ${currentTheme.text}`}>& Orders</span>
            </div>
  
            {/* Cart */}
            <div className="cursor-pointer">
              <IconButton>
                <Badge badgeContent={4} color="error">
                  <ShoppingCart className={currentTheme.text} />
                </Badge>
              </IconButton>
            </div>
          </div>
        </div>
      </nav>
    ) : (
      <MobileNavbar isLoggedIn={isLoggedIn} isOpened={isOpened} handleClick={handleClick} isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} theme={theme} logout={logout} />
    );
  };
  
  export default Navbar;