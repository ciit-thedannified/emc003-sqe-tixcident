import React from "react";
import "../assets/css/splash.css"; // Style Func;
import { section } from "framer-motion/client";

//Font Families
<link href="https://fonts.googleapis.com/css2?family=Martian+Mono:wght@200&display=swap" rel="stylesheet"></link>;
<link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet"></link>;
<link href="https://fonts.googleapis.com/css2?family=Kanit:wght@200&family=Rubik&display=swap" rel="stylesheet"></link>;
<link href="https://fonts.googleapis.com/css2?family=PT+Mono&display=swap" rel="stylesheet"></link>;
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"></link>;
<link href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;1,500&amp;display=swap" rel="stylesheet"></link>;
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@100;200;300;400;500;600;700&amp;display=swap" rel="stylesheet"></link>;
<link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet"></link>

export default function DisplaySplash() {
    return (
        <section className="splash">
            <div>
            <header data-role="Header" class="header-header">
            <div class="header-container">

                <img
                    alt="logo"
                    src="src/assets/images/TXIDENT.png"
                    class="header-image"
                />
                <div class="header-container1">
                <div class="header-nav">
                    <span class="header-text"><span>About Us</span></span>
                    <span class="header-text1"><span>Featured</span></span>
                    <span class="header-text2"><span>Team</span></span>
                    <span class="header-text3"><span>Account</span></span>
                </div>
                </div>
            </div>
            </header>
        </div>
  
            <div className="splash-container">
                <div className="splash-banner">
                    <img src="src/assets/images/logo-banner.png"></img>
                </div>
                <div className="intro-msg">
                    <h1>
                        Welcome to Tixcident
                    </h1>
                </div>
                <div className="summary-msg">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="feat-title">
                    <h2>
                        Features and Functionality
                    </h2>
                </div>
                <div className="feat-msg">
                    <h3>
                        - Lorem ipsum
                    </h3>
                    <h3>
                        - Lorem ipsum
                    </h3>
                    <h3>
                        - Lorem ipsum
                    </h3>
                    <h3>
                        - Lorem ipsum
                    </h3>
                    <h3>
                        - Lorem ipsum
                    </h3>
                </div>
                <div className="addit-msg">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="gtstrtd-btn">
                    <button type="button">Get Started </button>
                </div>
            </div>
        </section>// = splashscreen
    )
}