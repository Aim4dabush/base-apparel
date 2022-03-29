import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import Background from "./components/Background/Background";
import Email from "./components/Email/Email";
import Logo from "./components/Logo/Logo";
import ModelPic from "./components/ModelPic/ModelPic";
import Promotion from "./components/Promotion/Promotion";

function App() {
  return (
    <div className="App">
      <div id="container">
        <div>
          <div id="background-position">
            <Background />
          </div>
          <div id="logo-position">
            <Logo />
          </div>
          <div>
            <Promotion />
          </div>
          <div>
            <Email />
          </div>
        </div>
        <div>
          <ModelPic />
        </div>
      </div>
    </div>
  );
}

export default App;
