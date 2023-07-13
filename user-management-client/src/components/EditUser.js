import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader";
import axios from "axios";

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, addUser] = useState({ name: "", email: "", phone: "" });
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          `http://localhost:5000/edituser/${id}`
        );
        addUser(response.data[0]);
        // console.log(response.data[0]);
        setLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleInput = (e) => {
    addUser({ ...user, [e.target.name]: e.target.value });
    console.log("hey");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);

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
    // console.log(user);
    try {
      const fetchData = async () => {
        const response = await axios.put(
          `http://localhost:5000/edituser/${id}`,
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
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <h2 style={{ textAlign: "center" }}>Edit Form</h2>
            <TextField
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
              placeholder="Name"
            />
            <TextField
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
              placeholder="Email"
            />
            <TextField
              onChange={handleInput}
              required
              placeholder="Phone"
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
              Save
            </Button>
          </form>
        </>
      )}
    </div>
  );
}

export default EditUser;
