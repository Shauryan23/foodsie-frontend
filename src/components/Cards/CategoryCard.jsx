import React, { useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
} from '@nextui-org/react';
import Burger from '../../assets/images/categories/burger.png';
import { HeartIcon } from '../util/HeartIcon';
import YellowStar from '../../assets/images/stars/yellow-star.png';
import RedStar from '../../assets/images/stars/red-star.png';

const CategoryCard = ({
  shadow = 'sm',
  title = 'Title Not Available!',
  imageSrc = Burger,
  imageSize = 32,
  titleSize = 'text-md',
  textSize = 'text-xsm',
  footerTextSize = 'text-fts',
  description = 'Description Not Available!',
  options = ['Veg', 'Non-Veg', 'Vegan', 'Halal'],
  liked = false,
  rating = '-',
  lowPrice = 0,
  highPrice = 0,
}) => {
  const [isLiked, setIsLiked] = useState(liked);
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle Fixed Height in Footer
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLikeClick = () => {
    // Toggle the isLiked state when the button is clicked
    setIsLiked(!isLiked);
  };

  return (
    <>
      <Card shadow={shadow} isPressable>
        <CardHeader className="flex justify-center bg-card-bg-2">
          <Button
            isIconOnly
            color="bg-card-bg-2"
            aria-label="Like"
            className="absolute top-3 right-3"
            size="sm"
            onClick={handleLikeClick}
          >
            <HeartIcon
              size={20}
              fill="red"
              {...(isLiked ? { filled: true } : {})}
            />
          </Button>

          <Image
            radius="sm"
            className={`w-${imageSize} object-cover`}
            src={imageSrc}
          />
        </CardHeader>
        <CardBody className="bg-card-bg-2-lighter">
          <div className="flex flex-col items-center justify-center max-w-[15rem]">
            <p className={`${titleSize} capitalize opacity-70 mb-1`}>{title}</p>
            <Divider orientation="horizontal" />
            <p className={`${textSize} opacity-50 mt-1 max-w-full`}>
              {description}
            </p>
          </div>
        </CardBody>
        <CardFooter
          className={`flex flex-row flex-1 justify-between ${footerTextSize} bg-card-bg-2-lighter overflow-visible`}
        >
          <div className="relative">
            <div
              className={`${
                isExpanded ? 'max-h-full' : 'max-h-8 overflow-hidden'
              } transition-max-h duration-500 ease-in-out`}
            >
              <div className="flex flex-col items-center justify-center opacity-60 font-mono font-semibold ml-1 max-h-20">
                {options.map((option, index) => (
                  <Card
                    key={index}
                    radius="sm"
                    shadow="none"
                    className="m-[2px] h-7 flex items-center justify-center"
                  >
                    <p className="px-2">{option}</p>
                  </Card>
                ))}
              </div>
              {!isExpanded && (
                <button
                  onClick={toggleExpansion}
                  className="text-blue-500 hover:underline w-full text-center absolute bottom-0 left-0 z-10"
                >
                  Expand
                </button>
              )}
              {isExpanded && (
                <button
                  onClick={toggleExpansion}
                  className="text-blue-500 hover:underline w-full text-center"
                >
                  Collapse
                </button>
              )}
            </div>
          </div>
          <Divider orientation="vertical" className="mx-1" />
          <div className="flex flex-row items-center rounded-lg p-1 bg-rating-neutral">
            <Button
              isIconOnly
              isPressable={false}
              aria-label="Stars"
              size="sm"
              className="bg-transparent h-6"
            >
              <div className="flex">
                <Image
                  alt="stars"
                  src={rating > 2 ? YellowStar : RedStar}
                  className="w-4"
                />
              </div>
            </Button>
            <div className={`pr-2 opacity-60 inline-block font-bold`}>
              {rating}
            </div>
          </div>
          <Divider orientation="vertical" className="mx-1" />
          <div className="mr-1">
            <Card
              radius="sm"
              className="p-0.5 py-1 h-7 items-center justify-center opacity-60 font-mono font-semibold"
            >
              <p className="p-[1.5px]">
                ₹{lowPrice} - ₹{highPrice > 500 ? 500 : highPrice}+
              </p>
            </Card>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default CategoryCard;
