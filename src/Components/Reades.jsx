import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Reades = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [infoUsers, setInfoUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/users/" + id)
      .then((res) => setInfoUsers(res.data));
  });

  return (
    <section
      style={{ width: "40%" }}
      className="container-fluid mt-5 px-5 py-3 bg-secondary"
    >
      <h1 className="text-light">Added User</h1>
      <form onSubmit={() => navigate('/')}>
        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label text-light fs-5">
            ID:
          </label>
          <input
            value={infoUsers.id}
            disabled
            type="number"
            className="form-control"
            id="email"
            placeholder="Id"
            name="email"
          />
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label text-light fs-5">
            Email:
          </label>
          <input
            value={infoUsers.email}
            disabled
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
            value={infoUsers.name}
            disabled
            type="name"
            className="form-control"
            id="name"
            placeholder="Enter name"
            name="name"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Back Home
        </button>
      </form>
    </section>
  );
};

export default Reades;
