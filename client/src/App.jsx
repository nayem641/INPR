import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Box,
  Button,
  TextField,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Select,
  MenuItem,
  Avatar,
  Paper,
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

const steps = [
  "Welcome",
  "Personal Info",
  "Account Info",
  "Additional Info",
  "Upload Photo",
];

const App = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    phoneNumber: "",
    password: "",
    dateOfBirth: "",
    gender: "",
    bloodGroup: "",
    profilePhoto: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (event) => {
    setFormData({ ...formData, profilePhoto: event.target.files[0] });
  };

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      console.log("Form Data:", formData);
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box textAlign="center" py={4}>
            <Avatar
              alt="Welcome Image"
              src="/inpr.webp"
              sx={{
                width: 100,
                height: 100,
                margin: "0 auto",
                mb: 2,
                boxShadow: 3,
              }}
            />
            <Typography variant="h5" color="primary" gutterBottom>
              Welcome to Our Platform
            </Typography>
            <Typography color="textSecondary" mb={3}>
              Please read our terms and conditions carefully before signing up.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              sx={{
                paddingX: 4,
                borderRadius: 2,
                boxShadow: 2,
              }}
            >
              Start
            </Button>
          </Box>
        );

      case 1:
        return (
          <Box>
            <Typography variant="h6" color="primary" gutterBottom>
              Personal Information
            </Typography>
            <TextField
              name="firstName"
              label="First Name"
              fullWidth
              margin="normal"
              value={formData.firstName}
              onChange={handleChange}
            />
            <TextField
              name="lastName"
              label="Last Name"
              fullWidth
              margin="normal"
              value={formData.lastName}
              onChange={handleChange}
            />
            <TextField
              name="email"
              label="Email"
              fullWidth
              margin="normal"
              value={formData.email}
              onChange={handleChange}
            />
          </Box>
        );

      case 2:
        return (
          <Box>
            <Typography variant="h6" color="primary" gutterBottom>
              Account Information
            </Typography>
            <TextField
              name="occupation"
              label="Occupation"
              fullWidth
              margin="normal"
              value={formData.occupation}
              onChange={handleChange}
            />
            <TextField
              name="phoneNumber"
              label="Phone Number"
              fullWidth
              margin="normal"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={formData.password}
              onChange={handleChange}
            />
          </Box>
        );

      case 3:
        return (
          <Box>
            <Typography variant="h6" color="primary" gutterBottom>
              Additional Information
            </Typography>
            <FormControl component="fieldset" margin="normal" fullWidth>
              <Typography>Gender</Typography>
              <RadioGroup
                row
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              name="dateOfBirth"
              label="Date of Birth"
              type="date"
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
            <FormControl fullWidth margin="normal">
              <Select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                displayEmpty
              >
                <MenuItem value="" disabled>
                  Select Blood Group
                </MenuItem>
                {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map(
                  (bg) => (
                    <MenuItem key={bg} value={bg}>
                      {bg}
                    </MenuItem>
                  )
                )}
              </Select>
            </FormControl>
          </Box>
        );

      case 4:
        return (
          <Box textAlign="center" py={2}>
            <Typography variant="h6" color="primary" gutterBottom>
              Upload Your Photo
            </Typography>
            <Box
              sx={{
                // border: "2px dashed #1976d2",
                borderRadius: 2,
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                mb: 3,
              }}
            >
              <Avatar
                alt="Profile Preview"
                src={
                  formData.profilePhoto
                    ? URL.createObjectURL(formData.profilePhoto)
                    : "/user.png"
                }
                sx={{
                  width: 100,
                  height: 100,
                  // mb: 2,
                  boxShadow: 2,
                }}
              />
              {/* <Typography variant="body1" color="textSecondary">
                Drag & drop your image here or click to select a file
              </Typography> */}
            </Box>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="upload-photo"
              type="file"
              onChange={handlePhotoChange}
            />
            <label htmlFor="upload-photo">
              <Button
                variant="outlined"
                color="primary"
                component="span"
                sx={{
                  mt: 2,
                  boxShadow: 1,
                  borderRadius: 2,
                }}
              >
                Choose Photo
              </Button>
            </label>
            {/* <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              sx={{
                mt: 4,
                paddingX: 4,
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              Submit
            </Button> */}
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          overflow: "hidden",
        }}
      >
        <Paper
          sx={{
            p: 4,
            maxWidth: 400,
            width: "100%",
            mx: "auto",
            boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
            borderRadius: 3,
          }}
        >
          <Typography variant="h4" align="center" gutterBottom color="primary">
            Signup Form
          </Typography>
          <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 3 }}>
            {steps.map((label) => (
              <Step key={label} sx={{ flex: 1 }}>
                <StepLabel
                  sx={{
                    "& .MuiStepLabel-label": {
                      display: "none", // Hide the label
                    },
                    "& .MuiStepLabel-iconContainer": {
                      display: "none", // Hide the connector lines
                    },
                  }}
                />
              </Step>
            ))}
          </Stepper>
          <Box sx={{ mt: 3 }}>{renderStepContent(activeStep)}</Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            {activeStep > 0 && (
              <Button
                onClick={handleBack}
                sx={{ mr: 2 }}
                disabled={activeStep === 0}
                variant="outlined"
                color="primary"
              >
                Back
              </Button>
            )}
            {activeStep !== 0 && (
              <Button onClick={handleNext} variant="contained" color="primary">
                {activeStep < steps.length - 1 ? "Next" : "Submit"}
              </Button>
            )}
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default App;
