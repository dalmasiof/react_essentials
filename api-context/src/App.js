import "./App.css";

import { useContext } from "react";
import { CounterContext } from "./context/CounterContext";
import ChangeCounrter from "./components/ChangeCounrter";

function App() {
  const { counter } = useContext(CounterContext);
  return (
    <div className="App">
      <h1>Home</h1>
      <h3>Counter Value: {counter}</h3>
      <hr>
      </hr>
        <ChangeCounrter></ChangeCounrter>
    </div>
  );
}

export default App;
