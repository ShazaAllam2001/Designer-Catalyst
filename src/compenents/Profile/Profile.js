import { useState, useEffect } from "react";

import './Profile.css';
import avatar from '../../assets/avatar.png';

export function Profile() {
    const [firstName, setFirstName] = useState("Tom");
    const [secondName, setSecondName] = useState("Holland");
    const [email, setEmail] = useState("TomHolland@gmail.com");
    const [password, setPassword] = useState("TomHolland200");

    useEffect(() => {
        // update them to database
        
    },[firstName, secondName, email, password]);

    const [isFirstNameDisabled, setIsFirstNameDisabled] = useState(true);
    const [isSecondNameDisabled, setIsSecondNameDisabled] = useState(true);
    const [isEmailDisabled, setIsEmailDisabled] = useState(true);
    const [isPasswordDisabled, setIsPasswordDisabled] = useState(true);

    function editFirstName() {
        setIsFirstNameDisabled(!isFirstNameDisabled);
    }
    function editSecondName() {
        setIsSecondNameDisabled(!isSecondNameDisabled);
    }
    function editEmail() {
        setIsEmailDisabled(!isEmailDisabled);
    }
    function editPassword() {
        setIsPasswordDisabled(!isPasswordDisabled);
    }

    return (
        <div className="profile">
            <link href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css" rel="stylesheet"/>
            <div className="profile-card">
                <h1> My Profile </h1>
                <img className="profile-img" src={avatar} alt="..." />

                <div className="input-fields">
                    <h2> First Name </h2>
                    <input type="text" className="input-value" value={firstName} 
                        disabled={isFirstNameDisabled} 
                        onChange={(e) => {
                            setFirstName(e.target.value);
                        }}
                    />
                    <button className="edit-icon" onClick={editFirstName}>
                        <i className="bx bx-pencil"></i>
                    </button>

                    <h2> Second Name </h2>
                    <input type="text" className="input-value" value={secondName} 
                        disabled={isSecondNameDisabled} 
                        onChange={(e) => {
                            setSecondName(e.target.value);
                        }}
                    />
                    <button className="edit-icon" onClick={editSecondName}>
                        <i className="bx bx-pencil"></i>
                    </button>

                    <h2> Email </h2>
                    <input type="text" className="input-value" value={email} 
                        disabled={isEmailDisabled} 
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <button className="edit-icon" onClick={editEmail}>
                        <i className="bx bx-pencil"></i>
                    </button>

                    <h2> Password </h2>
                    <input type="password" className="input-value" value={password} 
                        disabled={isPasswordDisabled} 
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <button className="edit-icon" onClick={editPassword}>
                        <i className="bx bx-pencil"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

