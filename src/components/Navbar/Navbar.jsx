import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
      <>
        <div className="navbar">
          
           
            <div className="theme-title">
              <h1>Job Portal</h1>
              
            </div>
         
          <div className="nav-link">
            <ul>
              <Link
                to="/jobs"
                style={{ color: "white", textDecoration: "none" }}
              >
                <li>Jobs</li>
              </Link>

              <Link
                to="/companies"
                style={{ color: "white", textDecoration: "none" }}
              >
                <li>Companies</li>
              </Link>
              <Link
                to="/blog"
                style={{ color: "white", textDecoration: "none" }}
              >
                <li>Blog</li>
              </Link>
            </ul>
          </div>
          <div className="nav-btn">
            <button className="login-btn">Login</button>
            <button className="reg-btn">Register</button>
          </div>
        </div>
      </>
    );
}

export default Navbar