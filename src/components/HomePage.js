import React, { Component } from 'react';
// import Shelf from './Shelf';
import logo from '../assets/header_logo.png';
import dash from './dash';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
            <div>
            <div className="banner">
              <div>
                <img src={logo} alt="logo" />
                <h1>Houser Dashboard</h1>
              </div>
      </div>
      <div className="App">
        <div className="Auth_container white_bgc">
          <img />
          <span className="open-sans-bold Auth_input_header">Username</span>
          <input className="Auth_input dark_green_border" value=""  />
          <span className="open-sans-bold Auth_input_header">Password</span>
          <input className="Auth_input dark_green_border" value="" type="password"onChange />
        </div>
        <div>
        <Link to='/dash' className="nav-home-button">
          <button  className=""> Login </button>
          </Link>
          <Link to='/dash' className="nav-home-button">
          <button className="" > Register </button>
          </Link>
        </div>
    </div>
            
          </div>
        );
    }
}

export default HomePage