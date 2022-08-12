import "./App.css";
import Image from "./components/Image";
import ManageData from "./components/ManageData";
import Lists from "./components/Lists";
import Conditional from "./components/Conditional-Render";
import Props from "./components/Props";
import DProp from "./components/DestructuringPros";




function App() {
  return (
    <div className="App">
      {/* <Image></Image> */}
      <ManageData></ManageData>
      <Lists></Lists>
      <Conditional></Conditional>
      <Props name="Dalmasio Fernandes"></Props>
      {/*Destructuring Prods*/}
      <DProp name="Dalmasio Fernandes" age="24" country="Brazil"></DProp>
    </div>
  );
}

export default App;
