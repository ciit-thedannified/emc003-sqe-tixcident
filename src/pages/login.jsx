import React, {useState} from "react";
//Imports the Href component for the login Page css.
import "./login.css"; 

import LogoBox from '../images/TXIDENT.png'
import BackgroundLR from '../images/LgRgBG.png'

//Font Families
<link href="https://fonts.googleapis.com/css2?family=Martian+Mono:wght@200&display=swap" rel="stylesheet"></link>;
<link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet"></link>;
<link href="https://fonts.googleapis.com/css2?family=Kanit:wght@200&family=Rubik&display=swap" rel="stylesheet"></link>;
<link href="https://fonts.googleapis.com/css2?family=PT+Mono&display=swap" rel="stylesheet"></link>;
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"></link>;
<link href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;1,500&amp;display=swap" rel="stylesheet"></link>;
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@100;200;300;400;500;600;700&amp;display=swap" rel="stylesheet"></link>;

//Login Function that  handles the login functionality.

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


const handleSubmit = (e) => {
    e.preventDefault();
    //Login logic
    console.log("Username", username);
    console.log("Password", password);
};
return (
    <div className="login-page">
    
        <div className="login-container"> 
            <div className="login-box"> 
                <img className="LogoBox" src={LogoBox} alt = "LogoBox Icon"/>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername (e.target.value)} required/>
                        </div>
                        <div className="input-group">
                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword (e.target.value)} required/>   
                        </div>
                        <button type="submit" className="login-btn">
                            LOGIN
                        </button>
                    </form>
            <div className="links">
                {/* Example only for routing if needed */}
                < a href ="/register">Create Account!</a>
                </div>
            </div>
        </div>
    </div>
        
 );
};
export default Login;


