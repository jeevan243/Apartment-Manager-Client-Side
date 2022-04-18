import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const FlatDetails = () => {
  const { id } = useParams();
  //  console.log("id",id)
  const [residents, setResidents] = useState([]);
  useEffect(() => {
    getFlat();
  }, []);

  //getflats
  const getFlat = () => {
    axios
      .get(`https://apartment-manager-system.herokuapp.com/residents/${id}`)
      .then((res) => {
        // const data = res.data
        console.log("residents", res.data);
        setResidents(res.data);
      });
  };

  return (
    <>
      <h1>FlatDetails Page</h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow
              style={{
                backgroundColor: "teal",
                color: "white",
                border: "1px solid black",
              }}
            >
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Age</TableCell>
              <TableCell align="center">Gender</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {residents.map((e) => {
              return (
                <TableRow>
                  <TableCell
                    align="center"
                    style={{ border: "1px solid black" }}
                  >
                    {e.name}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ border: "1px solid black" }}
                  >
                    {e.age}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ border: "1px solid black" }}
                  >
                    {e.gender}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
