import { useState } from "react";

const Form = ({ user }) => {
  const [name, setName] = useState(user.name ? user.name : "");
  const [email, setEmail] = useState(user.email ? user.email : "");
  const [schol, setSchol] = useState("");

  const onNameInpuChange = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <div>
      <h2>Forms</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
        </div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={onNameInpuChange}
          value={name}
        ></input>
        <label>
          <div>
            <span>Email</span>
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
        </label>
        <label>
          <div>
            <span>Scholarity</span>
          </div>
          <select
            name="schol"
            onChange={(e) => setSchol(e.target.value)}
            value={schol}
          >
            <option value="0">School</option>
            <option value="1">Techinician</option>
            <option value="2">Degree</option>
          </select>
        </label>
        <div>
          <button type="submit">Submit Form</button>
        </div>
      </form>
      <div>
        <h2>Name: {name}</h2>
        <h2>Email: {email}</h2>
        <h2>Scholarity: {schol}</h2>
      </div>
    </div>
  );
};

export default Form;
