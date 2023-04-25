import CGT from "../Image/CareerGT.png";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Assest/StyleLogin.css";
import { useState } from "react";
import {FaCloudUploadAlt} from 'react-icons/fa';


function StudentProfile() {
  //For End Date Automatically Changes to 3 months
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  

  const handleStartDateChange = (event) => {
    const selectedStartDate = new Date(event.target.value);
    const selectedEndDate = new Date(selectedStartDate);
    selectedEndDate.setMonth(selectedStartDate.getMonth() + 3);
    setStartDate(event.target.value);
    setEndDate(selectedEndDate.toISOString().substr(0, 10));
  };

  //for Image upload
  const [image, setImage] = useState(null);
  const [label, setLabel] = useState('Upload Image');

  //Submit
 const handleSubmit=(e)=>{
    e.preventDefault();
    const input1 = document.getElementById('img');

  input1.addEventListener('change', (event) => {
    const images = event.target.files;

    for (const image of images) {
        const reader = new FileReader();

        reader.readAsDataURL(image);

        reader.addEventListener('load', () => {
            const imagesArray = localStorage.getItem('images');
            let images = [];

            if (imagesArray) {
                images = [...JSON.parse(imagesArray)];
                images.push(reader.result);
            } else {
                images.push(reader.result);
            }

            localStorage.setItem('images', JSON.stringify(images));
        });
    }
});

  }
  

  const handleImageChange = (e) => { 
    setImage(URL.createObjectURL(e.target.files[0]));
    console.log(e.target.files)
    setLabel('Image Uploaded');
  }

  return (
    <>
      <div className="main">
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
        {/* Form */}

        <div className="cd">
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="frm"> 
              <h3>Student Profile</h3>
                
               
               <div className="cd-main"> 
                  {/*frst half */}
                  <div className="cd-one">
                    <div>
                      <input
                        type="text"
                        id="fullname"
                        name="fname"
                        placeholder="Fullname"
                        required
                      ></input>
                    </div>
                    <div>
                      <input
                        type="tele"
                        id="number"
                        name="mobilenumber"
                        placeholder="Mobile Number"
                        pattern="[6789][0-9]{9}"
                        required
                      ></input>
                    </div>
                    <div>
                      <input
                        type="text"
                        id="email"
                        name="emailaddress"
                        placeholder="Email Address"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        required
                      ></input>
                    </div>
                    <div>
                      <select
                        id="referralName"
                        name="referralname"
                        // value={selectedOption}
                        // onChange={handleInputChange}
                        className="referal"
                        required
                        
                      >
                        <option value="Referral name">Referral name</option>
                        <option value="Tamizh">Tamizh</option>
                        <option value="Vijay">Vijay</option>
                        <option value="Patrick">Patrick</option>
                      </select>
                    </div>

                    <div>
                      <input
                        type="number"
                        id="passedout"
                        name="passedoutyear"
                        placeholder="Year of  Passed Out"
                        required
                      ></input>
                    </div>
                    <div>
                      <input
                        type="text"
                        name="collegename"
                        id="colname"
                        placeholder="College Name"
                        required
                      ></input>
                    </div>
                  </div>

                  {/*second half */}
                  <div className="cd-two">
                    <div>
                      <select
                        id="courseName"
                        name="course"
                        className="crs-name"
                        // value={selectedOption}
                        // onChange={handleInputChange}
                        required
                      >
                        <option value="Course" >Course</option>
                        <option value="Frontend development">Frontend development</option>
                        <option value="Python">Python</option>
                        <option value="Testing">Testing</option>
                      </select>
                    </div>
                    <div>
                      <label id="strt" htmlFor="startdate" className="text-muted" >Start date</label>
                      <input
                        type="date"
                        id="startdate"
                        placeholder="Start date"
                        value={startDate}
                        onChange={handleStartDateChange}
                        required
                      />
                    </div>
                    <div>
                    <label id="end" className="text-muted" >End date</label>
                      <input
                        type="date"
                        id="enddate"
            
                        placeholder="End date"
                        value={endDate}
                        readOnly
                        disabled  
                        
                      />
                    </div>
                    <div className="file">
                      { image===""|| image===null ?  <label htmlFor="img" id="img-icon"><FaCloudUploadAlt/></label> : <img id="img-small" src={image}  required />}
                      <label id="img-lbl" htmlFor="img" >{label}</label>
                      <input id="img" type="file" name="imageUpload" onChange={handleImageChange} accept="image/*" hidden required></input>
                    </div>
                    <div>
                      <input
                        type="text"
                        id="amount"
                        placeholder="Amount Paid"
                        required
                      ></input>
                    </div>
                  </div>
                </div>
                {/* button */}
                <div className="sub-btn">
                  <button id="btn-sub">Create Profile</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default StudentProfile;
