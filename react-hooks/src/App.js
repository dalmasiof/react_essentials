import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import './App.css';
import Home from "./pages/home";
import About from "./pages/about";


function App() {
  return (
    <div className="App">
      <h1>
        React Routes
      </h1>
      <BrowserRouter>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
