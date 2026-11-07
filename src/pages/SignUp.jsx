import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  IconButton,
  Link as MuiLink,
  Paper,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signing up:', { name, email, password, agreed });
  };

  return (
    /* GREYED-OUT BACKGROUND OVERLAY CONTAINER */
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.55)', // Dimmed grey backdrop
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1300,
        p: 2,
      }}
    >
      {/* THE SIGNUP CARD CONTAINER */}
      <Paper
        elevation={6}
        sx={{
          width: '100%',
          maxWidth: 420,
          p: 4,
          borderRadius: 2,
          position: 'relative',
          backgroundColor: '#ffffff',
        }}
      >
        {/* Close "X" button to go back */}
        <IconButton
          aria-label="close"
          onClick={() => navigate('/contact')}
          sx={{
            position: 'absolute',
            right: 16,
            top: 16,
            color: 'grey.500',
          }}
        >
          <CloseIcon />
        </IconButton>

        <Typography variant="h5" component="h2" sx={{ fontWeight: 700, mb: 3 }}>
          Sign Up
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            margin="dense"
            fullWidth
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
            size="small"
            sx={{ mb: 2 }}
          />

          <TextField
            margin="dense"
            fullWidth
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            size="small"
            sx={{ mb: 2 }}
          />

          <TextField
            margin="dense"
            fullWidth
            type={showPassword ? 'text' : 'password'}
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            size="small"
            sx={{ mb: 2.5 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    edge="end"
                    size="small"
                  >
                    {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disableElevation
            sx={{
              backgroundColor: '#4066ff',
              '&:hover': { backgroundColor: '#1f3e72' },
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 600,
              py: 1.2,
              mb: 2,
              borderRadius: 1,
            }}
          >
            Create account
          </Button>

          <FormControlLabel
            control={
              <Checkbox
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                size="small"
                sx={{
                  color: '#999',
                  '&.Mui-checked': { color: '#4066ff' },
                }}
              />
            }
            label={
              <Typography variant="caption" sx={{ color: '#666', lineHeight: 1.3 }}>
                By continuing, i agree to the terms of use & privacy policy.
              </Typography>
            }
            sx={{ alignItems: 'flex-start', mb: 2.5, ml: -0.5 }}
          />

          <Typography variant="body2" sx={{ color: '#555' }}>
            Already have an account?{' '}
            <MuiLink
              component={RouterLink}
              to="/Login"
              underline="none"
              sx={{
                color: '#4066ff',
                fontWeight: 600,
                cursor: 'pointer',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              Login here
            </MuiLink>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}