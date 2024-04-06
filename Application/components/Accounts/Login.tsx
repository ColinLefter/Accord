import {
  Container,
  Paper,
  Text,
  TextInput,
  PasswordInput,
  Button,
  Group,
  Select,
  Title,
  Center,
} from "@mantine/core";
import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';

/**
 * The Login component provides an entry point to the application, displaying a form
 * that accepts a username and password. Upon form submission, it sends these credentials
 * to the /api/login endpoint for verification and handles the response to either
 * redirect the user to the main application page or display error messages.
 */
export function Login() {
  const router = useRouter(); // To handle page redirection after the user logs in

  // State hooks for form data and validation errors
  const [formData, setFormData] = useState<{userName: string, password: string}>({
    userName: "",
    password: "",
  });

  // To facilitate client-side validation
  const [usernameError, setUsernameError] = useState(''); // The message for an incorrect username
  const [passwordError, setPasswordError] = useState(''); // The message for a correct username but incorrect password

  /**
   * Handles form submission, sending the login request to the server and processing
   * the response to either proceed to the application or show error messages.
   *
   * @param event - The form submission event
   */
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch('/api/login', { // Establishing a promise
      method: 'POST', // As we are dealing with authentication, this is the most appropriate method
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData), // The data that is being sent
    });

    const data = await response.json(); // Awaiting the resolution of the promise

    if (response.ok) { // If the response was successful
      router.push('/accord'); // Redirect the user to the main application page
    } else {
      if (data.error === 'Invalid username') {
        setUsernameError('Invalid username. Please try again.'); // Client-side validation
      } else if (data.error === 'Invalid password') {
        setPasswordError('Invalid password. Please try again.'); // Client-side validation
      }
    }
  };


  /**
   * Updates form data state on user input.
   *
   * @param evt - The input change event
   */
  const handleChange = (evt: any) => { // Upon changes, we update the form data
    const { name, value } = evt.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <Center
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container size="xs">
          <Title>
            <Text
              inherit
              component="span"
              gradient={{ from: "cyan", to: "blue" }}
              mr={10}
            >
              Welcome back to
            </Text>
            <Text
              inherit
              variant="gradient"
              component="span"
              gradient={{ from: "pink", to: "yellow" }}
            >
              Accord
            </Text>
          </Title>
          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <Text
              ta="center"
              fw={700}
              style={{ fontSize: "24px" }}
              className="text-center"
            >
              Log in
            </Text>
            <form onSubmit={handleSubmit}>
              <TextInput
                label="Username"
                required
                mt="md"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                error={usernameError} // Mantine has a built-in parameter for displaying errors
              />
              <PasswordInput
                label="Password"
                required
                mt="md"
                name="password"
                value={formData.password}
                onChange={handleChange}
                error={passwordError}
              />

              <div>
                <Text ta="center" mt="md" style={{ fontSize: "16px" }}>
                  Don&apos;t have an account?{" "}
                  <Link href="/create-account">
                    {" "}
                    <span style={{ color: "turquoise", cursor: "pointer" }}>
                      Create one today
                    </span>
                  </Link>
                </Text>
              </div>

              <div style={{ marginTop: "1.5em" }}>
                <Button type="submit" fullWidth className="bg-black">Log in</Button>
              </div>
            </form>
          </Paper>
        </Container>
      </Center>
    </>
  );
}
