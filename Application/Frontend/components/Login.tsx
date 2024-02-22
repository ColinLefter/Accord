// Use "use client" if you are using Remix to ensure this code runs on the client. 
// Next.js does not require this directive.
"use client";

import { Container, Paper, Text, TextInput, PasswordInput, Button, Group, Select } from '@mantine/core';
import { FormEvent } from 'react';

// Define the props if needed, for now, it's empty because we don't have any props for this component.
interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you would handle the form submission, e.g., send data to an API
    alert('Form submitted');
  };

  // Months array
  const months = Array.from({ length: 12 }, (_, index) => ({
    value: `${index + 1}`,
    label: new Date(0, index).toLocaleString('default', { month: 'long' })
  }));

  // Days array
  const days = Array.from({ length: 31 }, (_, index) => ({
    value: `${index + 1}`,
    label: `${index + 1}`
  }));

  // Years array
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, index) => ({
    value: `${currentYear - index}`,
    label: `${currentYear - index}`
  }));

  return (
    <Container size="xs" my={40}>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Text size="lg">
          Create an account
        </Text>
        <form onSubmit={handleSubmit}>
          <TextInput label="EMAIL" required mt="md" />
          <TextInput label="DISPLAY NAME" mt="md" />
          <PasswordInput label="PASSWORD" required mt="md" />
          
          <Text mt="md" size="sm" >
            DATE OF BIRTH - Required
          </Text>
          <Group  grow mt="xs">
            <Select placeholder="Month" data={months} required />
            <Select placeholder="Day" data={days} required />
            <Select placeholder="Year" data={years} required />
          </Group>
          
          <Group mt="xl">
            <Button type="submit" fullWidth>Continue</Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
};

export default Register;
