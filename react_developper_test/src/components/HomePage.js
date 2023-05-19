import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const arr = [];
      for (const x in [1, 2]) {
        await axios
          .get(`https://reqres.in/api/users?page=${parseInt(x) + 1}`)
          .then((res) => arr.push(...res.data.data));
      }
      setData(arr);
    })();
  }, []);
  return (
    <>
      <h2 className="title">Title</h2>
      <h2 className="h2">Users</h2>
      <div className="container">
        {data.map((el) => (
          <>
            <div className="card" key={el.id} onClick={() => navigate(`/users/${el.id}`)}>
              <img src={el.avatar} alt={el.first_name} />
              <p>{el.first_name}</p>
              <p className="p">{el.email}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default HomePage;
