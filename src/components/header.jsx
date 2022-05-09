import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <nav>
        <ul className="nav justify-content-center fs-2 fw-bold">
          <li className="nav-item ">
            <Link className="nav-link active" aria-current="page" to="home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="signin">Sign-In</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="signup">Sign-Up</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="voting">Voting</Link>
          </li>
          
        </ul>
      </nav>
    )
  }
}
