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
      <table>
        <thead>
          <td>Name</td>
          <td>Age</td>

          <td>Gender</td>
        </thead>
        <tbody>
          {residents.map((e) => {
            return (
              <tr>
                <td>{e.name}</td>
                <td>{e.gender}</td>
                <td>{e.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
