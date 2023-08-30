import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="mx-10">
          <a href="/">
            <div className="flex justify-between mt-0 pt-4 mb-3 pb-2 animate-slide-down items-center">
              <div className="flex items-center logo-grow">
                <img
                  src="https://img.icons8.com/stencil/32/chef-hat.png"
                  alt="Foodsie-logo"
                />
                <span className="pl-1 font-vastshadow text-2xl logo-offset">
                  Foodsie
                </span>
              </div>
              <div>
                <span className="px-8">Home</span>
                <span className="px-8">Menu</span>
                <span className="px-8">Contact</span>
                <span className="px-8">Shop</span>
              </div>
              <div>Three Lines</div>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;