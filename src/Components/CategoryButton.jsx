import React from 'react';

const CategoryButton = ({ name }) => {
  return (
    <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full px-4 py-2 whitespace-nowrap">
      {name}
    </button>
  );
};

export default CategoryButton;
