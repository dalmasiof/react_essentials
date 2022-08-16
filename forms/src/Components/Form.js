import{ useState} from "react"

const Form = () => {
    const [name,setName] = useState();
    const [email,setEmail] = useState();

    const onNameInpuChange=(event)=>{
        console.log(event.target.value);
        setName(event.target.value)
    }

  return (
    <div>
      <h2>Forms</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
        </div>
        <input type="text" name="name" placeholder="Name" onChange={onNameInpuChange}></input>
        <label>
          <div>
            <span>Email</span>
          </div>
          <input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
        </label>
        <div>
          <button type="submit">Submit Form</button>
        </div>
      </form>
      <div>
        <h2>
            Name: {name}
        </h2>
        <h2>
            Email: {email}
        </h2>
      </div>
    </div>
  );
};

export default Form;
