import React, { useState, useContext } from 'react';
import { TextField, Button, Typography, Container, Box, Alert, Paper, Divider } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import api from '../api/axiosInstance';
import { AuthContext } from '../contexts/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const {login} = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const response = await api.post('/auth/login', { email, password });
      login(response.data.token);
      const redirectTo = location.state?.from || "/";
      navigate(redirectTo);
      // Redirect to home/dashboard
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
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
            Welcome Back
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Log in to continue your journey with Airbnb
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
            onClick={handleLogin}
          >
            Log In
          </Button>
        </Box>

        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 3, color: 'text.secondary' }}
        >
          Don’t have an account?{' '}
          <Button
            variant="text"
            sx={{ color: '#FF385C', textTransform: 'none', fontWeight: 'bold' }}
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </Button>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Login;
