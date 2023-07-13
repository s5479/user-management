import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Button } from "@mui/material";
function UserInfo() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state;
  const back = () => {
    navigate("/");
  };
  return (
    <div
      style={{
        width: "400px",
        margin: "auto",
        border: "1px solid black",
        borderRadius: "5px",
        marginTop: "80px",
        boxShadow: "1px 1px 5px gray",
        display: "flex",
        justifyContent: "center",
        fontSize: "50px",
      }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FingerprintIcon />
            </ListItemIcon>
            <ListItemText primary={user._id} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={user.name} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary={user.email} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocalPhoneIcon />
            </ListItemIcon>
            <ListItemText primary={user.phone} />
          </ListItemButton>
        </ListItem>
        <Button variant="outlined" onClick={back}>
          <ArrowBackIcon />
          Back
        </Button>
      </List>
    </div>
  );
}

export default UserInfo;
