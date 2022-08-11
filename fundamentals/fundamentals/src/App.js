//Components
import "./components/FirstComponent";
import "./components/TemplateExpressions";
//Styles
import "./App.css";
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";

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
    </div>
  );
}

export default App;
