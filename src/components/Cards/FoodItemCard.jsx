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

const FoodItemCard = ({
  shadow = 'none',
  title = 'Title Not Available',
  imageSrc = Burger,
  imageSize = 14,
  titleSize = 'text-md',
  textSize = 'text-xsm',
  footerTextSize = 'text-fts',
  description = 'Description Not Available!',
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
            <div className="flex flex-1 flex-row flex-wrap items-start max-w-[100%] max-h-12 overflow-hidden">
              {/* <div className="font-mono font-semibold"></div> */}
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
            {/* <p className={`${textSize} opacity-50 mt-1 max-w-full`}>
              {description}
            </p> */}
          </div>
        </CardBody>
        <CardFooter
          className={`flex flex-row flex-1 justify-between ${footerTextSize} bg-card-bg-2-lighter overflow-visible`}
        ></CardFooter>
      </Card>
    </>
  );
};

export default FoodItemCard;
