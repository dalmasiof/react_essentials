import './App.css';

//configure browse router
import {BrowserRouter,Routes,Route} from 'react-router-dom'

//components
import NavBar from './components/navBar';

//pages
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <h2>React Router</h2>

      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
