import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Alert, Paper, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api from '../api/axiosInstance';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await api.post('/auth/register', { username, email, password });
      navigate('/login'); // Redirect to login after signup
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        sx={{
          mt: 8,
          p: 4,
          borderRadius: 4,
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        }}
      >
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Welcome to Airbnb
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Create your account to get started
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ borderRadius: 2 }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ borderRadius: 2 }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ borderRadius: 2 }}
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              mt: 2,
              py: 1,
              fontSize: '1rem',
              borderRadius: 2,
              backgroundColor: '#FF385C',
              '&:hover': { backgroundColor: '#E31C5F' },
            }}
            onClick={handleSignup}
          >
            Sign Up
          </Button>
        </Box>

        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 3, color: 'text.secondary' }}
        >
          Already have an account?{' '}
          <Button
            variant="text"
            sx={{ color: '#FF385C', textTransform: 'none', fontWeight: 'bold' }}
            onClick={() => navigate('/login')}
          >
            Log in
          </Button>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Signup;
