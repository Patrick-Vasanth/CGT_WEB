import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import "./Assest/Style.css";
import CGT from "../Image/CareerGT.png";
import { FiSearch } from "react-icons/fi";

export default function StudentsList() {

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
        <h3 className="listBodyBarTitle">Student List</h3>
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
      <div className="listTableData">
        <table className="listTable table-striped">
          <thead className="listTableHeading">
            <tr className="listHeading">
              <th className="studentListHead">ID</th>
              <th className="studentListHead">Student Name</th>
              <th className="studentListHead">Course</th>
              <th className="studentListHead">Referral Name</th>
              <th className="studentListHead">Amount Pending</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
}
