import React, {useRef, useState} from "react";

// styling
import "../../assets/css/register.css";
import {Link} from "react-router-dom";

export default function SignUpPage() {

    const usernameField = useRef();
    const emailField = useRef();
    const passwordField = useRef();

    return (
        <section className="registerBody">
            <div className="registerContainer">
                <h1 className="title">Tixcident</h1>
                <p className="subtitle">Sign Up</p>
                <form>
                    <div className="inputbox">
                        <input placeholder="Username">
                        </input>
                    </div>
                    <div className="inputbox">
                        <input type="email" placeholder="Email"/>
                    </div>
                    <div className="inputbox">
                        <input type="password" placeholder="Password"/>
                    </div>
                    <button className="btn">
                        Create Account
                    </button>
                </form>

                <div className="links">
                    <p>Already have an account?<Link to={'/login'}> Login here</Link></p>
                </div>
            </div>
        </section>
    )
}