import { useEffect, useState } from "react";

const HookUseEffect = () => {
  // useState define a state every time that the component rerender
  // useState((),[]) define a state eonly when the component is laoded
  // useState((),[something]) define a state every time that the 'something' changed
  const [anotehrNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    console.log("executed when anmotherNumber changed");
    return ()=>{
        console.log('UseEffect destroyed')
    }//line to clean useEffect
  },[anotehrNumber]);

  return (
    <div>
      <h2>UseEffect</h2>
      <p>
        AnotherMumber:<strong>{anotehrNumber}</strong>
      </p>
      <button onClick={() => setAnotherNumber(anotehrNumber + 1)}>
        Click here
      </button>
    </div>
  );
};

export default HookUseEffect;
