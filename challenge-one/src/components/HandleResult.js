import { useState } from "react";
import { useEffect } from "react";

const HandleResult = ({ props,funcGif }) => {
  const [message, setMessage] = useState();

  // function formatResult(value) {
  //   createResultMessage(value);
  //   let formatedValue = value.toFixed(2).replace(".", ",");
  //   return formatedValue;
  // }

  useEffect(() => {
    if (props <= 18.5) setMessage("Magreza");
    else if (props > 18.5 && props <= 24.9){
      setMessage("Normal");
      funcGif(2)
    } 
    else if (props > 24.9 && props <= 29.9) setMessage("Sobrepeso");
    else if (props > 30 && props <= 39.9) setMessage("Obesidade");
    else setMessage("Obesidade Grave");
  }, []);

  return (
    <div>
      <h2>Resultado: {props}</h2>
      <h3>{message}</h3>
    </div>
  );
};

export default HandleResult;
