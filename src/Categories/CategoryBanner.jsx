// CategoryBanner.js
import React from 'react';
import classNames from 'classnames';
import { useCategory } from './CategoryContext';
import './CategoryBanner.css';

const CategoryBanner = () => {
  const { activeCategory, setActiveCategory } = useCategory();

  return (
    <div className="category flex justify-center ">
      <div
        className={classNames('mr-4 cursor-pointer ', {
          'border-b-2 border-red-500': activeCategory === 'kids',
        })}
        onClick={() => setActiveCategory('kids')}
      >
        Kids
      </div>
      <div
        className={classNames('mr-4 cursor-pointer ', {
          'border-b-2 border-red-500': activeCategory === 'womens',
        })}
        onClick={() => setActiveCategory('womens')}
      >
        Womens
      </div>
      <div
        className={classNames('cursor-pointer ', {
          'border-b-2 border-red-500': activeCategory === 'mens',
        })}
        onClick={() => setActiveCategory('mens')}
      >
        Mens
      </div>
    </div>
  );
};

export default CategoryBanner;
