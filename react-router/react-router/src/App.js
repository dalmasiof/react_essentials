import "./App.css";

//configure browse router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import NavBar from "./components/NavBar";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <h2>React Router</h2>

      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          {/*Simple routes*/}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/*param route*/}
          <Route path="/product/:id" element={<Product />} />
          {/*not match any route*/}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
