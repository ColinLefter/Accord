"use client";
import { Center } from "@mantine/core";
import { useState } from "react";
import React from "react";

export default function Registration():JSX.Element{
    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        tel: "",
        password: "",
      });
    
      const handleChange = (evt) => {
        const changedField = evt.target.name;
        const newValue = evt.target.value;
        setFormData((currData) => {
          return {
            ...currData,
            [changedField]: newValue,
          };
        });
      };
    
      const handleSubmit = () => {
        console.log(formData);
      };
      return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column" }}>
          <div>
            <label htmlFor="username" style={{ display: 'block', marginBottom: 5 }}>User Name</label>
            <input
              type="text"
              placeholder="username"
              value={formData.userName}
              onChange={handleChange}
              name="username"
              id="username"
              required
            />
          </div>
          <div>
            <label htmlFor="email" style={{ display: 'block', marginBottom: 5 }}>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              id="email"
              name="email"
              required
            />
          </div>
          <div>
            <label htmlFor="tel" style={{ display: 'block', marginBottom: 5 }}>Phone number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={formData.tel}
              onChange={handleChange}
              id="tel"
              name="tel"
              required
            />
          </div>
          <div>
            <label htmlFor="password" style={{ display: 'block', marginBottom: 5 }}>Password</label>
            <input
              type="password"
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
              id="password"
              name="password"
              required
            />
          </div>
          <div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      );
}
// export default Registration;