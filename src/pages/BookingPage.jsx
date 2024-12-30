import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import api from "../api/axiosInstance";
import { Snackbar, Alert } from "@mui/material";

const BookingPage = () => {
  const location = useLocation();
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const handleConfirmBooking = async () => {
    try {
      const response = await api.post(
        "/bookings",
        {
          listing,
          checkIn,
          checkOut,
          guests,
          total,
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('jwtToken')}`, // JWT from sessionStorage
          },
        }
      );

      if (response.status === 201 || response.status === 200) {
        setSnackbar({ open: true, message: 'Booking confirmed!', severity: 'success' });
      } else {
        setSnackbar({ open: true, message: `Failed to book: ${response.data.message}`, severity: 'error' });
      }
    } catch (error) {
      console.error('Error:', error);
      setSnackbar({ open: true, message: error.response?.data?.message || 'Error confirming booking', severity: 'error' });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const { listing, checkIn, checkOut, guests, total } = location.state || {};

  if (!listing) {
    return <p>No listing data available</p>;
  }

  const {
    picture_url,
    name,
    description,
    host_name,
    property_type,
    room_type,
    accommodates,
    bedrooms,
    beds,
    bathrooms_text,
    amenities,
  } = listing;

  return (
    <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Section: Booking Details */}
      <div className="lg:col-span-2 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">{name}</h2>
        <p className="text-gray-700">{description}</p>
        <div className="space-y-4 mt-4">
          <p>
            <strong>Host:</strong> {host_name}
          </p>
          <p>
            <strong>Property Type:</strong> {property_type}
          </p>
          <p>
            <strong>Room Type:</strong> {room_type}
          </p>
          <p>
            <strong>Accommodates:</strong> {accommodates}
          </p>
          <p>
            <strong>Bedrooms:</strong> {bedrooms}, <strong>Beds:</strong> {beds},{" "}
            <strong>Bathrooms:</strong> {bathrooms_text}
          </p>
          <p>
            <strong>Amenities:</strong> {amenities.join(", ")}
          </p>
        </div>
      </div>

      {/* Right Section: Trip Summary */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <img
          src={picture_url}
          alt={name}
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="space-y-4 mt-4">
          <p>
            <strong>Check-in:</strong> {checkIn?.toLocaleDateString()}
          </p>
          <p>
            <strong>Check-out:</strong> {checkOut?.toLocaleDateString()}
          </p>
          <p>
            <strong>Guests:</strong> {guests} guest(s)
          </p>
          <p>
            <strong>Total Price:</strong> ${total.toFixed(2)}
          </p>
        </div>
        <button
          onClick={handleConfirmBooking}
          className="bg-red-500 text-white w-full py-2 mt-4 rounded-lg shadow-md hover:bg-red-600 transition"
        >
          Confirm Booking
        </button>
      </div>

      {/* Snackbar for Booking Confirmation */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default BookingPage;
