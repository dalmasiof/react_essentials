import { useState } from "react";
import HandleResult from "./HandleResult";
import "../styles/home.css";

const FormImc = ({ func ,funcGif}) => {
  const [weight, setWeight] = useState();
  const [height, setheight] = useState();

  const [imcResult, setimcResult] = useState(0);
  const [showResult, setShowResult] = useState(false);

  function calculateIMC({ func }) {
    let floatWeight = parseFloat(weight);
    let floatHeight = parseFloat(height);

    let result = floatWeight / (floatHeight *= floatHeight);
    let formatedValue = result.toFixed(2);
    setimcResult(formatedValue);
    setShowResult(true);
  }

  function formatValue(value) {
    return value.replace(",", ".");
  }

  return (
    <div>
      <form>
        <label htmlFor="altura">
          <div>
            <span>Altura:</span>
          </div>
          <input
            type="number"
            required
            min="0"
            step=".01"
            name="altura"
            placeholder="Altura"
            onChange={(e) => setheight(formatValue(e.target.value))}
          ></input>
        </label>

        <label htmlFor="peso">
          <div>
            <span>Peso:</span>
          </div>
          <input
            type="number"
            required
            min="0"
            step=".01"
            name="peso"
            placeholder="Peso"
            onChange={(e) => setWeight(formatValue(e.target.value))}
          ></input>
        </label>
      </form>
      <div className="buttons">
        <div>
          {showResult && <HandleResult props={imcResult} funcGif={funcGif}></HandleResult>}
          <button onClick={func}>Retornar</button>
        </div>
        <div>
          {!showResult && (
            <button onClick={calculateIMC} type="button">
              Calcular IMC
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormImc;
