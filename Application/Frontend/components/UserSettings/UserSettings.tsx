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

export function UserSetting() {

    const fetchUserData = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await fetch('/api/userSettings', { // Establishing a promise
          method: 'GET', // For getting the info related to the user - currently using the dummy user1
          headers: {
            'username': "user1"
          },
        });
        
        if (response.ok) {
            const data = await response.json(); // Parsing JSON data from the response body
            console.log(data); // Do something with the retrieved data
        } else {
            console.error('Failed to fetch user settings:', response.statusText);
        }
    }

}