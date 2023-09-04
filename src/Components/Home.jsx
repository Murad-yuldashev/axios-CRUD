import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();

  const [usersInfo, setUsersInfo] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3030/users")
      .then((res) => setUsersInfo(res?.data));
  }, []);
  
  const deleteUser = (e) => {
    axios.delete("http://localhost:3030/users/" + e)
      .then(res => console.log(res.data))
  }

  return (
    <section className="container mt-5">
      <h1>Users Info in Server-Json</h1>
      <Link to={'/added'} className="btn btn-success">Add new User</Link>
      <table className="table table-hover mt-4">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {usersInfo?.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <th>{item.name}</th>
              <th>{item.email}</th>
              <th>
                <Link to={'/read/' + item.id} className="btn btn-info">Read</Link>
                <Link to={'/update/'+item.id} className="btn btn-primary">Update</Link>
                <button onClick={() => deleteUser(item.id)} className="btn btn-danger">Delete</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Home;
