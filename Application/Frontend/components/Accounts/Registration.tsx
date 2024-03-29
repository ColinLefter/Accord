"use client";
/* 
The Registration page mostly use the styling from mantine API
- useState formData:
  + formData is an object with 5 string attributes: userName, email, tel, password, confirmedPasword
  + formData has a setFormData() function to update it

- useState isPasswordNotMatched:
  + isPasswordNotMatched is a boolean we use to check if the 2 entered password match each other
  + isPasswordNotMatched has a setIsPasswordNotMatched() function to update it

- function handleChange():
  + return type: void
  + whenever a user type anything, handleChange() save that data to formData using setFormData()

- function handleChange():
  + return type: void
  + whenever a user click on the continue button, it checks if the 2 entered password match each other, if not change isPasswordNotMatched to true using setIsPasswordNotMatched() function
  + if match submit formData to the database to progress
*/
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
} from "@mantine/core";
import { FormEvent, use, useState } from "react";
import Link from "next/link";

export function Registration() {
  
  //The useState for the formData object
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    tel: "",
    password: "",
    confirmedPassword: "",
    month: "",
    date: "",
    year: ""
  });

  // To facilitates when the password is not matched - which is also the only criteria
  const [isPasswordNotMatched, setIsPasswordNotMatched] = useState(false);

  /**
   * Handles form submission, sending the registration request to the server and processing
   * the response (to append the newly validated account information) 
   * to either proceed to the application or show error messages.
   *
   * @param event - The form submission event
   */

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Client-side password confirmation
    if (formData.confirmedPassword !== formData.password) {
      setIsPasswordNotMatched((currentIsPasswordNotMatched) => true);
    } else {
      setIsPasswordNotMatched((currentIsPasswordNotMatched) => false);
      // console.log(formData);
      // Can be re-enabled for bug-fixing
    }
    const response = await fetch('/api/registration', { // Establishing a promise
      method: 'POST', // As we are dealing with authentication, this is the most appropriate method
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData), // The data that is being sent
    });

    const data = await response.json();

    if (response.ok) {
      alert("Yes!")
    }
    // alert('Form submitted');
    // Can be re-enabled for testing
    // alert(JSON.stringify(formData, null, 2));
  };
  
  /**
   * Updates form data state on user input.
   *
   * @param evt - The input change event
   */
  const handleChange = (evt: any) => {
    const changedField = evt.target.name;
    const newValue = evt.target.value;
    setFormData((currData) => {
      return {
        ...currData,
        [changedField]: newValue,
      };
    });
  };
  const handleMonthChange = (Month: any) => {
    setFormData((currData) => {
      return {
        ...currData,
        month: Month,
      };
    });
  }
  const handleDateChange = (Date: any) => {
    setFormData((currData) => {
      return {
        ...currData,
        date: Date,
      };
    });
  }
  const handleYearChange = (Year: any) => {
    setFormData((currData) => {
      return {
        ...currData,
        year: Year,
      };
    });
  }

  // Months array
  const months = Array.from({ length: 12 }, (_, index) => ({
    value: new Date(0, index).toLocaleString("default", { month: "long" }),
    label: new Date(0, index).toLocaleString("default", { month: "long" }),
  }));

  // Days array
  const days = Array.from({ length: 31 }, (_, index) => ({
    value: `${index + 1}`,
    label: `${index + 1}`,
  }));

  // Years array
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, index) => ({
    value: `${currentYear - index}`,
    label: `${currentYear - index}`,
  }));

  return (
    <>
      <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            padding: "20px",
            marginRight: "11px",
          }}
        >
          <Link href="/log-in" style={{ textDecoration: "none" }}>
            <Button className="bg-black text-black">
              <Text size="sm">Log in</Text>
            </Button>
          </Link>
      </div>
      
      <Title ta="center" mt={100}>
        <Text
          inherit
          component="span"
          gradient={{ from: "cyan", to: "blue" }}
          mr={10}
        >
          Welcome to
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
      <Container size="xs" my={40}>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <Text ta="center" className="text-3xl" fw={700}>
            Create an account
          </Text>
          <form onSubmit={handleSubmit} onChange={handleChange}>
            <TextInput
              label="Email"
              required
              mt="md"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextInput
              label="Phone number"
              placeholder="1234567890"
              required
              mt="md"
              type="tel"
              name="tel"
              value={formData.tel}
              onChange={handleChange}
              pattern="[0-9]{10}"
            />
            <TextInput
              label="Username"
              required
              mt="md"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
            />
            <PasswordInput
              label="Password"
              required
              mt="md"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <PasswordInput
              label="Confirm password"
              required
              mt="md"
              name="confirmedPassword"
              value={formData.confirmedPassword}
              onChange={handleChange}
            />
            {/*If the password does not match, a warning line will show up prompt the user to enter their password again*/}
            {isPasswordNotMatched && (
              <Text mt="xs" size="xs" c={"red"}>
                Please enter the same password you entered above!
              </Text>
            )}

            <Text mt="md" size="sm" fw={500}>
              Date of Birth
            </Text>
            <Group grow mt="xs">
              <Select
                placeholder="Month"
                data={months}
                value={formData.month}
                onChange={(event) => handleMonthChange(event)}
                required
                searchable
                name="month"
              />
              <Select
                placeholder="Day"
                data={days}
                value={formData.date}
                onChange={(event) => handleDateChange(event)}
                required
                searchable
                className="day"
              />
              <Select
                placeholder="Year"
                data={years}
                value={formData.year}
                onChange={(event) => handleYearChange(event)}
                required
                searchable
              />
            </Group>

            <div className="py-4">
              <Button type="submit" className="bg-black" fullWidth>
                Create account
              </Button>
            </div>
          </form>
        </Paper>
      </Container>
    </>

    
  );
}
