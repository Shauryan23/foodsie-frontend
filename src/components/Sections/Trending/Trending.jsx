import React from 'react';
import FoodItemCard from '../../Cards/FoodItemCard';

const Trending = () => {
  return (
    // <div className="flex flex-row justify-center items-center">
    //   <div className="min-w-[10rem]">
    //     <FoodItemCard imageSize={14} />
    //   </div>
    // </div>
    <div className="flex flex-col justify-center items-center mb-7">
      <p className="text-2xl leading-none font-bold m-5 py-5">Trending</p>
      <div className="flex flex-wrap flex-1 w-full justify-evenly gap-10">
        <FoodItemCard />
        <FoodItemCard />
        <FoodItemCard />
        <FoodItemCard />
        <FoodItemCard />
        <FoodItemCard />
      </div>
    </div>
  );
};

export default Trending;
