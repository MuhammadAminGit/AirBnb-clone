import React from 'react';

const ListingCard = ({ imageUrl, title, type, guests, bedrooms, bathrooms, price, rating }) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600">{type}</p>
        <div className="flex justify-between items-center my-2">
          <p className="text-gray-500">{guests} guests · {bedrooms} bedrooms · {bathrooms} bathrooms</p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-lg font-semibold">${price} / night</p>
          <p className="text-yellow-500">★ {rating}</p>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
