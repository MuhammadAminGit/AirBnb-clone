import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';
import { styled } from '@mui/system';
import api from '../api/axiosInstance';

// Styled components for the table with manual CSS values
const StyledTableCell = styled(TableCell)({
  backgroundColor: '#f5f5f5', // Light gray background
  color: '#333', // Text color
  fontWeight: 'bold',
  padding: '12px 16px',
});

const StyledTableRow = styled(TableRow)({
  '&:nth-of-type(even)': {
    backgroundColor: '#fafafa', // Slightly lighter gray for even rows
  },
  '&:hover': {
    backgroundColor: '#e0e0e0', // Slight highlight on hover
  },
});

const ProfilePage = () => {
  const [bookings, setBookings] = useState([]); // Start with an empty array
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  // Fetch Bookings
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const bookingsRes = await api.get('/user/bookings');
        setBookings(bookingsRes.data.data || []); // Ensure bookings is an array
      } catch (error) {
        console.error('Error fetching bookings:', error);
        setBookings([]); // Fallback to an empty array on error
      }
    };

    fetchBookings();
  }, []);

  // Delete a Booking
  const handleDeleteBooking = async (id) => {
    try {
      await api.delete(`/user/bookings/${id}`);
      setBookings((prev) => prev.filter((booking) => booking._id !== id));
      setSnackbar({ open: true, message: 'Booking deleted successfully', severity: 'success' });
    } catch (error) {
      setSnackbar({ open: true, message: 'Failed to delete booking', severity: 'error' });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Container maxWidth="md" sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', color: '#333' }}>
        Your Bookings
      </Typography>

      {/* Bookings Table */}
      <TableContainer component={Paper} elevation={3} sx={{ borderRadius: 2 }}>
        <Table>
          {/* Table Head */}
          <TableHead>
            <TableRow>
              <StyledTableCell>Listing Name</StyledTableCell>
              <StyledTableCell>Check-In</StyledTableCell>
              <StyledTableCell>Check-Out</StyledTableCell>
              <StyledTableCell>Guests</StyledTableCell>
              <StyledTableCell>Total</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </TableRow>
          </TableHead>

          {/* Table Body */}
          <TableBody>
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <StyledTableRow key={booking._id}>
                  <TableCell>{booking.listing?.name || 'N/A'}</TableCell>
                  <TableCell>{new Date(booking.checkIn).toLocaleDateString()}</TableCell>
                  <TableCell>{new Date(booking.checkOut).toLocaleDateString()}</TableCell>
                  <TableCell>{booking.guests}</TableCell>
                  <TableCell>${booking.total}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleDeleteBooking(booking._id)}
                      sx={{ borderRadius: '20px' }}
                    >
                      Cancel Booking
                    </Button>
                  </TableCell>
                </StyledTableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} align="center" sx={{ padding: '20px', color: '#999' }}>
                  No bookings available.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Snackbar for feedback */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ProfilePage;
