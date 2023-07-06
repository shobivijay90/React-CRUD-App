import React from 'react';
import { Link } from 'react-router-dom';


function Header(){
    return(

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <h3>User Registration</h3>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="user/create">Add User</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="user/list">View List</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )}
    export default Header