import React, {useState} from "react";
//Imports the Href component for the login Page css.
import "../assets/css/login.css";

import LogoBox from '../assets/img/TXIDENT.png';

//LoginPage Function that  handles the login functionality.

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        //LoginPage logic
        console.log("Username", username);
        console.log("Password", password);
    };
    return (
        <div className="login-page">

            <div className="login-container">
                <div className="login-box">
                    <img className="LogoBox" src={LogoBox} alt="LogoBox Icon"/>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input type="text" placeholder="Username" value={username}
                                   onChange={(e) => setUsername(e.target.value)} required/>
                        </div>
                        <div className="input-group">
                            <input type="password" placeholder="Password" value={password}
                                   onChange={(e) => setPassword(e.target.value)} required/>
                        </div>
                        <button type="submit" className="login-btn">
                            LOGIN
                        </button>
                    </form>
                    <div className="links">
                        {/* Example only for routing if needed */}
                        < a href="/pages/SignUpPage">Create Account!</a>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default LoginPage;


