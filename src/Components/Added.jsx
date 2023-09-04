import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Added = () => {
  const [added, setAdded] = useState({
    name: "",
    email: "",
  });
  const navigate = useNavigate()
  const inputInfo = (e) => {
    setAdded({
      ...added,
      [e.target.name]: e.target.value,
    });
  };

  const addedInfo = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3030/users', added)
        .then(res => console.log(res))
    navigate('/')
  }
  return (
    <section
      style={{ width: "35%" }}
      className="container-fluid mt-5 px-5 py-3 bg-secondary"
    >
      <h1 className="text-light">Added User</h1>
      <form onSubmit={addedInfo}>
        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label text-light fs-5">
            Email:
          </label>
          <input
            onChange={inputInfo}
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label text-light fs-5">
            Name:
          </label>
          <input
            onChange={inputInfo}
            type="name"
            className="form-control"
            id="name"
            placeholder="Enter name"
            name="name"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Added;
