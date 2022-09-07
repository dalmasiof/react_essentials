import { useState } from "react";

import FormImc from "./FormImc";

const Home = () => {
  const [shwoForm, setShowForm] = useState(false);
  const [Tt, setTt] = useState("tt1.gif");

  function closeForm() {
    setShowForm(!shwoForm);
    setGif(1);
  }

  function setGif(value) {
    setTt(`tt${value}.gif`);
  }

  return (
    <div className="containers">
      <div className="mainContainer">
        <div>
          <h1>Calculadora IMC</h1>
          <div>
            <img className="totoroGif" src={Tt}></img>
          </div>
        </div>
      </div>

      <div className="subContainer">
        {shwoForm && <h1>Preencha os campos: </h1>}
        <div>
          <div>
            {!shwoForm && (
              <button onClick={() => setShowForm(!shwoForm)}>Start</button>
            )}
          </div>
          <div>
            {shwoForm && <FormImc func={closeForm} funcGif={setGif}></FormImc>}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
