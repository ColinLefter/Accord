
"use client";
import { Container, Paper, Text, TextInput, PasswordInput, Button, Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import dayjs from 'dayjs';

export default function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle the form submission, e.g., send data to an API
    alert('Form submitted');
  };

  return (
    <Container size="xs" my={40}>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Text size="lg" weight={500} align="center">
          Register
        </Text>
        <form onSubmit={handleSubmit}>
          <TextInput label="EMAIL" required mt="md" />
          <TextInput label= "DISPLAY NAME" mt = "md"/>
          <PasswordInput label="PASSWORD"  required mt="md" />
         
          <Group position="right" mt="xl">
            <Button type="submit" fullWidth >Continue </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
}

