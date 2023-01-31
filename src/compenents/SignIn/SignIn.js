import './SignIn.css';
import { TitleBar } from '../TitleBar/TitleBar.js';

export function SignIn() {
  return (
    <div>
      <TitleBar/>
      <div id="sign-in">
        <div>
            <form className="input-box">
                <div className="sign-in-title"> Enter Your Account </div>
                <div className="input-section">
                    <div>
                        <input type="email" class="input-field" placeholder="Email" id="emailst" required />
                    </div>
                    <div>
                        <input type="password" class="input-field" placeholder="Password" id="passwordst" minlength="8" required />
                    </div>
                </div>

                <div class="sign-in-button">
                    <input type="button" class="block-button-big" value="SIGN IN"/>
                </div>
            </form>

            <div className="sign-up">
                <div> Don't have an account? </div>
                <button className="block-button-small left-margin">
                    SIGN UP
                </button>
            </div>   
        </div>
      </div>
    </div>
  );
}

