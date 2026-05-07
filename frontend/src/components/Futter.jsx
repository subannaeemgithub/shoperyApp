import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaLeaf } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Futter() {
  return (
    <footer className="w-100">
      {/* 1. Newsletter Section */}
      <div className="bg-light py-4">
        <div className="container">
          <div className="row align-items-center g-3">
            <div className="col-lg-5">
              <h5 className="fw-bold mb-1">Subscribe our Newsletter</h5>
              <p className="text-muted small mb-0" style={{ fontSize: "0.85rem" }}>
                Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              </p>
            </div>
            <div className="col-lg-7">
              <div className="d-flex flex-wrap align-items-center gap-3 justify-content-lg-end">
                <div className="input-group" style={{ maxWidth: "400px" }}>
                  <input
                    type="email"
                    className="form-control rounded-pill-start border-end-0 px-3 py-1"
                    placeholder="Your email address"
                    style={{ borderRadius: "50px 0 0 50px", fontSize: "0.9rem" }}
                  />
                  <button
                    className="btn btn-success px-4 py-1 fw-bold"
                    style={{ borderRadius: "50px", marginLeft: "-40px", zIndex: 5, fontSize: "0.9rem" }}
                  >
                    Subscribe
                  </button>
                </div>
                <div className="d-flex gap-2">
                  <div className="social-icon bg-success text-white" style={{ width: "30px", height: "30px" }}><FaFacebookF size={14} /></div>
                  <div className="social-icon" style={{ width: "30px", height: "30px" }}><FaTwitter size={14} /></div>
                  <div className="social-icon" style={{ width: "30px", height: "30px" }}><FaPinterestP size={14} /></div>
                  <div className="social-icon" style={{ width: "30px", height: "30px" }}><FaInstagram size={14} /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Links */}
      <div className="bg-dark text-white py-4">
        <div className="container">
          <div className="row g-3">
            {/* Logo & Info */}
            <div className="col-lg-3 col-md-6">
              <div className="d-flex align-items-center gap-2 mb-2">
                <FaLeaf className="text-success fs-4" />
                <h4 className="fw-bold mb-0">Ecobazar</h4>
              </div>
              <p className="small opacity-50 mb-3" style={{ fontSize: "0.85rem" }}>
                Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui.
              </p>
              <div className="small border-bottom border-success d-inline-block pb-1">
                <span className="fw-bold" style={{ fontSize: "0.85rem" }}>(219) 555-0114</span>
                <span className="mx-2 opacity-50">or</span>
                <span className="fw-bold" style={{ fontSize: "0.85rem" }}>Proxy@gmail.com</span>
              </div>
            </div>

            {/* Links Columns */}
            <div className="col-lg-2 col-md-6 col-6">
              <h6 className="fw-bold mb-3" style={{ fontSize: "0.95rem" }}>My Account</h6>
              <ul className="list-unstyled footer-links">
                <li><Link to="#">My Account</Link></li>
                <li><Link to="#">Order History</Link></li>
                <li><Link to="#">Shopping Cart</Link></li>
                <li><Link to="#">Wishlist</Link></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 col-6">
              <h6 className="fw-bold mb-3" style={{ fontSize: "0.95rem" }}>Helps</h6>
              <ul className="list-unstyled footer-links">
                <li><Link to="#">Contact</Link></li>
                <li><Link to="#">Faqs</Link></li>
                <li><Link to="#">Terms & Condition</Link></li>
                <li><Link to="#">Privacy Policy</Link></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 col-6">
              <h6 className="fw-bold mb-3" style={{ fontSize: "0.95rem" }}>Proxy</h6>
              <ul className="list-unstyled footer-links">
                <li><Link to="#">About</Link></li>
                <li><Link to="#">Shop</Link></li>
                <li><Link to="#">Product</Link></li>
                <li><Link to="#">Track Order</Link></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 col-6">
              <h6 className="fw-bold mb-3" style={{ fontSize: "0.95rem" }}>Categories</h6>
              <ul className="list-unstyled footer-links">
                <li><Link to="#">Fruit & Vegetables</Link></li>
                <li><Link to="#">Meat & Fish</Link></li>
                <li><Link to="#">Bread & Bakery</Link></li>
                <li><Link to="#">Beauty & Health</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Bar */}
      <div className="bg-dark text-white border-top border-secondary py-2">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
            <p className="mb-0" style={{ fontSize: "0.75rem", opacity: "0.5" }}>
              Ecobazar eCommerce © 2021. All Rights Reserved
            </p>
            <div className="d-flex gap-3 align-items-center opacity-75 grayscale-icons">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" height="12" alt="PayPal" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" height="10" alt="Visa" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" height="15" alt="Mastercard" />
              <span style={{ fontSize: "0.75rem" }}>Secure Payment</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .social-icon {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          cursor: pointer;
          transition: 0.3s;
          color: #333;
        }
        .social-icon:hover {
          background-color: #28a745;
          color: white;
        }
        .footer-links li {
          margin-bottom: 8px;
        }
        .footer-links a {
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          font-size: 0.8rem;
          transition: 0.3s;
        }
        .footer-links a:hover {
          color: #28a745;
          padding-left: 3px;
        }
        .grayscale-icons img {
          filter: grayscale(1) brightness(2);
        }
        .rounded-pill-start {
          border-radius: 50px 0 0 50px !important;
        }
      `}</style>
    </footer>
  );
}
