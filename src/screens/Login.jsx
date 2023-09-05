import React from 'react';
import './Login.css';
import COVER_IMG from '../assets/images/cover1.jpg';

const Login = () => {
  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute top-[3%] left-[8%]">
          <h1 className="absolute text-6xl text-white font-bold my-4">
            Foodsie.
          </h1>
          <h3 className="relative top-24 text-xl text-orange font-semibold">
            Embrace your Cravings
          </h3>
        </div>

        <img
          src={COVER_IMG}
          className="relative w-full h-full object-cover -z-20"
        />
        <div className="gradient-overlay"></div>
      </div>
    </div>
  );
};

export default Login;
