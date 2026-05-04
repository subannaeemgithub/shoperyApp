import React, { useState, useEffect } from 'react'
import { CiLocationOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { GrFavorite } from "react-icons/gr";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link, useNavigate } from 'react-router-dom';
import { BsTelephone } from "react-icons/bs";


export default function  Navebar() {
  
  const [isMobileSearchActive, setIsMobileSearchActive] = useState(false);

  return (
    <>
    <section className="w-100">

      {/* Top Info Bar */}
      <div className="d-flex flex-wrap justify-content-center justify-content-md-between align-items-center text-muted small px-3 py-1 gap-2">

        <div className="d-flex align-items-center gap-2 cursor-pointer d-none d-md-flex">
          <CiLocationOn className="fs-6" />
          <p className="mb-0">
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </p>
        </div>

        <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">

          <select className="form-select form-select-sm border-0 bg-transparent w-auto">
            <option>Eng</option>
            <option>Urd</option>
            <option>Chi</option>
          </select>

          <select className="form-select form-select-sm border-0 bg-transparent w-auto">
            <option>USD</option>
            <option>RS</option>
            <option>CNY</option>
          </select>

          <span className="text-muted">|</span>

          <div className="d-flex align-items-center gap-1">
            <Link to="/login" className="text-decoration-none text-dark">
              <span className="hover-text">Sign in</span>
            </Link>
            <span>/</span>
            <Link to="/account" className="text-decoration-none text-dark">
              <span className="hover-text">Sign Up</span>
            </Link>
          </div>

        </div>
      </div>

      <hr className="my-0" />

      {/* Main Navbar */}
      <div className="d-flex flex-wrap flex-lg-nowrap justify-content-between align-items-center gap-2 px-3 px-md-4 py-2">

        {/* Logo */}
        <div className={`flex-shrink-0 ${isMobileSearchActive ? "d-none d-sm-block" : ""}`}>
          <img src="/Logo.png" className="img-fluid" style={{ height: "35px" }} alt="Logo" />
        </div>

        {/* Search Bar */}
        <div className={`flex-grow-1 border rounded bg-white d-flex align-items-center ${isMobileSearchActive ? "d-flex w-100" : "d-none d-md-flex"}`} style={{ maxWidth: "600px" }}>

          <div className="px-2">
            <CiSearch className="fs-5 text-muted" />
          </div>

          <input
            type="text"
            placeholder="Search"
            className="form-control form-control-sm border-0 shadow-none py-1"
            autoFocus={isMobileSearchActive}
          />

          <button className="btn btn-success btn-sm px-3 m-1">
            Search
          </button>
        </div>

        {/* Right Icons */}
        <div className={`align-items-center gap-2 flex-shrink-0 ${isMobileSearchActive ? "d-none" : "d-flex"}`}>

          {/* Mobile Search Icon */}
          <button
            className="btn btn-sm d-md-none p-1"
            onClick={() => setIsMobileSearchActive(true)}
          >
            <CiSearch className="fs-4" />
          </button>

          <button className="btn btn-sm p-1">
            <GrFavorite className="fs-4" />
          </button>

          <span className="d-none d-md-inline text-muted">|</span>

          {/* Cart */}
          <button className="btn btn-sm p-1 d-flex align-items-center gap-2 position-relative">

            <div className="position-relative">
              <HiOutlineShoppingBag className="fs-4" />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success" style={{ fontSize: "0.65rem" }}>
                2
              </span>
            </div>

            <div className="text-start d-none d-lg-block">
              <p className="mb-0 text-muted" style={{ fontSize: "0.75rem" }}>Shopping cart:</p>
              <p className="mb-0 fw-semibold small">$57.00</p>
            </div>

          </button>
        </div>

        {/* Cancel Button */}
        {isMobileSearchActive && (
          <button
            className="btn btn-link text-muted d-md-none"
            onClick={() => setIsMobileSearchActive(false)}
          >
            Cancel
          </button>
        )}

      </div>
     
     {/* Home , blog ,content type information navbar */}
      <nav className="navbar navbar-expand navbar-dark bg-dark px-2 px-md-4 py-1">
        <div className="container-fluid p-0 flex-wrap">

          <div className="d-flex flex-wrap justify-content-center justify-content-lg-between align-items-center w-100">
            
            {/* Navigation Links */}
            <div className="navbar-nav flex-row flex-wrap justify-content-center align-items-center gap-3 gap-md-4 py-1 py-lg-0 small">
              
              <div className="nav-item dropdown">
                <span className="nav-link dropdown-toggle text-white d-flex align-items-center gap-1 cursor-pointer" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Home
                </span>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Home</Link></li>
                </ul>
              </div>

              <div className="nav-item dropdown">
                <span className="nav-link dropdown-toggle text-white d-flex align-items-center gap-1 cursor-pointer" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop
                </span>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/shop">Shop</Link></li>
                </ul>
              </div>

              <div className="nav-item dropdown">
                <span className="nav-link dropdown-toggle text-white d-flex align-items-center gap-1 cursor-pointer" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pages
                </span>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/pages">Pages</Link></li>
                </ul>
              </div>

              <div className="nav-item dropdown">
                <span className="nav-link dropdown-toggle text-white d-flex align-items-center gap-1 cursor-pointer" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Blog
                </span>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/blog">Blog</Link></li>
                </ul>
              </div>

              <Link to="/about" className="nav-link text-white">About Us</Link>
              <Link to="/contact" className="nav-link text-white d-none d-md-block">Contact Us</Link>

            </div>

            {/* Contact Info */}
            <div className="d-none d-md-flex align-items-center gap-2 text-white py-1 py-lg-0 small">
              <BsTelephone className="fs-6" />
              <span className="fw-semibold">(219) 555-0114</span>
            </div>

          </div>
        </div>
      </nav>
    </section>
    
    </>
  )
}
