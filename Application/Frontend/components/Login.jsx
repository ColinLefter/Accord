import React, { useState } from 'react';
import { Paper, Text, TextInput, Button, Box, DatePicker } from '@mantine/core';

const RegistrationPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleRegistration = () => {
    // Handle registration logic here
    console.log('Registering...');
  };

  return (
    <Box style={{ backgroundColor: '#F0F4F7', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper padding="md" radius="md" style={{ maxWidth: 400 }}>
        <Paper padding="md" radius="md" style={{ backgroundColor: '#FFF', marginBottom: 20 }}>
          <Text align="center" size="lg" weight={700} style={{ marginBottom: 10 }}>
            Registration
          </Text>
          <div style={{ marginBottom: 10 }}>
            <label style={{ display: 'block', marginBottom: 5 }}>Email</label>
            <TextInput placeholder="Enter your email" type="email" fullWidth />
          </div>
          <div style={{ marginBottom: 10 }}>
            <label style={{ display: 'block', marginBottom: 5 }}>Display Name</label>
            <TextInput placeholder="Enter your display name" fullWidth />
          </div>
          <div style={{ marginBottom: 10 }}>
            <label style={{ display: 'block', marginBottom: 5 }}>Username</label>
            <TextInput placeholder="Enter your username" fullWidth />
          </div>
          <div style={{ marginBottom: 10 }}>
            <label style={{ display: 'block', marginBottom: 5 }}>Password</label>
            <TextInput placeholder="Enter your password" type="password" fullWidth />
          </div>
          <div style={{ marginBottom: 10 }}>
            <label style={{ display: 'block', marginBottom: 5 }}>Date of Birth</label>
            <DatePicker
              placeholder="Select your date of birth"
              value={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              fullWidth
            />
          </div>
          <Button fullWidth onClick={handleRegistration}>
            Register
          </Button>
        </Paper>
      </Paper>
    </Box>
  );
};

export default RegistrationPage;
