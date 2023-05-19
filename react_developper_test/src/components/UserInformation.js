import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./styles.css";

const UserInformation = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () =>
      await axios
        .get(`https://reqres.in/api/users/${id}`)
        .then((res) => setData(res.data.data)))();
  }, []);

  return (
    <div>
      <h2 className="back" onClick={() => navigate("/")}>
        Back
      </h2>
      <div className="container-view">
        <div className="card single" key={data.id}>
          <img src={data.avatar} alt={data.first_name} />
        </div>
        <div className="table-div">
          <table>
            <tbody>
              <tr>
                <td>First Name</td>
                <td>{data.first_name}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{data.last_name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td className="p">{data.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
