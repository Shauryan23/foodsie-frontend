import React from 'react';
import './Categories.css';
import CategoryCard from '../../Cards/CategoryCard';

const Categories = ({
  categoriesArray = ['c1', 'c1', 'c1', 'c1', 'c1', 'c1', 'c1', 'c1'],
}) => {
  return (
    <div className="flex flex-col flex-1 justify-between items-center background pb-10">
      <p className="text-2xl leading-none font-bold m-5">Category</p>
      <div className="flex flex-wrap flex-1 w-full">
        {categoriesArray.map((category, index) => (
          <div
            key={index}
            className="flex justify-evenly items-center grow m-3 min-w-1/5"
          >
            <CategoryCard
              imageSize={14}
              title={category}
              className="p-5 min-w-min"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
