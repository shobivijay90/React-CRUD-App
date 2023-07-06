import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios.get("http://localhost:80/api/users/").then(function (response) {
      console.log(response.data);
      setUsers(response.data);
    });
  }

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:80/api/user/${id}/delete`)
      .then(function (response) {
        console.log(response.data);
        getUsers();
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-12 text-center">
          <h1>User list</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2 fw-bold">#</div>
        <div className="col-md-2 fw-bold">Name</div>
        <div className="col-md-2 fw-bold">Email</div>
        <div className="col-md-2 fw-bold">Mobile</div>
        <div className="col-md-2 fw-bold">Update</div>
        <div className="col-md-2 fw-bold">Delete</div>
      </div>
      {users.map((user, index) => (
        <div className="row">
          <div className="col-md-2">{index + 1}</div>
          <div className="col-md-2">{user.name}</div>
          <div className="col-md-2">{user.email}</div>
          <div className="col-md-2">{user.mobile}</div>
          <div className="col-md-2">
            <Link className="btn btn-success" to={`user/${user.id}/edit`}>
              Edit
            </Link>
          </div>
          <div className="col-md-2">
            <Link
              className="btn btn-danger"
              onClick={() => deleteUser(user.id)}
            >
              Delete
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListUser;
