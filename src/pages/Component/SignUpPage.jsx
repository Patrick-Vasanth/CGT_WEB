import React, { useState, useEffect } from "react";
import "./Assest/Style.css";

export default function SignUpPage() {
  const [inputValues, setInputValue] = useState({
    referralName: "",
    referralMobileNumber: "",
    referralMailId: "",
    password: "",
    confirmPassword: "",
  });

  const [validation, setValidation] = useState({
    referralName: "",
    referralMobileNumber: "",
    referralMailId: "",
    password: "",
    confirmPassword: "",
  });

  //handle submit updates
  function handleChange(event) {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
  }

  const checkValidation = () => {
    let errors = validation;

    //first Name validation
    if (!inputValues.referralName.trim()) {
      errors.referralName = "Referral name is required";
    } else {
      errors.referralName = "";
    }

    //phone number validation
    const phoneCond = "[7-9]{1}[0-9]{9}";
    if (!inputValues.referralMobileNumber.trim()) {
      errors.referralMobileNumber = "Phone number is required";
    } else if (!inputValues.referralMobileNumber.match(phoneCond)) {
      errors.referralMobileNumber = "Please enter a valid number";
    } else {
      errors.referralMobileNumber = " ";
    }

    // email validation
    const emailCond =
      "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
    if (!inputValues.referralMailId.trim()) {
      errors.referralMailId = "Email is required";
    } else if (!inputValues.referralMailId.match(emailCond)) {
      errors.referralMailId = "Please enter a valid email address";
    } else {
      errors.referralMailId = "";
    }

    //password validation
    const cond1 = "/^(?=.*[a-z]).{6,20}$/";
    const cond2 = "/^(?=.*[A-Z]).{6,20}$/";
    const cond3 = "/^(?=.*[0-9]).{6,20}$/";
    const password = inputValues.password;
    if (!password) {
      errors.password = "password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be longer than 6 characters";
    } else if (password.length >= 20) {
      errors.password = "Password must shorter than 20 characters";
    } else if (!password.match(cond1)) {
      errors.password = "Password must contain at least one lowercase";
    } else if (!password.match(cond2)) {
      errors.password = "Password must contain at least one capital letter";
    } else if (!password.match(cond3)) {
      errors.password = "Password must contain at least a number";
    } else {
      errors.password = "";
    }

    //matchPassword validation
    if (!inputValues.confirmPassword) {
      errors.confirmPassword = "Confirm your password";
    } else if (inputValues.confirmPassword !== inputValues.Password) {
      errors.confirmPassword = "Password does not match confirmation password";
    } else {
      errors.password = "";
    }

    return setValidation(errors);
  };

  useEffect(() => {}, [inputValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="bgStyle">
        <div className="container">
          <form className="signUp" onSubmit={handleSubmit}>
            <div className="mt-4">
              <h2 className="title-signup">Sign Up</h2>
            </div>
            <div className="mt-4">
              <input
                placeholder="Referral Name"
                type="text"
                name="referralName"
                className="input"
                onChange={(e) => handleChange(e)}
                value={inputValues.referralName}
              />
              {validation.referralName && <p>{validation.referralName}</p>}
              {validation.referralName && console.log(validation)}
            </div>
            <div className="mt-4">
              <input
                // pattern="[7-9]{1}[0-9]{9}"
                placeholder="Referral Mobile Number"
                type="tel"
                name="referralMobileNumber"
                className="input"
                onChange={(e) => handleChange(e)}
                value={inputValues.referralMobileNumber}
              />
              {validation.referralMobileNumber && (
                <p>{validation.referralMobileNumber}</p>
              )}
            </div>
            <div className="mt-4">
              <input
                // pattern="/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;"
                placeholder="Referral Mail Address"
                type="Mail"
                name="referralMailId"
                className="input"
                onChange={(e) => handleChange(e)}
                value={inputValues.referralMailId}
              />
              {validation.referralMailId && <p>{validation.referralMailId}</p>}
            </div>
            <div className="mt-4">
              <input
                // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                placeholder="Password"
                type="password"
                name="password"
                className="input"
                autoComplete="off"
                onChange={(e) => handleChange(e)}
                value={inputValues.password}
              />
              {validation.password && <p>{validation.password}</p>}
            </div>
            <div className="mt-4">
              <input
                // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                placeholder="Confirm Password"
                type="password"
                name="confirmPassword"
                className=" input"
                autoComplete="off"
                onChange={(e) => handleChange(e)}
                value={inputValues.confirmPassword}
              />
            </div>
            <button type="submit" className="btnSubmit mt-4">
              Submit
            </button>
            <br />
          </form>
        </div>
      </div>
    </>
  );
}
