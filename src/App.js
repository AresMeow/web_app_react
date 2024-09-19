import { useState, useEffect } from "react";
import "./App.css";

const telegramApp = window.Telegram.WebApp;

function App() {
    const [authType, setAuthType] = useState(null);
    const [token, setToken] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        telegramApp.ready();

        const params = new URLSearchParams(window.location.search);
        const responseType = params.get("response_type");

        if (responseType === "access_token" || responseType === "credentials") {
            setAuthType(responseType);
        } else {
            console.error("Неправильный response_type");
            setAuthType("error");
        }
    }, []);

    const onClose = () => {
        telegramApp.close();
    };

    const handleTokenSubmit = () => {
        const data = {
            token,
        };

        try {
            tg.sendData(JSON.stringify(data));
            tg.close();
        } catch (error) {
            console.error("Ошибка при отправке данных:", error);
            alert("Произошла ошибка при отправке данных.");
        }
    };

    const handleCredentialsSubmit = () => {
        const data = {
            login,
            password,
        };

        try {
            tg.sendData(JSON.stringify(data));
            tg.close();
        } catch (error) {
            console.error("Ошибка при отправке данных:", error);
            alert("Произошла ошибка при отправке данных.");
        }
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
                        <input
                            type="password"
                            placeholder="Пароль"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input-field"
                        />
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
        </div>
    );
}

export default App;
