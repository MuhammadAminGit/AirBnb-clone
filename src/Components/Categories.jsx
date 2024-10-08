import React from 'react';
import CategoryButton from './CategoryButton';

const categories = [
    'Beachfront', 
    'Cabins', 
    'Trending', 
    'Luxury', 
    'Camping', 
    'Farms',
    'Pet Friendly',
    'Unique',
    'Entire Homes',
    'Tiny Homes',
    'Treehouses',
    'Glamping',
    'RVs',
]

const Categories = () => {
  return (
    <div className="flex space-x-4 overflow-x-scroll p-4 scrollbar-hide">
      {categories.map((category, index) => (
        <CategoryButton key={index} name={category} />
      ))}
    </div>
  );
};

export default Categories;
