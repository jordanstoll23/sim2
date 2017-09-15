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
                <h3>Logout</h3>
              </div>
            </div>
          </div>
        );
    }
}

export default HomePage