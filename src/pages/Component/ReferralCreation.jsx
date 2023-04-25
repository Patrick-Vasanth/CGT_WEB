import CGT from "../Image/CareerGT.png";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Assest/StyleLogin.css";
import { useState } from "react";

function ReferralCreation() {
  const [input, setInput] = useState({
    fullname: "",
    mobilenumber: "",
    companyname: "",
    password: "",
    confirmpwd: "",
  });
  const [errors,setErrors]=useState({})
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const validation=(input)=>{
    let error={};
    if(input.password !== input.confirmpwd){
      error.confirmpwd='Password should be same '

      return error;
    }
    else{
     return error.confirmpwd="";
    }


  }

  const sumbitReferral = (e) => {
    e.preventDefault();
    setErrors(validation(input));
    console.log(input);
    e.target.reset();
  };

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
      <div className="bg-color">
        <div className="container">
          <div className="main-page">
            <div className="crd-ref">
              <form onSubmit={sumbitReferral}>
                <div className="heading-ref">
                  <span>Referral Creation</span>
                </div>
                <div className="input">
                  <input
                    type="text"
                    id="input-name"
                    name="fullname"
                    placeholder="Fullname"
                    autoComplete="new-password"
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <div className="input">
                  <input
                    type="tele"
                    id="input-tele"
                    name="mobilenumber"
                    placeholder="Mobile Number"
                    autoComplete="new-password"
                    pattern="[6789][0-9]{9}"
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <div className="input">
                  <input
                    type="text"
                    id="input-comp"
                    name="companyname"
                    placeholder="Company Name"
                    autoComplete="off"
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <div className="input">
                  <input
                    type="Password"
                    id="input-pwd"
                    name="password"
                    placeholder="Password"
                    autoComplete="off"
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <div className="input">
                  <input
                    type="Password"
                    id="input-conpwd"
                    name="confirmpwd"
                    placeholder="Confirm Password"
                    autoComplete="off"
                    onChange={handleChange}
                    required
                  ></input>
                  {errors.confirmpwd && <p style={{color:"red",textAlign:"center" }}>{errors.confirmpwd}</p>} 
                </div>
                <div className="ref-btn">
                  <button id="btn-ref">Create Account</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReferralCreation;
