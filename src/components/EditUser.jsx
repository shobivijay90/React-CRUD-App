import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const AddUser =() => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState([]);
  const {id} = useParams();

useEffect(()=>{
  getUsers();
}, []);

function getUsers(){
  axios.get(`http://localhost:80/api/user/${id}`).then(function(response){
    console.log(response.data);
    setInputs(response.data);
  });
}
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:80/api/user/${id}/edit`, inputs)
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
            <h1>Edit User</h1>
          </div>
          <div className="row">
            <div className="col-md-6">Name</div>
            <div className="col-md-6">
              <input
                type="text"
                name="name"
                value={inputs.name}
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
                value={inputs.email}
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
                value={inputs.mobile}
                className="form-control"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <button type="submit" className="btn btn-warning">
                Update User
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddUser;
