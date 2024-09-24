import React, {useState} from "react";

//Imports the Href component for the login Page css.
import "./login.css"; 

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
                
                <img className="LogoBox"></img>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername (e.target.value)} required/>
                        </div>
                        <div className="input-group">
                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword (e.target.value)} required/>   
                        </div>
                        <button type="submit" className="login-btn">
                            Login
                        </button>
                    </form>
            <div className="links">
                {/* Example only for routing if needed */}
                < a href ="/register">Create Account!</a>
                < a href ="/admin">Admin</a>
                </div>
            </div>
        </div>
    </div>
 );
};
export default Login;


