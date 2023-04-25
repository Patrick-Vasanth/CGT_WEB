import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import "./Assest/Style.css";
import CGT from "../Image/CareerGT.png";
import { FiSearch } from "react-icons/fi";

export default function ReferralsList() {
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
      <div className="listBodyBar">
        <h3 className="listBodyBarTitle">Refferals List</h3>
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
        <table className="listTable table-striped">
          <thead className="listTableHeading">
            <tr className="heading">
              <th className="listHead">ID</th>
              <th className="listHead">Name</th>
              <th className="listHead">Contact</th>
              <th className="listHead">Number of Referrals</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
}
