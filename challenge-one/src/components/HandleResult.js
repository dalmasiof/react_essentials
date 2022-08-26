import { useState } from "react";
import { useEffect } from "react";


const HandleResult = ({ props }) => {
  const [message, setMessage] = useState();

  // function formatResult(value) {
  //   createResultMessage(value);
  //   let formatedValue = value.toFixed(2).replace(".", ",");
  //   return formatedValue;
  // }

  useEffect(()=>{
    if(props>20){
      setMessage("Normal");

    }

  },[])


  
  return (
    <div>
      <h2>Resultado: {props}</h2>
      <h3>{message}</h3>
    </div>
  );
};

export default HandleResult;
