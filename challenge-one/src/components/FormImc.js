import { useState } from "react";
import HandleResult from "./HandleResult";
const FormImc = () => {
  const [weight, setWeight] = useState();
  const [height, setheight] = useState();

  const [imcResult, setimcResult] = useState(0);

  function calculateIMC() {
    let floatWeight = parseFloat(weight);
    let floatHeight = parseFloat(height);

    let result = floatWeight / (floatHeight *= floatHeight);

    setimcResult(result);
  }

  return (
    <div>
      <form>
        <label htmlFor="altura">
          <div>
            <span>Altura:</span>
          </div>
          <input
            name="altura"
            placeholder="Altura"
            onChange={(e) => setheight(e.target.value)}
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
            onChange={(e) => setWeight(e.target.value)}
          ></input>
        </label>
        <div>
          <button onClick={calculateIMC} type="button">
            Calcular IMC
          </button>
        </div>
      </form>

      <HandleResult props={imcResult}></HandleResult>
    </div>
  );
};

export default FormImc;
