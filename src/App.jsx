import React from 'react';
import './index.css'; // Ensure this path is correct

export default function App() {
    return (
        <div className="app">
            <header>
                <div className="top-left-icon">
                    <img src="/images/Picture4.png" alt="Icon" />
                </div>
                <div className="top-right-buttons">
                    <button>HOME</button>
                    <button>ABOUT US</button>
                    <button>LOGIN</button>
                    <button>SIGN UP</button>
                    <button>ADMIN LOGIN</button>
                </div>
            </header>
            <main>
                <section className="section">
                    <div className="section-content">
                        <div className="left-paragraph">
                            <h1>WELCOME TO AUTO</h1>
                            <h1>CARS</h1>
                            <p2>Go Any Trip With Us</p2>
                            <p>Already have an account? <button class="sign-in-button">Sign-in</button></p>
                            
                            <button className="take-ride-button">Take A Ride</button>
                        </div>
                    </div>
                    <div className="background-images">
                        <img src="/images/Picture1.png" alt="Background Image 1" />
                        <img src="/images/Picture2.png" alt="Background Image 2" />
                        <img src="/images/Picture3.png" alt="Background Image 3" />
                    </div>
                </section>
                <section className="section">
                <div className="section-content">
                        <div className="left-paragraph">
                            <h1>Unlock Opportunities with Auto Cars</h1>
                            <h1>CARS</h1>
                            <p2>Go Any Trip With Us</p2>
                            <p>Already have an account? <button class="sign-in-button">Sign-in</button></p>
                            
                            <button className="take-ride-button">Take A Ride</button>
                        </div>
                    </div>
                </section>
                <section className="section">
                    {/* Additional content here */}
                </section>
            </main>
        </div>
    );
}
