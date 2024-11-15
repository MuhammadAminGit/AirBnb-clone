import React, { useEffect, useState } from "react";
import Categories from "../Components/Categories";
import ListingCard from "../Components/ListingCard";
import axios from "axios";

function Home() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/listings")
      .then((response) => setListings(response.data))
      .catch((error) => console.error("Error fetching listings:", error));
  }, []);

  return (
    <div>
      <Categories />
      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
