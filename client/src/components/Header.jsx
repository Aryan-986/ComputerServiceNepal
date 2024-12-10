import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import logo from "../assets/computershoplogo.png";
import Search from "./Search";
import { FaUserAlt } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import useMobile from "../hooks/useMobile";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import UserMenu from "./UserMenu";

const Header = () => {
  const [isMobile] = useMobile();
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector((state) => state?.user);
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const redirectToLoginPage = () => {
    navigate("/login");
  };

  const handleCloseUserMenu = () => {
    setOpenUserMenu(false);
  };

  const handleMobileUser = () => {
    if (!user?._id) {
      navigate("/login");
      return;
    }
    navigate("/user");
  };

  // Scroll to top on location change
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location]);

  return (
    <header className="h-auto lg:h-28 lg:shadow-md sticky top-0 z-40 flex flex-col justify-center gap-1 bg-blue-900">
      {!(location.pathname === "/search" && isMobile) && (
        <div className="container mx-auto flex items-center px-2 justify-between">
          {/* Logo */}
          <div className="h-full">
            <Link to={"/"} className="h-full flex justify-center items-center">
              <img
                src={logo}
                width={170}
                height={60}
                alt="logo"
                className="hidden lg:block"
              />
              <img
                src={logo}
                width={120}
                height={60}
                alt="logo"
                className="lg:hidden"
              />
            </Link>
          </div>

          {/* Search */}
          <div className="hidden lg:block">
            <Search />
          </div>

          {/* User Section */}
          <div className="flex items-center gap-4">
            {/* Hamburger Menu for Mobile */}
            <button
              className="lg:hidden text-neutral-600"
              onClick={() => setShowMobileMenu((prev) => !prev)}
            >
              <FiMenu size={30} className="text-white" />
            </button>

            {/* User Icon for Mobile */}
            <button className="text-neutral-600 lg:hidden" onClick={handleMobileUser}>
              <FaUserAlt size={25} />
            </button>

            {/* Desktop User Menu */}
            <div className="hidden lg:flex items-center gap-5">
              {user?._id ? (
                <div className="relative">
                  <div
                    onClick={() => setOpenUserMenu((prev) => !prev)}
                    className="flex select-none items-center gap-2 cursor-pointer"
                  >
                    <p className="font-extrabold text-yellow-500 text-2xl">Account</p>
                    {openUserMenu ? (
                      <GoTriangleUp size={30} className="text-yellow-500" />
                    ) : (
                      <GoTriangleDown size={30} className="text-yellow-500" />
                    )}
                  </div>
                  {openUserMenu && (
                    <div className="absolute right-0 top-12">
                      <div className="bg-white rounded p-4 min-w-52 lg:shadow-lg">
                        <UserMenu close={handleCloseUserMenu} />
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={redirectToLoginPage}
                  className="px-2 font-extrabold text-yellow-500 text-2xl "
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="bg-blue-600 py-2 lg:hidden">
          {/* Close Icon */}
          <div className="flex justify-end px-4">
            <button
              onClick={() => setShowMobileMenu(false)}
              className="text-white text-3xl"
            >
              <IoClose />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center gap-4 mt-2">
            <Link to="/" className="text-lg font-medium text-yellow-500 hover:text-yellow-700">
              Home
            </Link>
            <Link to="/repair" className="text-lg font-medium text-yellow-500 hover:text-yellow-700">
              Repair
            </Link>
            <Link to="/testomonial" className="text-lg font-medium text-yellow-500 hover:text-yellow-700">
              Testimonial
            </Link>
            <Link to="/about-us" className="text-lg font-medium text-yellow-500 hover:text-yellow-700">
              About Us
            </Link>
            <Link to="/search" className="text-lg font-medium text-yellow-500 hover:text-yellow-700">
              Search
            </Link>
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="bg-blue-600 py-2 hidden lg:block">
        <div className="container mx-auto flex justify-center gap-8">
          <Link to="/" className="text-lg font-medium text-yellow-500 hover:text-yellow-700">
            Home
          </Link>
          <Link to="/repair" className="text-lg font-medium text-yellow-500 hover:text-yellow-700">
            Repair
          </Link>
          <Link to="/testomonial" className="text-lg font-medium text-yellow-500 hover:text-yellow-700">
            Testimonial
          </Link>
          <Link to="/about-us" className="text-lg font-medium text-yellow-500 hover:text-yellow-700">
            About Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
