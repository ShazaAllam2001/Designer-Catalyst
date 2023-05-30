import { useEffect, useState } from "react";

import './SignUp.css';
import { TitleBar } from '../TitleBar/TitleBar.js';

export function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function signUpReq() {
    fetch("http://localhost:5000/register", {
      method: "POST",
      body: JSON.stringify({
        firstName: firstName,
        secondName: secondName,
        email: email,
        password: password,
        confirmPassword: confirmPassword
      }),
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then((response) => console.log(response.json()));
  }
  
  return (
    <div>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <TitleBar/>
      <div className="background">
        <form className="sign-up-input-box">
          <div className="sign-up-title"> Create an Account </div>
          <div className="sign-up-input-section">
            <div className="input-field-box">
              <i className="material-icons" style={{ fontSize: 32 }}> person </i>
              <input type="text" className="input-field" style={{width: 140}} placeholder="First Name" id="firstnamest" required
                onChange={(e) => {
                  setFirstName(e.target.value);
                }} />
              <input type="text" className="input-field" style={{width: 140}} placeholder="Second Name" id="secondnamest" required
                onChange={(e) => {
                  setSecondName(e.target.value);
                }} />
            </div>
            <div className="input-field-box">
              <i className="material-icons" style={{ fontSize: 32 }}> email </i>
              <input type="email" className="input-field" placeholder="Email" id="emailst" required 
                onChange={(e) => {
                  setEmail(e.target.value);
                }} />
            </div>
            <div className="input-field-box">
              <i className="material-icons" style={{ fontSize: 32 }}> lock </i>
              <input type="password" className="input-field" placeholder="Password" id="passwordst" minLength="8" required 
                onChange={(e) => {
                  setPassword(e.target.value);
                }} />
            </div>
            <div className="input-field-box">
              <i className="material-icons" style={{ fontSize: 32 }}> lock </i>
              <input type="password" className="input-field" placeholder="Confirm Password" id="confirm-passwordst" minLength="8" required
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }} />
            </div>
          </div>

          <div className="sign-up-button">
            <input type="submit" className="block-button-big" value="SIGN UP" onClick={signUpReq} />
          </div>
        </form>
        
      </div>
    </div>
  );
}

