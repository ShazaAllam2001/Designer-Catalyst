import './SignUp.css';
import { TitleBar } from '../TitleBar/TitleBar.js';

export function SignUp() {
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
              <input type="text" class="input-field" style={{width: 140}} placeholder="First Name" id="firstnamest" required />
              <input type="text" class="input-field" style={{width: 140}} placeholder="Second Name" id="secondnamest" required />
            </div>
            <div className="input-field-box">
              <i className="material-icons" style={{ fontSize: 32 }}> email </i>
              <input type="email" class="input-field" placeholder="Email" id="emailst" required />
            </div>
            <div className="input-field-box">
              <i className="material-icons" style={{ fontSize: 32 }}> lock </i>
              <input type="password" class="input-field" placeholder="Password" id="passwordst" minlength="8" required />
            </div>
            <div className="input-field-box">
              <i className="material-icons" style={{ fontSize: 32 }}> lock </i>
              <input type="password" class="input-field" placeholder="Confirm Password" id="confirm-passwordst" minlength="8" required />
            </div>
          </div>

          <div class="sign-up-button">
            <input type="button" class="block-button-big" value="SIGN UP"/>
          </div>
        </form>
        
      </div>
    </div>
  );
}

