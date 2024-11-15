import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingForm = ({ price, id, listing }) => {
  const navigate = useNavigate();

  // Set default dates
  const today = new Date();
  const defaultCheckOut = new Date();
  defaultCheckOut.setDate(today.getDate() + 3);

  // State variables
  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(defaultCheckOut);
  const [guests, setGuests] = useState(2);
  const [error, setError] = useState("");

  // Calculate total price
  const calculateTotal = () => {
    if (!checkIn || !checkOut || checkOut <= checkIn) return 0;
    const diffTime = Math.abs(checkOut - checkIn);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays * parseFloat(price.replace("$", ""));
  };

  const total = calculateTotal();

  // Validation and navigation
  const handleReserve = () => {
    if (!checkIn) {
      setError("Check-in date is required.");
      return;
    }
    if (!checkOut || checkOut <= checkIn) {
      setError("Check-out date must be after the check-in date.");
      return;
    }
    if (guests < 1) {
      setError("Please specify at least one guest.");
      return;
    }

    setError(""); // Clear errors if validation passes
    navigate(`/bookings/${id}`, {
      state: {
        listing,
        checkIn,
        checkOut,
        guests,
        total,
      },
    });
  };

  return (
    <div
      className="bg-gray-100 p-6 rounded-lg shadow-md sticky top-6 max-h-[calc(100vh-3rem)] overflow-y-auto"
      style={{ maxHeight: "fit-content" }}
    >
      <p className="text-2xl font-semibold">
        ${price} <span className="text-lg text-gray-500">/ night</span>
      </p>
      <div className="mt-4">
        <label className="block text-gray-700 mb-2">Check-in</label>
        <DatePicker
          selected={checkIn}
          onChange={(date) => setCheckIn(date)}
          selectsStart
          startDate={checkIn}
          endDate={checkOut}
          minDate={new Date()}
          className="w-full p-2 border rounded-lg"
        />
        <label className="block text-gray-700 mt-4 mb-2">Check-out</label>
        <DatePicker
          selected={checkOut}
          onChange={(date) => setCheckOut(date)}
          selectsEnd
          startDate={checkIn}
          endDate={checkOut}
          minDate={checkIn}
          className="w-full p-2 border rounded-lg"
        />
        <label className="block text-gray-700 mt-4 mb-2">Guests</label>
        <input
          type="number"
          min="1"
          value={guests}
          onChange={(e) => setGuests(parseInt(e.target.value, 10) || 1)}
          placeholder="Guests"
          className="w-full p-2 border rounded-lg"
        />
      </div>
      {error && (
        <p className="text-red-500 mt-4 text-sm font-semibold">{error}</p>
      )}
      <p className="mt-4 text-lg">Total: ${total.toFixed(2)}</p>
      <button
        onClick={handleReserve}
        className="bg-red-500 text-white w-full py-2 mt-4 rounded-lg shadow-md hover:bg-red-600 transition"
      >
        Reserve
      </button>
    </div>
  );
};

export default BookingForm;
