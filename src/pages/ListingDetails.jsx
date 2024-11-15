import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AmenitiesList from "../Components/AmenitiesList";
import BookingForm from "../Components/BookingForm";

const ListingDetailsPage = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/listings/${id}`)
      .then((response) => {
        setListing(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching listing:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-center text-lg">Loading...</p>;
  }

  if (!listing) {
    return <p className="text-center text-lg text-red-500">Listing not found.</p>;
  }

  const {
    picture_url,
    name,
    description,
    host_name,
    host_picture_url,
    property_type,
    room_type,
    accommodates,
    bedrooms,
    beds,
    bathrooms_text,
    amenities,
    price,
    number_of_reviews,
    rating,
  } = listing;

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      {/* Cover Image */}
      <div className="rounded-lg overflow-hidden shadow-md">
        <img src={picture_url} alt={name} className="w-full h-96 object-cover" />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="md:col-span-2">
          {/* Title and Host Info */}
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold">{name}</h1>
              <p className="text-gray-600 text-lg mt-1">{property_type} · {room_type}</p>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src={host_picture_url}
                alt={host_name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{host_name}</p>
                <p className="text-sm text-gray-500">Host</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">About this place</h2>
            <p className="text-gray-700 mt-4">{description}</p>
          </div>

          {/* Details */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <p><strong>{accommodates}</strong> guests</p>
            <p><strong>{bedrooms}</strong> bedrooms</p>
            <p><strong>{beds}</strong> beds</p>
            <p><strong>{bathrooms_text}</strong></p>
          </div>

          {/* Amenities */}
          <AmenitiesList amenities={amenities} />
        </div>

        {/* Right Column */}
        <BookingForm price={price} id={id} listing={listing}/>
      </div>
    </div>
  );
};

export default ListingDetailsPage;
