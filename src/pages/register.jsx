import React, {useState} from "react";

// styling
import "./register.css";

export default function Register() {

return (
    <section className="registerBody">
        <h1>Tixcident</h1>
        <p className="subtitle">Sign Up</p>
        <form>
            <div>
                <input className="inputbox" placeholder="Username">
                </input>
            </div>
            <div>
                <input className="inputbox" type="email" placeholder="Email"/>
            </div>
            <div>
                <input className="inputbox" type="password" placeholder="Password"/>
            </div>
            <button className="btn">
              Create Account
            </button>
        </form>

        <div className="links">
            <p>Already have an account?<a href="/login"> Login here</a></p>
            <a href="">Admin</a>
        </div>
    </section>
)
}

