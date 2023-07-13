import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

function AllUser() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = (await axios.get("http://localhost:5000/getalluser"))
          .data;
        setUsers(response);
        setLoading(false);
      };

      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  // console.log(users);
  const deleteUser = (id) => {
    // console.log("hello or kyis");
    try {
      const fetchData = async () => {
        await axios.delete(`http://localhost:5000/deleteuser/${id}`);
      };

      fetchData();
    } catch (error) {
      console.log(error);
    }
    window.location.replace("/");
  };
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <TableContainer
            component={Paper}
            style={{ width: "90%", margin: "auto", marginTop: "50px" }}
          >
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: "bold" }}>User ID</TableCell>
                  <TableCell align="right" style={{ fontWeight: "bold" }}>
                    Name
                  </TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user._id}>
                    <TableCell component="th" scope="row">
                      {user._id}
                    </TableCell>
                    <TableCell align="right">{user.name}</TableCell>
                    <TableCell align="right">
                      <Link to="/userinfo" state={user}>
                        <Button variant="outlined">
                          <VisibilityIcon />
                          View
                        </Button>
                      </Link>
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        variant="outlined"
                        component={Link}
                        to={`/edituser/${user._id}`}
                      >
                        <EditIcon />
                        Edit
                      </Button>
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        variant="outlined"
                        onClick={() => deleteUser(user._id)}
                      >
                        <DeleteIcon />
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </div>
  );
}

export default AllUser;
