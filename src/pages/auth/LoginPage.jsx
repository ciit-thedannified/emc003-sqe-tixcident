import {useRef, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

import LogoBox from '../../assets/images/TXIDENT.png';
import "../../assets/css/login.css";

export default function LoginPage() {

    const navigate = useNavigate();

    const usernameField = useRef();
    const passwordField = useRef();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const [email, password] = [usernameField.current.value, passwordField.current.value];


    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-box">
                    <img className="LogoBox" src={LogoBox} alt="LogoBox Icon"/>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input type="text" placeholder="Username" ref={usernameField} required/>
                        </div>
                        <div className="input-group">
                            <input type="password" placeholder="Password" ref={passwordField} required/>
                        </div>
                        <button type="submit" className="login-btn">
                            LOGIN
                        </button>
                    </form>
                    <div className="links">
                        {/* Example only for routing if needed */}
                        <Link to='/signup'> Create Account </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

