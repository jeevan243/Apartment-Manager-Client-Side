import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

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
          <h1>Home Page</h1>
          <table>
            <thead>
              <tr>
                <td>FlatNo</td>
                <td>FlatType</td>
                <td>Block</td>
                <td>Residents</td>
                <td>Details</td>
              </tr>
            </thead>
            <tbody>
              {flats.map((e) => {
                return (
                  <tr>
                    <td>{e.flatnumber}</td>
                    <td>{e.type}</td>
                    <td>{e.block}</td>
                    <td>{"no of residents"}</td>
                    <td
                      onClick={() => {
                        navigate(`/flats/${e._id}`);
                      }}
                    >
                      {"Details"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
};
