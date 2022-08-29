import './App.css';

//configure browse router
import {BrowserRouter,Routes,Route} from 'react-router-dom'

//components
import NavBar from './components/NavBar';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';

function App() {
  return (
    <div className="App">
      <h2>React Router</h2>

      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/product/:id' element={<Product/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
