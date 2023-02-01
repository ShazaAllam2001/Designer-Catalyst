import logo from './logo.svg';
import './App.css';

import { SignUp } from './compenents/SignUp/SignUp.js';
import { SignIn } from './compenents/SignIn/SignIn.js';
import { SideBar } from './compenents/SideBar/SideBar.js';

function App() {
  return (
    <div className="App">
      <SideBar/>
    </div>
  );
}

export default App;
