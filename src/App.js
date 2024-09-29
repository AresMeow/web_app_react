import React, { useState } from "react";
import "./App.css";

import FirstWave from "./FirstWave.svg";
import SecondWave from "./SecondWave.svg";
import CollegeLogo from "./college.png";
import DnevnikLogo from "./dnevnik.png";
import Text from "./Text.svg";

function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Здесь вы можете добавить логику обработки отправки формы,
        // например, отправку данных на сервер.
        console.log("Имя пользователя:", username);
        console.log("Пароль:", password);
    };

    return (
        <div className="App">
            <div className="container">
                <div className="waves-container">
                    <img className="wave fw" src={FirstWave} alt="fwave" />
                    <img className="wave sw" src={SecondWave} alt="swave" />
                </div>

                <div className="logo-container">
                    <img className="college" src={CollegeLogo} alt="clogo" />
                    <img className="dnevnik" src={DnevnikLogo} alt="dlogo" />
                </div>

                <form onSubmit={handleSubmit} className="form">
                    <div className="lines-container">
                        <div class="fline"></div>
                        <div class="sline"></div>
                    </div>

                    <p class="auth">Авторизация</p>

                    <div className="input-group">
                        <img className="text" src={Text} alt="text" />
                        <input
                            type="text"
                            placeholder="Имя пользователя"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="input-field"
                        />
                    </div>
                </form>
            </div>
            {/* <div className="Main">
                <img className="wave fw" src={FirstWave} alt="First Wave" />
                <img className="wave sw" src={SecondWave} alt="Second Wave" />

                <div className="logo">
                    <img className="college" src={CollegeLogo} alt="clogo" />
                    <img className="dnevnik" src={DnevnikLogo} alt="dlogo" />
                </div>

                <div className="Body">
                    <div class="fline"></div>
                    <div class="sline"></div>
                    <p class="auth">Авторизация</p>
                </div>
            </div> */}
        </div>
    );
}

export default App;
