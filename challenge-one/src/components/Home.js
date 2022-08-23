import { useState } from "react";

import tt1 from "../assets/tt1.gif";

import FormImc from './FormImc';


const Home = () => {
  const [shwoForm, setShowForm] = useState(false);

  function closeForm(){
    setShowForm(!shwoForm);
  }

  return (
    <div class="mainContainer">
      <div>
        <img className="totoroGif" src={tt1}></img>
      </div>
      <div>
        {!shwoForm && <button onClick={() => setShowForm(!shwoForm)}>Start</button>}
      </div>
      <div>
        {shwoForm &&  <FormImc func={closeForm}></FormImc>}
      </div>
    </div>
  );
};

export default Home;
