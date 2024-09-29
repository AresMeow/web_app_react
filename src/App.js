import { useState, useEffect } from "react";
import "./App.css";

const telegramApp = window.Telegram.WebApp;

function App() {
    return (
        <div className="App">
            <svg
                className="background-svg"
                width="390"
                height="722"
                viewBox="0 0 390 722"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M0 0H390V722H0V0Z" fill="currentColor" />
            </svg>

            <svg
                className="overlay-svg"
                width="390"
                height="70"
                viewBox="0 0 390 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 0L22 12C43 23 87 47 130 47C173 47 217 23 260 19C303 15 347 31 368 39L390 47V70H368C347 70 303 70 260 70C217 70 173 70 130 70C87 70 43 70 22 70H0V0Z"
                    fill="currentColor"
                    fillOpacity="0.6"
                />
            </svg>
        </div>
    );
}

export default App;
