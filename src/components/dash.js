import React, { Component } from 'react';
import headerLogo from '../assets/header_logo.png';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
            <div>
             <div className="navheader">
              <div>
                <Link to='/' className="nav-home-button">
                  <img src={headerLogo} alt="logo" />
                </Link>
                <h1>Houser</h1>
                <h2>Dashboard</h2>
                <Link to='/' className="Link">
                <h3>Logout</h3>
                </Link>
              </div>
            </div>
            <div className="dashboard">
              <Link to='/wizard'>
          <button className="addPropertyBtn"> Add new property </button>
          </Link>
          <div>
            List properties with "desired rent" greater than: $<input type="text" name="filterInput" />
            <button className="filterBtn">filter</button>
            <button className="resetBtn">reset</button>
          </div>


          <div className="listingsContainer">
            <img src="https://cdn.houseplans.com/product/o2d2ui14afb1sov3cnslpummre/w1024.jpg?v=15" height="100px" width="150px"/>
            <h3>Description</h3>
            <h3>Details</h3>
          </div>
        </div>
          </div>
        );
    }
}

export default HomePage