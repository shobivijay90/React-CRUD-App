import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser =() => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:80/api/user/save", inputs)
      .then(function (response) {
        console.log(response.data);
        navigate("/user/list");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="box-size">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>Add User</h1>
          </div>
          <div className="row">
            <div className="col-md-6">Name</div>
            <div className="col-md-6">
              <input
                type="text"
                name="name"
                className="form-control"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">Email</div>
            <div className="col-md-6">
              <input
                type="email"
                name="email"
                className="form-control"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">Mobile Number</div>
            <div className="col-md-6">
              <input
                type="text"
                name="mobile"
                className="form-control"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <button type="submit" className="btn btn-warning">
                Add User
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddUser;
