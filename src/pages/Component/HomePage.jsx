import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Assest/Style.css";
import CGT from "../Image/CareerGT.png";

export default function HomePage() {
  return (
    <>
      <div className="navBar">
        <Navbar className="nav">
          <Navbar.Brand className="logo">
            <img src={CGT} alt="CGT" className="img" />
          </Navbar.Brand>
          <Nav className="ms-auto navItem">
            <Nav.Link href="#home" className="item">
              Home
            </Nav.Link>
            <Nav.Link href="#referraldetails" className="item">
              Referral Details
            </Nav.Link>
            <Nav.Link href="#studentdetails" className="item">
              Student Details
            </Nav.Link>
            <Nav.Link href="#logout" className="item">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
      <div className="count">
        <div className="container">
          <div className="studentCount">
            <div className="sub">
            <h3 className="title">CAREER GUIDANCE TECHNOLOGIES</h3>
            
            <h2 className="subTitle">Total No. of Students = 500 </h2>
            <h2 className="subTitle">No. of Referrals = 500</h2>
            <h2 className="subTitle">No. of Active Students = 300</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
