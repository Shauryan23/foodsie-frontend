import React from 'react';
import './Hero.css';
import heroImage from '../../assets/images/home-img1.svg';

const Hero = () => {
  return (
    <div className="hero flex z-5 animate-opacity mt-10">
      <div className="hero-content flex flex-1 flex-col justify-start items-center p-8">
        <div className="flex flex-row ">
          <div className="text-amber-500 text-12xl font-bold tracking-tight">
            <h1>Fast</h1>
          </div>
          <div className="flex flex-1 flex-col-reverse text-4xl leading-none font-bold mb-7">
            <h2>Delivery</h2>
            <h2>Food</h2>
          </div>
        </div>
        <div>
          <div>
            <span className="font-medium opacity-50">
              Satisfy your cravings with our lightning-fast food delivery <br />
              service, bringing your favorite flavors right to your doorstep.
            </span>
          </div>
          <div className="flex h-28 justify-evenly items-center">
            <div>Button 1</div>
            <div>Button 2</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex stars justify-evenly">
            <svg
              width="25px"
              height="25px"
              viewBox="0 -0.5 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.0005 0L21.4392 9.27275L32.0005 11.5439L24.8005 19.5459L25.889 30.2222L16.0005 25.895L6.11194 30.2222L7.20049 19.5459L0.000488281 11.5439L10.5618 9.27275L16.0005 0Z"
                fill="#FFCB45"
              />
            </svg>
            <svg
              width="25px"
              height="25px"
              viewBox="0 -0.5 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.0005 0L21.4392 9.27275L32.0005 11.5439L24.8005 19.5459L25.889 30.2222L16.0005 25.895L6.11194 30.2222L7.20049 19.5459L0.000488281 11.5439L10.5618 9.27275L16.0005 0Z"
                fill="#FFCB45"
              />
            </svg>
            <svg
              width="25px"
              height="25px"
              viewBox="0 -0.5 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.0005 0L21.4392 9.27275L32.0005 11.5439L24.8005 19.5459L25.889 30.2222L16.0005 25.895L6.11194 30.2222L7.20049 19.5459L0.000488281 11.5439L10.5618 9.27275L16.0005 0Z"
                fill="#FFCB45"
              />
            </svg>
            <svg
              width="25px"
              height="25px"
              viewBox="0 -0.5 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.0005 0L21.4392 9.27275L32.0005 11.5439L24.8005 19.5459L25.889 30.2222L16.0005 25.895L6.11194 30.2222L7.20049 19.5459L0.000488281 11.5439L10.5618 9.27275L16.0005 0Z"
                fill="#FFCB45"
              />
            </svg>
            <svg
              width="25px"
              height="25px"
              viewBox="0 -0.5 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.0005 0L21.4392 9.27275L32.0005 11.5439L24.8005 19.5459L25.889 30.2222L16.0005 25.895L6.11194 30.2222L7.20049 19.5459L0.000488281 11.5439L10.5618 9.27275L16.0005 0Z"
                fill="#FFCB45"
              />
            </svg>
          </div>
          <div className="mt-1 opacity-70">
            <p>
              based on{' '}
              <span className="font-mono tracking-tighter"> xxxx </span> reviews
            </p>
          </div>
        </div>
      </div>
      <div className="hero-image flex flex-1 items-center justify-center mr-28">
        <img
          src={heroImage}
          alt="Hero Image"
          className="max-w-full max-h-full"
          style={{ maxHeight: '80vh', marginBottom: '50px' }}
        />
      </div>
    </div>
  );
};

export default Hero;
