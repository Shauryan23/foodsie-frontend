import React, { useState } from 'react';
import MenuButton from './MenuButton';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav>
        <div className="nav-container">
          <div className="flex justify-between mx-10 mt-0 pt-4 mb-3 pb-2 animate-slide-down items-center">
            <div>
              <a href="/" className="flex items-center logo-grow">
                <img
                  src="https://img.icons8.com/stencil/32/chef-hat.png"
                  alt="Foodsie-logo"
                  style={{
                    transform: 'rotate(90deg)',
                  }}
                />
                <span className="pl-1 font-vastshadow text-2xl logo-offset">
                  Foodsie
                </span>
              </a>
            </div>
            <div>
              <span className="px-8">Home</span>
              <span className="px-8">Menu</span>
              <span className="px-8">Contact</span>
              <span className="px-8">Shop</span>
            </div>
            <div className="z-20" onClick={() => setMenuOpen(!menuOpen)}>
              <MenuButton />
            </div>
          </div>
          <div
            className="nav-overlay z-10"
            style={{
              top: menuOpen ? '0' : '-100%',
              transitionDelay: menuOpen ? '0s' : '0s',
            }}
          >
            <ul className="nav-links">
              <li className="nav-item">
                <a
                  href="/"
                  style={{
                    top: menuOpen ? '0' : '120px',
                    transitionDelay: menuOpen ? '0.8s' : '0s',
                  }}
                >
                  Account
                </a>
                <div className="nav-item-wrapper"></div>
              </li>
              <li className="nav-item">
                <a
                  href="/Shop"
                  style={{
                    top: menuOpen ? '0' : '120px',
                    transitionDelay: menuOpen ? '1s' : '0s',
                  }}
                >
                  Shop
                </a>
                <div className="nav-item-wrapper"></div>
              </li>
              <li className="nav-item">
                <a
                  href="/"
                  style={{
                    top: menuOpen ? '0' : '120px',
                    transitionDelay: menuOpen ? '1.2s' : '0s',
                  }}
                >
                  Contact
                </a>
                <div className="nav-item-wrapper"></div>
              </li>
              <li className="nav-item">
                <a
                  href="/"
                  style={{
                    top: menuOpen ? '0' : '120px',
                    transitionDelay: menuOpen ? '1.4s' : '0s',
                  }}
                >
                  About
                </a>
                <div className="nav-item-wrapper"></div>
              </li>
            </ul>
            <div className="nav-footer">
              <div className="flex flex-col">
                <div
                  className="footer-end flex justify-end"
                  style={{
                    bottom: menuOpen ? '0' : '-20px',
                    opacity: menuOpen ? '1' : '0',
                    transitionDelay: menuOpen ? '2s' : '0s',
                  }}
                >
                  <span>Shauryan Singh</span>
                </div>
                <div
                  className="footer-end flex justify-start text-sm"
                  style={{
                    bottom: menuOpen ? '0' : '-20px',
                    opacity: menuOpen ? '1' : '0',
                    transitionDelay: menuOpen ? '2.5s' : '0s',
                  }}
                >
                  <span>Mumbai, India.</span>
                </div>
              </div>
              <div className="nav-social-links">
                <ul>
                  <li className="flex justify-end">
                    <a
                      href="/social-LinkedIn"
                      style={{
                        bottom: menuOpen ? '0' : '-20px',
                        opacity: menuOpen ? '1' : '0',
                        transitionDelay: menuOpen ? '2.5s' : '0s',
                      }}
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li className="flex justify-end">
                    <a
                      href="/social-Github"
                      style={{
                        bottom: menuOpen ? '0' : '-20px',
                        opacity: menuOpen ? '1' : '0',
                        transitionDelay: menuOpen ? '2.5s' : '0s',
                      }}
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
