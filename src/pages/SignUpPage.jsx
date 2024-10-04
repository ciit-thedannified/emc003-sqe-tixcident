import React, {useState} from "react";

// styling
import "../assets/css/register.css";

export default function SignUpPage() {

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
                    <p>Already have an account?<a href="/pages/LoginPage"> Login here</a></p>
                    <a href="">Admin</a>
                </div>
            </div>
        </section>
    )
}