import './SignUp.css';
import { TitleBar } from '../TitleBar/TitleBar.js';

export function SignUp() {
  return (
    <div>
      <TitleBar/>
      <div id="sign-up">
        <form className="input-box">
          <div className="sign-up-title"> Create an Account </div>
          <div className="input-section">
            <div className="name">
              <input type="text" class="input-field" style={{width: 160}} placeholder="First Name" id="firstnamest" required />
              <input type="text" class="input-field" style={{width: 160}} placeholder="Second Name" id="secondnamest" required />
            </div>
            <div>
              <input type="email" class="input-field" placeholder="Email" id="emailst" required />
            </div>
            <div>
              <input type="password" class="input-field" placeholder="Password" id="passwordst" minlength="8" required />
            </div>
            <div>
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

