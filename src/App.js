import { useState, useEffect } from "react";
import body from "./body.svg";
import first_wave from "./first_wave.svg";
import "./App.css";

const telegramApp = window.Telegram.WebApp;

function App() {
    return (
        <div className="App">
            <img className="body" alt="Body" src={body} />
            <img className="first_wave" alt="FirstWave" src={first_wave} />
        </div>
    );
}

export default App;
