"use client";
/* 
The Registration page mostly use the styling from mantine API

*/
import { Container, Paper, Text, TextInput, PasswordInput, Button, Group, Select } from '@mantine/core';
import { FormEvent } from 'react';
import { useState } from 'react';

function RegistrationPage(){
  //The useState for the form object
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    tel: "",
    password: "",
    confirmedPassword: "",
  });
  const [isPasswordNotMatched, setIsPasswordNotMatched] = useState(false)

  //handle submit and handle change method
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //check if password matched the confirmed password or not if not prompt the warning
    if(formData.confirmedPassword !== formData.password){
        setIsPasswordNotMatched(currentIsPasswordNotMatched => true);
    }
    else{
      setIsPasswordNotMatched(currentIsPasswordNotMatched => false);
      console.log(formData)
    }
    //alert('Form submitted');
  };
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
        <form onSubmit={handleSubmit} onChange={handleChange}>
          <TextInput label="EMAIL" required mt="md" type="email" name="email" value={formData.email}/>
          <TextInput label="PHONE NUMBER (type in 10 digits of your phone number)" required mt="md" type="tel" name="tel" value={formData.tel} pattern="[0-9]{10}"/>
          <TextInput label="DISPLAY NAME" required mt="md" name="userName" value={formData.userName}/>
          <PasswordInput label="PASSWORD" required mt="md" name="password" value={formData.password}/>
          <PasswordInput label="CONFIRM PASSWORD" required mt="md" name="confirmedPassword" value={formData.confirmedPassword}/>
          {/*If the password does not match, a warning line will show up prompt the user to enter their password again*/}
          {isPasswordNotMatched && <Text mt="xs" size="xs" c={"red"}>Please enter the same password you entered above!</Text>}
          
          <Text mt="md" size="sm" >
            DATE OF BIRTH - not required
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

export default RegistrationPage;
