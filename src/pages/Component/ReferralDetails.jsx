import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import "./Assest/Style.css";
import CGT from "../Image/CareerGT.png";
import { FiSearch } from "react-icons/fi";

export default function ReferralDetails() {
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
      <div className="body">
        <h3 className="referralTitle">Referrals</h3>
        <button className="referralCreate" type="button">
          Create New Referral
        </button>
        <button className="referralList" type="button">
          View Full List
        </button>
        <div className="bodyBar">
          <h3 className="bodyBarTitle">Refferals List</h3>
          <Form className="ms-auto">
            <Form.Control
              type="search"
              placeholder="Referral Search"
              className="ms-auto search"
              aria-label="Search"
            />
            <FiSearch className="searchIcon" />
          </Form>
        </div>
        <div className="tableData">
          <table className="table table-striped">
            <thead className="tableHeading">
              <tr className="heading">
                <th className="head">ID</th>
                <th className="head">Name</th>
                <th className="head">Contact</th>
                <th className="head">Number of Referrals</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </>
  );
}
