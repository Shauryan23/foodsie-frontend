import React from 'react';
import './Product.css';

const Product = () => {
  return (
    <div className="flex justify-between h-screen">
      <div className="bg-red-600 p-1">
        <div className="bg-slate-500 text-white">DIV 1</div>
      </div>
      <div className="flex flex-col items-center  text-white grow w-[30%]">
        <p className="absolute -top-[5%] left-[30%] text-12xl capitalize font-extrabold text-style font-sans">
          burger
        </p>
        <div>INNER 1</div>
        <div>INNER 2</div>
        <div>INNER 3</div>
      </div>
      <div className="bg-slate-500 text-white grow">DIV 3</div>
    </div>
  );
};

export default Product;
