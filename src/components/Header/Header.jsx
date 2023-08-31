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
                />
                <span className="pl-1 font-vastshadow text-2xl logo-offset">
                  Foodsie
                </span>
              </a>
            </div>
            <div className="-z-10">
              <span className="px-8">Home</span>
              <span className="px-8">Menu</span>
              <span className="px-8">Contact</span>
              <span className="px-8">Shop</span>
            </div>
            <div onClick={() => setMenuOpen(!menuOpen)}>
              <MenuButton />
            </div>
          </div>
          <div
            className="nav-overlay"
            style={{
              top: menuOpen ? '0' : '-100%',
              transitionDelay: menuOpen ? '0s' : '0s',
            }}
          >
            {/* <ul className="nav-links">
              <li className="nav-items">
                <Link to="/">Home</Link>
                <div className="nav-item-wrapper"></div>
              </li>
              <li className="nav-items">
                <Link to="/">Shop</Link>
                <div className="nav-item-wrapper"></div>
              </li>
              <li className="nav-items">
                <Link to="/">Contact</Link>
                <div className="nav-item-wrapper"></div>
              </li>
              <li className="nav-items">
                <Link to="/">About</Link>
                <div className="nav-item-wrapper"></div>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
