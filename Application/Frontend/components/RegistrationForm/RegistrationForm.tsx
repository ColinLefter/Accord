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
import { Container, Paper, Text, TextInput, PasswordInput, Button, Group, Select, Title } from '@mantine/core';
import { FormEvent, useState } from 'react';

export function RegistrationForm(){
  //The useState for the formData object
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    tel: "",
    password: "",
    confirmedPassword: "",
  });
  const [isPasswordNotMatched, setIsPasswordNotMatched] = useState(false)

  //handle submit and handle change function
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
    alert(JSON.stringify(formData, null, 2));
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
    <>
      <Title ta="center" mt={100}>
        <Text inherit component="span" gradient={{ from: 'cyan', to: 'blue' }} mr={10}>
          Welcome to
        </Text>
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Accord
        </Text>  
      </Title>
      <Container size="xs" my={40}>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <Text ta='center' className="text-3xl" fw={700}>
            Create an account
          </Text>
          <form onSubmit={handleSubmit} onChange={handleChange}>
            <TextInput label="Email" required mt="md" type="email" name="email" value={formData.email} onChange={handleChange}/>
            <TextInput label="Phone number" placeholder="1234567890" required mt="md" type="tel" name="tel" value={formData.tel} onChange={handleChange} pattern="[0-9]{10}"/>
            <TextInput label="Username" required mt="md" name="userName" value={formData.userName} onChange={handleChange}/>
            <PasswordInput label="Password" required mt="md" name="password" value={formData.password} onChange={handleChange}/>
            <PasswordInput label="Confirm password" required mt="md" name="confirmedPassword" value={formData.confirmedPassword} onChange={handleChange}/>
            {/*If the password does not match, a warning line will show up prompt the user to enter their password again*/}
            {isPasswordNotMatched && <Text mt="xs" size="xs" c={"red"}>Please enter the same password you entered above!</Text>}
            
            <Text mt="md" size="sm" fw={500} >
              Date of Birth
            </Text>
            <Group  grow mt="xs">
              <Select placeholder="Month" data={months} onChange={handleChange} required />
              <Select placeholder="Day" data={days} onChange={handleChange} required />
              <Select placeholder="Year" data={years} onChange={handleChange} required />
            </Group>
            
            <div className="py-4">
              <Button type="submit" className="bg-black" fullWidth>Create account</Button>
            </div>
          </form>
        </Paper>
      </Container>
    </>
  );
};