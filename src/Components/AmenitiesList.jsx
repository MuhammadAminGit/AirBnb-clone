import React, { useState } from "react";
import {
  FaWifi,
  FaTv,
  FaFireExtinguisher,
  FaBed,
  FaSwimmingPool,
  FaParking,
  FaUtensils,
  FaSnowflake,
  FaConciergeBell,
  FaCoffee,
  FaTshirt,
} from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdPets, MdKitchen, MdSmokeFree, MdIron } from "react-icons/md";
import { RiHandSanitizerLine } from "react-icons/ri";
import { BiKey } from "react-icons/bi";

const amenityIconMap = [
  { regex: /\b(wifi|internet)\b/i, icon: <FaWifi /> },
  { regex: /\b(tv|hdtv|cable)\b/i, icon: <FaTv /> },
  { regex: /\b(fire\s?extinguisher)\b/i, icon: <FaFireExtinguisher /> },
  { regex: /\b(bed|hangers)\b/i, icon: <FaBed /> },
  { regex: /\b(pool|swimming\s?pool)\b/i, icon: <FaSwimmingPool /> },
  { regex: /\b(parking)\b/i, icon: <FaParking /> },
  { regex: /\b(utensils|dishes|silverware|cooking)\b/i, icon: <FaUtensils /> },
  { regex: /\b(air\s?conditioning|central\s?air)\b/i, icon: <FaSnowflake /> },
  { regex: /\b(room\s?service|concierge)\b/i, icon: <FaConciergeBell /> },
  { regex: /\b(kitchen|microwave|oven|stove|dishwasher|refrigerator)\b/i, icon: <MdKitchen /> },
  { regex: /\b(pets|pets\s?allowed)\b/i, icon: <MdPets /> },
  { regex: /\b(iron)\b/i, icon: <MdIron /> },
  { regex: /\b(shampoo|essentials)\b/i, icon: <RiHandSanitizerLine /> },
  { regex: /\b(hair\s?dryer)\b/i, icon: <FaTshirt /> },
  { regex: /\b(heating)\b/i, icon: <FaSnowflake /> },
  { regex: /\b(smoke\s?alarm|carbon\s?monoxide\s?alarm)\b/i, icon: <MdSmokeFree /> },
  { regex: /\b(keypad|self\s?check-in)\b/i, icon: <BiKey /> },
  { regex: /\b(coffee\s?maker)\b/i, icon: <FaCoffee /> },
  { regex: /\b(dryer|washer)\b/i, icon: <FaTshirt /> },
];

  
  const getAmenityIcon = (amenity) => {
    const match = amenityIconMap.find(({ regex }) => regex.test(amenity));
    return match ? match.icon : <AiOutlineCheckCircle />;
  };

const AmenitiesList = ({ amenities }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleBackgroundClick = (e) => {
    if (e.target.className.includes("overlay")) setIsModalOpen(false);
  };

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold">Amenities</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {amenities.slice(0, 6).map((amenity, index) => (
          <li key={index} className="flex items-center space-x-2 text-gray-700">
            {getAmenityIcon(amenity)}
            <span>{amenity}</span>
          </li>
        ))}
      </ul>
      {amenities.length > 6 && (
        <button
          onClick={handleModalToggle}
          className="mt-4 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-200 transition"
        >
          Show All Amenities
        </button>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div
          className="overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleBackgroundClick}
        >
          <div className="bg-white rounded-lg p-6 w-11/12 max-w-3xl max-h-[80vh] overflow-y-auto transform transition-all">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Amenities</h3>
              <button
                onClick={handleModalToggle}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            {/* Amenities Grid */}
            <ul className="grid grid-cols-2 gap-6">
              {amenities.map((amenity, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-2 text-gray-700"
                >
                  {getAmenityIcon(amenity)}
                  <span>{amenity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default AmenitiesList;
