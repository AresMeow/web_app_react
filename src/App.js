import "./App.css";

const telegramApp = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    telegramApp.ready();
  }, []);

  const onClose = () => {
    telegramApp.close();
  };
  
  return <div className="App">work</div>;
}

export default App;
