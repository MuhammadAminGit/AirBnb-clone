import React from "react";
import { Link } from "react-router-dom";

const ListingCard = ({ listing }) => {
  const {
    id,
    picture_url: imageUrl,
    name: title,
    property_type: type,
    accommodates: guests,
    bedrooms,
    bathrooms_text: bathrooms,
    price,
    rating,
  } = listing;

  // Ensure rating is a number or fallback to "N/A"
  const formattedRating = typeof rating === "number" ? rating.toFixed(1) : "N/A";

  return (
    <Link
      to={`/listings/${id}`}
      className="block border rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600">{type}</p>
        <div className="flex justify-between items-center my-2">
          <p className="text-gray-500">
            {guests} guests · {bedrooms} bedrooms · {bathrooms}
          </p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-lg font-semibold">
            {price} night
          </p>
          <p className="text-yellow-500">★ {formattedRating}</p>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
