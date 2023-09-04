import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3030/users/" + id)
      .then((res) => setUserInfo(res.data));
  }, []);

  const updateInfoUser = (e) => {
    setUserInfo((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handlClickUpdate = (e) => {
    e.preventDefault();
    axios.put("http://localhost:3030/users/" + id, userInfo).then(() => {
      navigate("/");
    });
  };

  console.log(userInfo);
  return (
    <section
      style={{ width: "40%" }}
      className="container-fluid mt-5 px-5 py-3 bg-secondary"
    >
      <h1 className="text-light">Update User Info</h1>
      <form onSubmit={handlClickUpdate}>
        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label text-light fs-5">
            Email:
          </label>
          <input
            onChange={updateInfoUser}
            value={userInfo.email}
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
            onChange={updateInfoUser}
            value={userInfo.name}
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

export default Update;
