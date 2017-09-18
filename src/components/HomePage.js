import React, { Component } from 'react';
// import Shelf from './Shelf';
import logo from '../assets/header_logo.png';
import dash from './dash';
import { Link } from 'react-router-dom';
import bigLogo from './../assets/auth_logo.png';

class HomePage extends Component {
  render() {
        return (



      
          <div>
        <div className="RightSidebar"></div>
          
       <div className="AuthBox">
          <div className="AuthBoxInner">
        <img src={bigLogo} alt="BigLogo"/>
          <div className="Logo"></div>            
         
         <span className="Username">Username</span>
          <br/>
          <input className="Auth_input dark_green_border" />
          <br/>
          <span className="Password">Password</span>
          <br/>
          <input className="Auth_input dark_green_border"  type="password" />
          <br/>
        <Link to='/dash' className="nav-home-button">
          <button  className="Login"> Login </button>
          </Link>
          
         <Link to='/dash' className="nav-home-button">
          <button className="Register" > Register </button>
          </Link>
        </div>
        </div>
        <div className="LeftSidebar"> </div>
    </div>
            
          
        );
    }
}

export default HomePage