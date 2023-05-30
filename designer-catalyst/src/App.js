import './App.css';

import { Route, Routes } from 'react-router-dom';

import { SignIn } from './compenents/SignIn/SignIn.js';
import { SignUp } from './compenents/SignUp/SignUp.js';
import { SideBar } from './compenents/SideBar/SideBar.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn/>}></Route>
        <Route path="/signUp" element={<SignUp/>}></Route>
        <Route path="/home/*" element={<SideBar/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
