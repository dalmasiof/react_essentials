import "./App.css";
import Image from "./components/Image";
import ManageData from "./components/ManageData";
import Lists from "./components/Lists";
import Conditional from "./components/Conditional-Render";



function App() {
  return (
    <div className="App">
      {/* <Image></Image> */}
      <ManageData></ManageData>
      <Lists></Lists>
      <Conditional></Conditional>
    </div>
  );
}

export default App;
