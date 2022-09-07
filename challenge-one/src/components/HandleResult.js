import { useState } from "react";
import { useEffect } from "react";

const HandleResult = ({ props, funcGif }) => {
  const [message, setMessage] = useState();

  useEffect(() => {
    if (props <= 18.5) {
      setMessage("Magreza");
      funcGif(1);
    } else if (props > 18.5 && props <= 24.9) {
      setMessage("Normal");
      funcGif(2);
    } else if (props > 24.9 && props <= 29.9) {
      setMessage("Sobrepeso");
      funcGif(3);
    } else if (props > 30 && props <= 39.9) {
      setMessage("Obesidade");
      funcGif(4);
    } else {
      setMessage("Obesidade Grave");
      funcGif(5);
    }
  }, []);

  return (
    <div>
      <h2>Resultado: {props}</h2>
      <h3>{message}</h3>
    </div>
  );
};

export default HandleResult;
