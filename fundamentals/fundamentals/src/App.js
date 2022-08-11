//Components
import "./components/FirstComponent";
import "./components/TemplateExpressions";
//Styles
import "./App.css";
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import Events from "./components/Events";

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <div>
        <FirstComponent />
      </div>
      <div>
        <TemplateExpressions />
      </div>
      <div>
        <Events />
      </div>
    </div>
  );
}

export default App;
