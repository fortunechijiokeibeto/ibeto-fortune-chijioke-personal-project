import React, { useState } from "react";
import {
  Dialog,
  Paper,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  IconButton,
  Link as MuiLink,
  Box,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CloseIcon from "@mui/icons-material/Close";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleClose = () => navigate("/");

  return (
    <Dialog open onClose={handleClose} maxWidth="xs" fullWidth>
      <Paper sx={{ p: 4, position: "relative", borderRadius: 2 }}>
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", right: 16, top: 16, color: "grey.500" }}
        >
          <CloseIcon />
        </IconButton>

        <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
          Login
        </Typography>

        <Box component="form" onSubmit={(e) => e.preventDefault()}>
          <TextField
            margin="dense"
            fullWidth
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size="small"
            sx={{ mb: 2 }}
          />

          <TextField
            margin="dense"
            fullWidth
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            size="small"
            sx={{ mb: 2.5 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#4066ff",
              "&:hover": { backgroundColor: "#1f3e72" },
              py: 1.2,
              mb: 2,
            }}
          >
            Login
          </Button>

          <FormControlLabel
            control={
              <Checkbox
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                size="small"
              />
            }
            label={
              <Typography variant="caption" sx={{ color: "#666" }}>
                By continuing, I agree to the terms of use & privacy policy.
              </Typography>
            }
            sx={{ mb: 2 }}
          />

          <Typography variant="body2" sx={{ color: "#555" }}>
            Don't have an account?{" "}
            <MuiLink
              component={RouterLink}
              to="/signup"
              state={{ backgroundLocation: location.state?.backgroundLocation }}
              sx={{ color: "#4066ff", fontWeight: 600 }}
            >
              Sign up now!
            </MuiLink>
          </Typography>
        </Box>
      </Paper>
    </Dialog>
  );
}