import { useState, useEffect } from "react";
import "./App.css";

const telegramApp = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    telegramApp.ready();
  }, []);

  const onClose = () => {
    telegramApp.close();
  };

  return (
    <div className="App">
      work
      <button onClick={onClose}>close</button>
    </div>
  );
}

export default App;
