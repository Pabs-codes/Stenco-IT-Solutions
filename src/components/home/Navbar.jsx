import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  // Returns classes for active nav item
  const isActive = (path) =>
    location.pathname === path ? "text-indigo-600 font-semibold" : "";

  return (
    <>
      <nav className="navbar navbar-expand-xl nav-crev">
        <div className="container">
          <Link className="logo icon-img-100" to="/">
            <img src="/dark/assets/imgs/logo-light.png" alt="logo" />
          </Link>

          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={`nav-link ${isActive("/")}`} to="/">
                  Home
                </Link>
              </li>

              {/* Services Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="servicesDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Services
                </a>
                <div className="dropdown-menu" aria-labelledby="servicesDropdown">
                  <Link className={`dropdown-item ${isActive("/services/web-development")}`} to="/services/web-development">Web Development</Link>
                  <Link className={`dropdown-item ${isActive("/services/mobile-app-development")}`} to="/services/mobile-app-development">Mobile App Development</Link>
                  <Link className={`dropdown-item ${isActive("/services/social-media-marketing")}`} to="/services/social-media-marketing">Social Media Marketing</Link>
                  <Link className={`dropdown-item ${isActive("/services/digital-marketing")}`} to="/services/digital-marketing">Digital Marketing</Link>
                  <Link className={`dropdown-item ${isActive("/services/pos-systems")}`} to="/services/pos-systems">POS Systems</Link>
                  <Link className={`dropdown-item ${isActive("/services/cloud-pos-systems")}`} to="/services/cloud-pos-systems">Cloud Based POS Systems</Link>
                  <Link className={`dropdown-item ${isActive("/services/inventory-systems")}`} to="/services/inventory-systems">Inventory Systems</Link>
                  <Link className={`dropdown-item ${isActive("/services/content-creating")}`} to="/services/content-creating">Content Creating</Link>
                  <Link className={`dropdown-item ${isActive("/services/seo")}`} to="/services/seo">SEO</Link>
                  <Link className={`dropdown-item ${isActive("/services/customized-software-development")}`} to="/services/customized-software-development">Custom Software Development</Link>
                  <Link className={`dropdown-item ${isActive("/services/graphic-designing")}`} to="/services/graphic-designing">Graphic Designing</Link>
                </div>
              </li>

              <li className="nav-item">
                <Link className={`nav-link ${isActive("/about")}`} to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive("/portfolio")}`} to="/portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive("/team")}`} to="/team">Team</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive("/contact")}`} to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="topnav-menu"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="menu-icon cursor-pointer">
              <span className="icon ti-align-right"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Hamenu */}
      <div className="hamenu one-scroll">
        <div className="logo icon-img-100">
          <img src="/dark/assets/imgs/logo-light.png" alt="logo" />
        </div>
        <div className="close-menu cursor-pointer ti-close"></div>
        <div className="container">
          <ul className="submenu flex flex-col gap-2">
            <li><Link className={isActive("/")} to="/">Home</Link></li>
            <li><Link className={isActive("/services/web-development")} to="/services/web-development">Web Development</Link></li>
            <li><Link className={isActive("/services/mobile-app-development")} to="/services/mobile-app-development">Mobile App Development</Link></li>
            <li><Link className={isActive("/services/social-media-marketing")} to="/services/social-media-marketing">Social Media Marketing</Link></li>
            {/* Add other services here */}
            <li><Link className={isActive("/about")} to="/about">About</Link></li>
            <li><Link className={isActive("/portfolio")} to="/portfolio">Portfolio</Link></li>
            <li><Link className={isActive("/team")} to="/team">Team</Link></li>
            <li><Link className={isActive("/contact")} to="/contact">Contact</Link></li>
          </ul>
          <div className="cont-info mt-6">
            <h6>Address</h6>
            <p>No: 357, Kandy Road, Peliyagoda, Sri Lanka</p>
            <h6 className="mt-4">Social Media</h6>
            <p>FB | IG | LinkedIn | X</p>
            <h6 className="mt-4">Contact</h6>
            <p>info@stencoitsolutions.com</p>
            <p>+94 77 997 6585</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
