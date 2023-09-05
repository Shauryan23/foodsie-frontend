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
import { VegIcon } from '../util/VegIcon';
import { NonVegIcon } from '../util/NonVegIcon';
import YellowStar from '../../assets/images/stars/yellow-star.png';
import RedStar from '../../assets/images/stars/red-star.png';
import { Arrow } from '../util/Arrow';

const FoodItemCard = ({
  shadow = 'md',
  title = 'Title Not Available',
  imageSrc = Burger,
  imageSize = 14,
  titleSize = 'text-md',
  textSize = 'text-xsm',
  footerTextSize = 'text-fts',
  ingredients = [
    'Ground Beef',
    'Bun',
    'Lettuce',
    'Tomato',
    'Onion',
    'Cheese',
    'Pickles',
    'Ketchup',
    'Mustard',
    'Mayonnaise',
  ],
  veg = true,
  liked = false,
  rating = '-',
  price = 0,
}) => {
  const [isLiked, setIsLiked] = useState(liked);

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
            aria-label="Option"
            className="absolute left-2 top-2"
            size="sm"
          >
            {veg ? <VegIcon /> : <NonVegIcon />}
          </Button>
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
            <div className="flex flex-1 flex-row flex-wrap justify-center items-start max-w-[100%] max-h-12 overflow-y-auto">
              {ingredients.map((ing, index) => (
                <Card
                  key={index}
                  radius="sm"
                  shadow="none"
                  className="flex justify-center items-center m-[2px] p-1 text-xsm h-7 opacity-70 min-w-[20%]"
                >
                  {ing}
                </Card>
              ))}
            </div>
          </div>
        </CardBody>
        <CardFooter className="flex flex-col justify-center items-center p-1 pb-5 bg-card-bg-2-lighter">
          <p className="text-2xl pb-2">₹{price}</p>
          <div className="flex justify-between">
            <div
              className={`flex flex-row items-center rounded-lg p-1 ${
                rating > 2 ? 'bg-rating-good' : 'bg-rating-bad'
              }`}
            >
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
                    className="w-5"
                  />
                </div>
              </Button>
              <div className={`pr-2 opacity-60 inline-block font-bold`}>
                {rating}
              </div>
            </div>
            <div className="flex items-center">
              <Button color="warning" variant="ghost" endContent={<Arrow />}>
                Add To Cart
              </Button>
            </div>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default FoodItemCard;
