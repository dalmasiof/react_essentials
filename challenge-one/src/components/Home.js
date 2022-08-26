import { useState } from "react";


import FormImc from './FormImc';


const Home = () => {
  const [shwoForm, setShowForm] = useState(false);
const [Tt,setTt] = useState("tt1.gif")

  function closeForm(){
    setShowForm(!shwoForm);
  }

  function setGif(value){
    switch (value){
      case 1:
        setTt("tt1.gif");
      break;

      case 2:
        setTt("tt2.gif");
      break;

      default:

      break;
    }

  }

  return (
    <div className="containers">
      <div className="mainContainer">
      <h1>Calculadora IMC</h1>
        <div>
          <img className="totoroGif" src={Tt}></img>
        </div>
      </div>
     
      <div className="subContainer">
      {shwoForm && <h1>Preencha os campos: </h1>}
      <div >
        <div>
          {!shwoForm && <button onClick={() => setShowForm(!shwoForm)}>Start</button>}
        </div>
        <div>
          {shwoForm &&  <FormImc func={closeForm} funcGif={setGif}></FormImc>}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
