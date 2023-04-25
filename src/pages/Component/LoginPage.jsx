import { useState } from "react";
import "./Assest/StyleLogin.css";

function LoginPage() {
  // const[input,setInput] = useState({ username:"", password:""})
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('')
  // const handleChange =(e) =>{
  //   setInput({...input,[e.target.name]: e.target.value})
    
  // }
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const sumbitLogin=(e)=>{
    e.preventDefault();
    // console.log(input);
    console.log(username,password)
    if (username ==='Admin' && password === '12345') {
      alert('Login Successful');
      setError('')
    } else if (username!=='Admin'){
      setError('Incorrect username');
    }
    else{
      setError('Incorrect Password')
    }
  }



  return (
    <>
      <div className="bg-color">
        <div className="container">
          <div className="main-page">
            <div className="crd">
              <form onSubmit={sumbitLogin}>
              <div className="heading">
                <span> ADMIN LOGIN</span>
              </div>
              <div className="input">
                <input
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  id="input-name"
                  autoComplete="new-password"
                  onChange={handleUsernameChange}
                  required
                ></input>
              </div>
              <div className="input">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  id="input-pwd"
                  autoComplete="new-password"
                  onChange={handlePasswordChange}
                  required
                ></input>
              </div>
              <div className="lgn-btn">
                {error && <div id="login-error">{error}</div>}
                {/* {successMessage && <div id="login-success">{successMessage}</div>} */}
                <button id="btn-lgn">Login</button>
              </div>
              </form>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
