
"use client";
import { Container, Paper, Text, TextInput, PasswordInput, Button, Group, Select } from '@mantine/core';

export default function Register() {
  const handleSubmit = (event) => {
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
        <Text size="lg" weight={500} align="center">
          Create an account
        </Text>
        <form onSubmit={handleSubmit}>
          <TextInput label="EMAIL" required mt="md" />
          <TextInput label="DISPLAY NAME" mt="md" />
          <PasswordInput label="PASSWORD" required mt="md" />
          
          <Text mt="md" size="sm" weight={500}>
            DATE OF BIRTH - Required
          </Text>
          <Group spacing="xs" grow mt="xs">
            <Select placeholder="Month" data={months} required />
            <Select placeholder="Day" data={days} required />
            <Select placeholder="Year" data={years} required />
          </Group>
          
          <Group position="right" mt="xl">
            <Button type="submit" fullWidth>Continue</Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
}

