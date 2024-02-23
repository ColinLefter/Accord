/* 
The Login page mostly use the styling from mantine API
- useState formData:
  + formData is an object with 2 string attributes: userName, password
  + formData has a setFormData() function to update it

- function handleChange():
  + return type: void
  + whenever a user type anything, handleChange() save that data to formData using setFormData()

- function handleChange():
  + return type: void
  + whenever a user click on the continue button, it checks if the 2 entered password match each other, if not change isPasswordNotMatched to true using setIsPasswordNotMatched() function
  + if match submit formData to the database to progress
*/
import { Container, Paper, Text, TextInput, PasswordInput, Button, Group, Select, Title, Center } from '@mantine/core';
import { FormEvent, useState } from 'react';
import Link from 'next/link';

export function Login(){
  //The useState for the formData object
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  const [isPasswordNotMatched, setIsPasswordNotMatched] = useState(false)

  //handle submit and handle change function
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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

  return (
    <>
      <Center style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Container size="xs">
          <Title>
            <Text inherit component="span" gradient={{ from: 'cyan', to: 'blue' }} mr={10}>
              Welcome back to
            </Text>
            <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
              Accord
            </Text>
          </Title>
          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <Text ta='center' fw={700} style={{ fontSize: '24px' }} className="text-center">
              Log in
            </Text>
            <form onSubmit={handleSubmit}>
              <TextInput label="Username" required mt="md" name="userName" value={formData.userName} onChange={handleChange}/>
              <PasswordInput label="Password" required mt="md" name="password" value={formData.password} onChange={handleChange}/>

              <div>
                <Text ta='center' mt='md' style={{ fontSize: '16px' }}>
                  Don't have an account? <Link href="/create-account">Create one today</Link>
                </Text>
              </div>
              
              <div style={{ marginTop: '1.5em' }}>
                <Button type="submit" fullWidth className="bg-black">Log in</Button>
              </div>
            </form>
          </Paper>
        </Container>
      </Center>
    </>
  );
};