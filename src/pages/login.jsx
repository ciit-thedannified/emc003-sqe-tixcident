import React, {useState} from "react";
import "./login.css"; 

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
    <div className="login-container">
        <div className="login-box">
            <h1 className="title">Tixcident</h1>
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
            < a href ="/create-account">Create Account!</a>
            < a href ="/admin">Admin</a>
         </div>
        </div>
    </div>
 );
};

export default Login;