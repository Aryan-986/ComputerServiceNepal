import { Link } from "react-router-dom";
import computerimage from "../assets/computerimage.png"
import onlinepay from "../assets/onlinepayment.png"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-medium mb-4">COMPUTER SHOP NEPAL</h3>
          <div>
            <Link to = "/">
          <img
            src={computerimage}
            alt="compimg"
            className="w-25 h-15 cursor-pointer"
          />
          </Link>
          </div>
          <Link to = "/">
          <p className="mb-4 text-yellow-500">contact@computershopnepal.com</p>
          </Link>
          <p className="mb-4">+977-1- 4583689/ 9851095326</p>
          <p>New Baneshwor, Kathmandu, Nepal</p>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">QUICK LINKS</h3>
          <ul className="space-y-2">
            <li><a href="https://computershopnepal.com/about-us" className="hover:text-gray-400">About Us</a></li>
            <li><a href="https://computershopnepal.com/contact-us" className="hover:text-gray-400">Contact Us</a></li>
            <li><a href="https://computershopnepal.com/warranty-information" className="hover:text-gray-400">Warranty Information</a></li>
            <li><a href="https://computershopnepal.com/blog" className="hover:text-gray-400">Blog</a></li>
            <li><a href="https://computershopnepal.com/privacy-policy" className="hover:text-gray-400">Privacy policy</a></li>
            <li><a href="https://computershopnepal.com/terms-of-service" className="hover:text-gray-400">Terms & Condition</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">CATEGORIES</h3>
          <ul className="space-y-2">
            <li><a href="https://computershopnepal.com/category/laptops" className="hover:text-gray-400">Laptops</a></li>
            <li><a href="https://computershopnepal.com/category/desktops" className="hover:text-gray-400">Desktops</a></li>
            <li><a href="https://computershopnepal.com/category/apple-store" className="hover:text-gray-400">Apple Store</a></li>
            <li><a href="https://computershopnepal.com/category/monitors" className="hover:text-gray-400">Monitors</a></li>
            <li><a href="https://computershopnepal.com/category/components" className="hover:text-gray-400">Components</a></li>
            <li><a href="https://computershopnepal.com/category/accessories" className="hover:text-gray-400">Accessories</a></li>
            <li><a href="https://computershopnepal.com/category/gaming" className="hover:text-gray-400">Gaming</a></li>
            <li><a href="https://computershopnepal.com/category/electronics" className="hover:text-gray-400">Electronics</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">WE ACCEPTS</h3>
          <div className="flex items-center space-x-4">
            <img
            src= {onlinepay}
            alt = "onlinepayimg"
            className=""
            />
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-center space-x-4 text-gray-400"> 
        <a href="https://www.instagram.com/laptopservicenepal/" target="_blank" rel="noopener noreferrer">
        <FaInstagram style={{ fontSize:"30px", color: "#E4405F " }}/>
        </a>
        <a href="https://www.facebook.com/gaminglaptopservicecenter " target="_blank" rel="noopener noreferrer">
          <FaFacebook style={{ fontSize:"30px", color: "#0A1172 " }}/>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <IoLogoYoutube style={{ fontSize:"30px", color: "#E4405F" }}/>
        </a>
        <a href="https://www.tiktok.com " target="_blank" rel="noopener noreferrer">
          <FaTiktok style={{ fontSize:"30px", color: "#69C9D0" }}/>
        </a>
      </div>
      <div className="mt-8 text-center text-gray-400">
        <p>&copy; Copyright {new Date().getFullYear()}. All Rights Reserved.</p>
        <div className="mt-4 text-center text-gray-600">
          <p>
            Devloped with love for Amass computershop nepal by Aryan.k
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;