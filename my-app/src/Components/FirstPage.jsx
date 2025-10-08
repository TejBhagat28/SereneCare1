import React from "react";
import "./FirstPage.css";
import hospitalImg from "../assets/image.png";
import { Outlet, Link } from "react-router-dom";

function FirstPage() {
  return (
    <>
      <div className="firstpage">
        <div className="firstpage-left">
          <img src={hospitalImg} alt="Hospital" className="firstpage-img" />
        </div>

        <div className="firstpage-right">
          <h1 className="firstpage-title">
            Welcome to Online Appointment System!
          </h1>
          <div className="login-box">
            <Link to="/admin-login">
              <button className="login-btn">Admin Login</button>
            </Link>
            <Link to="/user-login">
              <button className="login-btn">User Login</button>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default FirstPage;
