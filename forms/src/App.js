import logo from './logo.svg';
import FormComp from './Components/Form';

import './App.css';

function App() {
  return (
    <div className="App">
     <FormComp user={{name:"Pastao", email:"Termiko"}} ></FormComp>
    </div>
  );
}

export default App;
