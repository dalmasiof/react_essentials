const HandleResult = ({ props }) => {
  
  function formatResult(value){
    let formatedValue = value.toFixed(2).replace(".",",")
    return formatedValue;
  }
  return (
    <div>
      <h2>Resultado: {formatResult(props)}</h2>
      <h3>Mensagem:</h3>
    </div>
  );
};

export default HandleResult;
