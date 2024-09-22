import { useState, useEffect } from "react";
import "./App.css";
import Notification from "./Notification";

const telegramApp = window.Telegram.WebApp;

function App() {
    const [authType, setAuthType] = useState(null);
    const [token, setToken] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [notificationVisible, setNotificationVisible] = useState(false);

    useEffect(() => {
        telegramApp.ready();
        const params = new URLSearchParams(window.location.search);
        const responseType = params.get("response_type");

        if (responseType === "access_token" || responseType === "credentials") {
            setAuthType(responseType);
        } else {
            setAuthType("error");
        }
    }, []);

    const onClose = () => {
        telegramApp.close();
    };

    const handleTokenSubmit = () => {
        if (!token) {
            showError("Ключ доступа не указан.");
            return;
        }

        const data = { command: "authrization", token };
        sendData(data);
    };

    const handleCredentialsSubmit = () => {
        if (!login || !password) {
            showError("Логин и пароль должны быть указаны.");
            return;
        }

        const data = { command: "authrization", login, password };
        sendData(data);
    };

    const sendData = (data) => {
        try {
            telegramApp.sendData(JSON.stringify(data));
            telegramApp.close();
        } catch (error) {
            showError("Произошла ошибка при отправке данных.");
        }
    };

    const showError = (message) => {
        if (notificationVisible) return;

        setErrorMessage(message);
        setNotificationVisible(true);

        setTimeout(() => {
            setErrorMessage("");
            setNotificationVisible(false);
        }, 3000);
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="App">
            <div className="auth-container">
                <span className="close-icon" onClick={onClose}>
                    ✖
                </span>
                <h1>Авторизация</h1>

                {authType === "access_token" && (
                    <>
                        <input
                            type="text"
                            placeholder="Ключ доступа"
                            value={token}
                            onChange={(e) => setToken(e.target.value)}
                            className="input-field"
                        />
                        <button
                            className="submit-btn"
                            onClick={handleTokenSubmit}
                        >
                            Войти
                        </button>
                    </>
                )}

                {authType === "credentials" && (
                    <>
                        <input
                            type="text"
                            placeholder="Логин"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            className="input-field"
                        />
                        <div className="password-container">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Пароль"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="input-field"
                            />
                            <span
                                className="toggle-password"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? "🙈" : "👁️"} {}
                            </span>
                        </div>
                        <button
                            className="submit-btn"
                            onClick={handleCredentialsSubmit}
                        >
                            Войти
                        </button>
                    </>
                )}

                {authType === "error" && (
                    <p style={{ color: "red" }}>
                        Неправильный тип авторизации.
                    </p>
                )}
            </div>

            {notificationVisible && <Notification message={errorMessage} />}
        </div>
    );
}

export default App;
