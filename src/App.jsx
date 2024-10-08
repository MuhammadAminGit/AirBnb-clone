import React from 'react';
import Navbar from './Components/Navbar';
import Categories from './Components/Categories';
import ListingCard from './Components/ListingCard';
import Footer from './Components/Footer';

const listings = [
    {
      imageUrl: 'https://a0.muscache.com/pictures/44627226/0e72c75c_original.jpg',
      title: 'Luxury 2 bedroom apartment',
      type: 'Luxury',
      guests: 4,
      bedrooms: 2,
      bathrooms: 1,
      price: 200,
      rating: 4.9,
    },
    {
      imageUrl: 'https://a0.muscache.com/pictures/prohost-api/Hosting-3820211/original/7a087429-5f8f-4c7f-990a-291a82b784dc.jpeg',
      title: 'Restored Precinct in Center Sq. w/Parking',
      type: 'Entire Homes',
      guests: 6,
      bedrooms: 3,
      bathrooms: 2,
      price: 180,
      rating: 4.7,
    },
    {
      imageUrl: 'https://a0.muscache.com/pictures/b3fc42f3-6e5e-4704-9d0f-8ceee5d32046.jpg',
      title: 'Large studio apt  by Capital Center & ESP@',
      type: 'Entire Homes',
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      price: 120,
      rating: 4.6,
    },
    {
      imageUrl: 'https://a0.muscache.com/pictures/prohost-api/Hosting-6623339/original/fe9b077d-2c75-458d-a4c1-71fed46d598a.jpeg',
      title: 'Center Sq. Loft in Converted Precinct w/ Parking',
      type: 'Luxury',
      guests: 4,
      bedrooms: 2,
      bathrooms: 1,
      price: 250,
      rating: 4.8,
    },
    {
      imageUrl: 'https://a0.muscache.com/pictures/103429331/a0a6c0b1_original.jpg',
      title: 'Entire Beautiful French Victorian 1884',
      type: 'Unique',
      guests: 8,
      bedrooms: 4,
      bathrooms: 3,
      price: 350,
      rating: 4.9,
    },
    {
      imageUrl: 'https://a0.muscache.com/pictures/102414176/e6b76700_original.jpg',
      title: 'Delightful French Victorian',
      type: 'Unique',
      guests: 6,
      bedrooms: 3,
      bathrooms: 2,
      price: 300,
      rating: 4.7,
    },
    {
      imageUrl: 'https://a0.muscache.com/pictures/d242a77e-437c-4d0a-9029-005a05f8d282.jpg',
      title: 'Studio in The heart of Center SQ, in Albany NY',
      type: 'Entire Homes',
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      price: 100,
      rating: 4.5,
    },
    {
      imageUrl: 'https://a0.muscache.com/pictures/45153167-d704-48ed-9320-ab2f139bd352.jpg',
      title: 'Spacious suite with full bath by Capital Center',
      type: 'Entire Homes',
      guests: 4,
      bedrooms: 2,
      bathrooms: 1,
      price: 150,
      rating: 4.6,
    },
    {
      imageUrl: 'https://a0.muscache.com/pictures/aa3b62f5-fbd8-4afd-8104-b93a8711d80f.jpg',
      title: 'Alb hospital area studio bath wifi. (Red)',
      type: 'Cabins',
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      price: 95,
      rating: 4.2,
    },
    {
      imageUrl: 'https://a0.muscache.com/pictures/f0e43651-0834-4cbd-9d7d-72ef465a316d.jpg',
      title: '/Fire Place Bungalow\\ 1917 SUNY Eagle 6Beds 2Baths',
      type: 'Cabins',
      guests: 6,
      bedrooms: 3,
      bathrooms: 2,
      price: 175,
      rating: 4.7,
    },
    {
      imageUrl: 'https://a0.muscache.com/pictures/0adcd911-d1ad-4faf-af01-749343697b5d.jpg',
      title: 'Well Lit Modern Room, Perfect Location Albany',
      type: 'Tiny Homes',
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      price: 100,
      rating: 4.5,
    },
    {
      imageUrl: 'https://a0.muscache.com/pictures/3e656127-d8e2-4743-a405-1b91d81c4dc7.jpg',
      title: 'Private Room in the Hearth of the Albany',
      type: 'Entire Homes',
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      price: 80,
      rating: 4.4,
    },
    {
      imageUrl: 'https://a0.muscache.com/pictures/a430d734-d978-4b2e-bcc9-876618efc4ac.jpg',
      title: 'Pristine Cape Cod on the Creek - 4 Large Bedrooms',
      type: 'Beachfront',
      guests: 8,
      bedrooms: 4,
      bathrooms: 3,
      price: 400,
      rating: 5.0,
    },
    {
      imageUrl: 'https://a0.muscache.com/pictures/0d7f6d7c-0faf-43d6-a63f-b935103cf056.jpg',
      title: 'Unique Modern Room, Perfect Location Albany',
      type: 'Treehouses',
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      price: 120,
      rating: 4.3,
    },
    {
      imageUrl: 'https://a0.muscache.com/pictures/408eb58e-caa7-4021-9a9e-dfa49e849052.jpg',
      title: '/Miller Colonial\\ 1946 SUNY Eagle Hill 5Bed 2Baths',
      type: 'Entire Homes',
      guests: 6,
      bedrooms: 3,
      bathrooms: 2,
      price: 200,
      rating: 4.7,
    },
    {
      imageUrl: 'https://a0.muscache.com/pictures/miso/Hosting-15580397/original/6eb65e63-fae2-4268-962c-6d752d20727b.jpeg',
      title: 'Albany Med/Downtown Albany/Colleges/BLUE ROOM.',
      type: 'Cabins',
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      price: 90,
      rating: 4.1,
    },
    {
      imageUrl: 'https://a0.muscache.com/pictures/hosting/Hosting-16531782/original/a61ad290-632b-40ad-84fd-65e0652be365.jpeg',
      title: 'On a little park in Albany pine hills. (Blue)',
      type: 'Camping',
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      price: 85,
      rating: 4.0,
    },
    {
      imageUrl: 'https://a0.muscache.com/pictures/4c939df7-1935-4423-89c8-b32f10ec48ed.jpg',
      title: '$53($25 foreign student)Twin, noa/cno Smoke freeBF',
      type: 'Tiny Homes',
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      price: 53,
      rating: 4.2,
    },
    {
      imageUrl: 'https://a0.muscache.com/pictures/689d28bd-fc6e-4512-ad8d-520b3030c238.jpg',
      title: 'Cozy Modern Room Perfect Location Albany',
      type: 'Entire Homes',
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      price: 95,
      rating: 4.4,
    },
    {
      imageUrl: 'https://a0.muscache.com/pictures/95aa6d3d-5611-4c75-989e-774206f18c57.jpg',
      title: '/Sauna Ranch 1961\\ SUNY Eagle Hill 4Beds 1Bath',
      type: 'Glamping',
      guests: 4,
      bedrooms: 2,
      bathrooms: 1,
      price: 120,
      rating: 4.5,
    },
    {
      imageUrl: 'https://a0.muscache.com/pictures/2861bf31-7118-4e73-8b01-7322844191c3.jpg',
      title: 'Charming 1 Bedroom in a Historic Residential Home',
      type: 'Unique',
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      price: 110,
      rating: 4.3,
    },
    {
      imageUrl: 'https://a0.muscache.com/pictures/26868297-fdab-48c1-8bba-4eb7ba6a4bb3.jpg',
      title: 'Modern Studio Perfect Location Albany',
      type: 'Entire Homes',
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      price: 130,
      rating: 4.6,
    },
    {
      imageUrl: 'https://a0.muscache.com/pictures/efcc69ea-7277-4b8d-bebc-3b0f2500e1c2.jpg',
      title: 'All The Comforts Of Home For You In Albany',
      type: 'Entire Homes',
      guests: 4,
      bedrooms: 2,
      bathrooms: 1,
      price: 160,
      rating: 4.7,
    },
    {
      imageUrl: 'https://a0.muscache.com/pictures/3264fdf0-fc65-463b-a539-ddc5585ad1f9.jpg',
      title: '/Red Warhol Ranch\\ 1959 SUNY Eagle Hill 4beds1Bath',
      type: 'Glamping',
      guests: 4,
      bedrooms: 2,
      bathrooms: 1,
      price: 140,
      rating: 4.4,
    },
    {
      imageUrl: 'https://a0.muscache.com/pictures/63864f6a-3bcc-4c13-8fe0-e7ea9f02b01d.jpg',
      title: 'Garden Apartment, on the Park, close to Capital.',
      type: 'Luxury',
      guests: 4,
      bedrooms: 2,
      bathrooms: 1,
      price: 220,
      rating: 4.8,
    },
    {
      imageUrl: 'https://a0.muscache.com/pictures/bd772983-3c83-469b-a702-5f97ac29bb7a.jpg',
      title: 'The Metropolitan',
      type: 'Entire Homes',
      guests: 5,
      bedrooms: 2,
      bathrooms: 2,
      price: 270,
      rating: 4.9,
    },
    {
      imageUrl: 'https://a0.muscache.com/pictures/b19e27d4-4a6e-43a7-add8-4a493d854c69.jpg',
      title: 'Cozy bedroom with (2) walk-in closets',
      type: 'Cabins',
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      price: 75,
      rating: 4.1,
    },
    {
      imageUrl: 'https://a0.muscache.com/pictures/fd849090-1271-4243-abfb-f07273259981.jpg',
      title: 'The Blair Suite',
      type: 'Luxury',
      guests: 4,
      bedrooms: 2,
      bathrooms: 2,
      price: 290,
      rating: 4.9,
    },
  ];
  

function App() {
  return (
    <div className="App">
      <Navbar />
      <Categories />

      <div className="p-4">
        {/* Grid layout for listing cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {listings.map((listing, index) => (
            <ListingCard
              key={index}
              imageUrl={listing.imageUrl}
              title={listing.title}
              type={listing.type}
              guests={listing.guests}
              bedrooms={listing.bedrooms}
              bathrooms={listing.bathrooms}
              price={listing.price}
              rating={listing.rating}
            />
          ))}
        </div>
      </div>

      <Footer />

    </div>
  );
}

export default App;
