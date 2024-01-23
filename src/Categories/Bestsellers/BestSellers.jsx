import React, { useState } from 'react';
import './BestSellers.css';
import Data from '../../Data/data';

const BestSellers = () => {
  const [isWishlistClicked, setIsWishlistClicked] = useState({});

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleWishlistClick = (productId) => {
    setIsWishlistClicked((prevWishlistState) => ({
      ...prevWishlistState,
      [productId]: !prevWishlistState[productId],
    }));
  };

  
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };


  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <div className="flex justify-center pt-[5rem]">
        <p className='border-b-2 border-red-500 text-4xl pb-[1rem] font-extrabold'>
          Best Sellers
        </p>
      </div>

      <div id="bestsellersid" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center pl-[23rem] pr-[15rem] pt-[5rem]">
        {Data.slice(0, 3).map((product) => (
          <div
            key={product.id}
            className="product-card m-4 p-4 border"
            onClick={() => handleProductClick(product)}
          >
            <img
              className="product-card__image mb-2 max-w-full h-auto"
              src={product.image}
              alt={product.name}
            />
            <p className="product-card__brand">{product.name}</p>
            <p className="product-card__price">${product.price.toFixed(2)}</p>
            <button
              className={`product-card__btn-wishlist ${isWishlistClicked[product.id] ? 'wishlist-clicked' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                handleWishlistClick(product.id);
              }}
            >
              {/* Wishlist button SVG */}
            </button>
          </div>
        ))}

        {
          selectedProduct && (

            <div className="modal" onClick={handleCloseDetails}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className='modal-close' onClick={handleCloseDetails}>&times;</span>
                
                <img
                  className="modal-product-image"
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                />
                <p>{selectedProduct.name}</p>
                <p>${selectedProduct.price.toFixed(2)}</p>
              </div>
            </div>
            
          )
        }
      </div>
    </>
  );
}

export default BestSellers;
