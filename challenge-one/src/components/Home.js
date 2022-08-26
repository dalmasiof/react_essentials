import { useState } from "react";

import tt1 from "../assets/tt1.gif";

import FormImc from './FormImc';


const Home = () => {
  const [shwoForm, setShowForm] = useState(false);

  function closeForm(){
    setShowForm(!shwoForm);
  }

  return (
    <div className="containers">
      <div className="mainContainer">
      <h1>Calculadora IMC</h1>
        <div>
          <img className="totoroGif" src={tt1}></img>
        </div>
      </div>
     
      <div className="subContainer">
      {shwoForm && <h1>Preencha os campos</h1>}

        <div>
          {!shwoForm && <button onClick={() => setShowForm(!shwoForm)}>Start</button>}
        </div>
        <div>
          {shwoForm &&  <FormImc func={closeForm}></FormImc>}
        </div>
      </div>
    </div>
  );
};

export default Home;
