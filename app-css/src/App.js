import logo from './logo.svg';
import './App.css';
import CssCoponent from './components/CssComponents';
import CssInlineCoponent from './components/CssInlineConditional';
import DinamicCss from './components/DinamicClass';
import ModuleCss from './components/moduleCss';

function App() {
  return (
    <div className="App">
      <CssCoponent></CssCoponent>
      <CssInlineCoponent></CssInlineCoponent>
      <DinamicCss></DinamicCss>
      <ModuleCss></ModuleCss>
    </div>
  );
}

export default App;
