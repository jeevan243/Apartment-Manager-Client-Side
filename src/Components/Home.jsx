import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
} from "@mui/material";

export const Home = () => {
  const local = JSON.parse(localStorage.getItem("userdata")) || false;
  const status = local;
  console.log(status);

  const [loading, setLoading] = useState(false);

  const [flats, setFlats] = useState([]);
  const [searchData, setSearchData] = useState("");
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

  //
 

  //

  //sort country

  function handleCountry() {
    flats.sort(function (a, b) {
      return a.type.localeCompare(b.type);
    });
    // console.log(flats);
    setFlats([...flats]);
  }

  //sort by population
  function handlePopulation(value) {
    if (value == 1) {
      flats.sort(function (a, b) {
        return a.flatnumber - b.flatnumber;
      });
    } else {
      flats.sort(function (a, b) {
        return b.flatnumber - a.flatnumber;
      });
    }
    setFlats([...flats]);
  }
  //searchBox

  const handleSearch = (e) => {
    const newValue = e.target.value;
    if (newValue.length == 0) {
      getFlats();
    } else {
      const newflats = flats.filter((el) => {
        // let text = "Hello world, welcome to the universe.";

        return el.block.startsWith(newValue);
      });
      setFlats(newflats);
    }
  };

  return (
    <>
      <h2>Home Page</h2>
      <hr />
      <div>
        <div>
          <h2>Search here..</h2>

          <input
            type="text"
            id="search"
            onChange={handleSearch}
            maxLength={1}
          />
        </div>
        <div>
          {" "}
          <h3>Sort By:</h3>
          <Button variant="outlined" onClick={handleCountry}>
            Type
          </Button>{" "}
          <Button
            variant="outlined"
            onClick={() => {
              handlePopulation(1);
            }}
          >
            Flat asc
          </Button>{" "}
          <Button
            variant="outlined"
            onClick={() => {
              handlePopulation(-1);
            }}
          >
            Flat desc
          </Button>
        </div>
      </div>
      <br />
      <br />
      {status ? (
        <>
          {" "}
          <TableContainer
            component={Paper}
            style={{ width: "80%", margin: "auto" }}
          >
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
                      <TableCell align="center">{5}</TableCell>
                      <TableCell
                        onClick={() => {
                          navigate(`/flats/${e._id}`);
                        }}
                        align="center"
                      >
                        <Button variant="contained">Details</Button>
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





