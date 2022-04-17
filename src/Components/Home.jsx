import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export const Home = () => {
  const local = JSON.parse(localStorage.getItem("userdata")) || false;
  const status = local;
  console.log(status);

  const [flats, setFlats] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getFlats();
    console.log(flats);
  }, []);

  //
  function getFlats() {
    axios
      .get("https://apartment-manager-system.herokuapp.com/flats")
      .then((res) => {
        setFlats(res.data);
        // console.log(res.data);
      })
      .catch((e) => {
        console.log("flats not fetched");
      });
  }

  return (
    <>
      {status ? (
        <>
          {" "}
          <h2>Home Page</h2>
          <TableContainer component={Paper} style={{width:"80%", margin:"auto"}} >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow style={{ backgroundColor: "teal" }}>
                  <TableCell align="center">Flat.No</TableCell>
                  <TableCell align="center">Flat Type</TableCell>
                  <TableCell align="center">Block</TableCell>
                  <TableCell align="center">Residents</TableCell>
                  <TableCell align="center">Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {flats.map((e) => {
                  return (
                    <TableRow>
                      <TableCell align="center">{e.flatnumber}</TableCell>
                      <TableCell align="center">{e.type}</TableCell>
                      <TableCell align="center">{e.block}</TableCell>
                      <TableCell align="center">{"no of residents"}</TableCell>
                      <TableCell
                        onClick={() => {
                          navigate(`/flats/${e._id}`);
                        }}
                        align="center"
                      >
                        {"Details"}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
};
