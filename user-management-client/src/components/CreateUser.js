import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function CreateUser() {
  const navigate = useNavigate();
  const [user, addUser] = useState({ name: "", email: "", phone: "" });
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [nameError, setNameError] = useState(false);

  const handleInput = (e) => {
    addUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    setNameError(false);
    setEmailError(false);
    setPhoneError(false);

    if (user.name === "") {
      setNameError(true);
    }
    if (user.email === "") {
      setEmailError(true);
    }
    if (user.phone === "") {
      setPhoneError(true);
    }
    console.log(user);
    try {
      const fetchData = async () => {
        const response = await axios.post(
          "http://localhost:5000/adduser",
          user
        );
      };

      fetchData();
    } catch (error) {
      console.log(error);
    }

    navigate("/");
  };

  return (
    <div
      style={{
        width: "500px",
        maxWidth: "75%",
        margin: "auto",
        border: "1px solid black",
        padding: "40px",
        paddingTop: "0px",
        marginTop: "40px",
        borderRadius: "10px",
        boxShadow: "1px 1px 5px orange",
      }}
    >
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center" }}>User Form</h2>
        <TextField
          label="Name"
          onChange={handleInput}
          required
          variant="outlined"
          color="warning"
          type="text"
          sx={{ mb: 3 }}
          fullWidth
          value={user.name}
          error={nameError}
          name="name"
        />
        <TextField
          label="Email"
          onChange={handleInput}
          required
          variant="outlined"
          color="warning"
          type="email"
          sx={{ mb: 3 }}
          fullWidth
          value={user.email}
          error={emailError}
          name="email"
        />
        <TextField
          label="Phone Number"
          onChange={handleInput}
          required
          variant="outlined"
          color="warning"
          type="number"
          value={user.phone}
          error={phoneError}
          fullWidth
          sx={{ mb: 3 }}
          name="phone"
        />
        <Button
          variant="contained"
          type="submit"
          style={{
            background: "orange",
            textShadow: "2px 2px 1px black",
            fontWeight: "bold",
          }}
        >
          Create New User
        </Button>
      </form>
    </div>
  );
}

export default CreateUser;
