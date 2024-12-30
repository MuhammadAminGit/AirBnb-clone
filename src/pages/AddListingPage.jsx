import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddListingPage = () => {
  const [listingData, setListingData] = useState({
    name: '',
    description: '',
    picture_url: '',
    price: '',
    accommodates: 1,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    host_name: '',
    host_url: '',
    property_type: '',
    room_type: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setListingData({
      ...listingData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/admin/listings', listingData, {
        headers: { 'Authorization': 'Bearer admin' },
      });
      navigate('/admin'); // Redirect to admin dashboard after successful addition
    } catch (error) {
      console.error('Error adding listing:', error);
    }
  };

  return (
    <Container sx={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Add New Listing
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={listingData.name}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={listingData.price}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Host Name"
              name="host_name"
              value={listingData.host_name}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Host URL"
              name="host_url"
              value={listingData.host_url}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              value={listingData.description}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Picture URL"
              name="picture_url"
              value={listingData.picture_url}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Accommodates"
              name="accommodates"
              value={listingData.accommodates}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Bedrooms"
              name="bedrooms"
              value={listingData.bedrooms}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Beds"
              name="beds"
              value={listingData.beds}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Bathrooms"
              name="bathrooms"
              value={listingData.bathrooms}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Property Type"
              name="property_type"
              value={listingData.property_type}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Room Type"
              name="room_type"
              value={listingData.room_type}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
            />
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" type="submit" sx={{ marginTop: '20px' }}>
          Add Listing
        </Button>
      </form>
    </Container>
  );
};

export default AddListingPage;
