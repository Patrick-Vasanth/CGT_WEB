import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import "./Assest/Style.css";
import CGT from "../Image/CareerGT.png";
import { FiSearch } from "react-icons/fi";

export default function StudentDetails() {
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
        <h3 className="referralTitle">Students</h3>
        <button className="referralCreate" type="button">
          Create New Student
        </button>
        <button className="referralList" type="button">
          View Full List
        </button>
        <div className="bodyBar">
          <h3 className="bodyBarTitle">Student List</h3>
          <Form className="ms-auto">
            <Form.Control
              type="search"
              placeholder="Student Search"
              className="ms-auto search"
              aria-label="Search"
            />
            <FiSearch className="searchIcon" />
          </Form>
        </div>
        <div className="studentTableData">
          <table className="studentTable table-striped">
            <thead className="studentTableHeading">
              <tr className="studentHeading">
                <th className="studentHead">ID</th>
                <th className="studentHead">Student Name</th>
                <th className="studentHead">Course</th>
                <th className="studentHead">Referral Name</th>
                <th className="studentHead">Amount Pending</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </>
  );
}
