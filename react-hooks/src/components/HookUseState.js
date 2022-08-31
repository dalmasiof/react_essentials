import { useState } from "react";

const HookUseState = () => {
  let userName = "Joao";
  const [name, setName] = useState("Joao");
  const [age, setAge] = useState(24);

  function onBtnChangeClick() {
    setName("Dalmasio");
  }

  function onSubmitForm (e) {
    e.preventDefault();
    console.log(e)
  }
  return (
    <div>
      <p>Var: {userName}</p>
      <p>UseState: {name}</p>
      <button onClick={onBtnChangeClick}>Click</button>
      <hr></hr>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <p>
          You have <strong>{age}</strong> years old!!
        </p>
        <button type="submit">Submit form</button>
      </form>
    </div>
  );
};

export default HookUseState;
