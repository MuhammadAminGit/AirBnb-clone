import React, { useState, useEffect } from 'react';
import api from '../api/axiosInstance';
import {
  Container,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TablePagination
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const [listings, setListings] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [pageListings, setPageListings] = useState(0);
  const [pageBookings, setPageBookings] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('adminAuth')) {
      navigate('/admin/login');
    }
    fetchListings();
    fetchBookings();
  }, [navigate]);

  const fetchListings = async () => {
    try {
      const response = await api.post('/admin/listings/all', {
        'username': 'admin',
        'password': 'root1234',
      });
      setListings(response.data);
    } catch (error) {
      console.error('Error fetching listings:', error);
    }
  };

  const fetchBookings = async () => {
    try {
      const response = await api.post('/admin/bookings/all', {
        'username': 'admin',
        'password': 'root1234',
      });
      setBookings(response.data.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const handleDeleteListing = async (id) => {
    try {
      await api.post(`/admin/listings/delete/${id}`, {
        'username': 'admin',
        'password': 'root1234',
      });
      fetchListings(); // Refresh listings after deletion
    } catch (error) {
      console.error('Error deleting listing:', error);
    }
  };

  const handleChangePageListings = (event, newPage) => {
    setPageListings(newPage);
  };

  const handleChangePageBookings = (event, newPage) => {
    setPageBookings(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPageListings(0);
    setPageBookings(0);
  };

  return (
    <Container sx={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Admin Panel
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/admin/add-listing')}
        sx={{ marginBottom: '20px' }}
      >
        Add New Listing
      </Button>

      <Typography variant="h6" gutterBottom>
        Listings
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listings.slice(pageListings * rowsPerPage, pageListings * rowsPerPage + rowsPerPage).map((listing) => (
              <TableRow key={listing._id}>
                <TableCell>{listing.name}</TableCell>
                <TableCell>{listing.description}</TableCell>
                <TableCell align="right">
                  <IconButton
                    color="error"
                    onClick={() => handleDeleteListing(listing.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={listings.length}
        rowsPerPage={rowsPerPage}
        page={pageListings}
        onPageChange={handleChangePageListings}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      <Typography variant="h6" gutterBottom sx={{ marginTop: '40px' }}>
        Bookings
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Listing Name</TableCell>
              <TableCell>Check-in</TableCell>
              <TableCell>Check-out</TableCell>
              <TableCell>Guests</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.slice(pageBookings * rowsPerPage, pageBookings * rowsPerPage + rowsPerPage).map((booking) => (
              <TableRow key={booking._id}>
                <TableCell>{booking.listing.name}</TableCell>
                <TableCell>{new Date(booking.checkIn).toLocaleDateString()}</TableCell>
                <TableCell>{new Date(booking.checkOut).toLocaleDateString()}</TableCell>
                <TableCell>{booking.guests}</TableCell>
                <TableCell>${booking.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={bookings.length}
        rowsPerPage={rowsPerPage}
        page={pageBookings}
        onPageChange={handleChangePageBookings}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Container>
  );
};

export default AdminPanel;
