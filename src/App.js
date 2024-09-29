import FirstWave from "./FirstWave.svg";
import SecondWave from "./SecondWave.svg";
import CollegeLogo from "./college.png";
import DnevnikLogo from "./dnevnik.png";

import "./App.css";

function App() {
    return (
        <div className="App">
            <div className="Main">
                <img className="wave fw" src={FirstWave} alt="First Wave" />
                <img className="wave sw" src={SecondWave} alt="Second Wave" />

                <div className="logo">
                    <img
                        className="college"
                        src={CollegeLogo}
                        alt="College Logo"
                    />
                    <img
                        className="dnevnik"
                        src={DnevnikLogo}
                        alt="Dnevnik Logo"
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
