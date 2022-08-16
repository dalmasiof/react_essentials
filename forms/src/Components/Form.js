const Form = () => {
  return (
    <div>
      <h2>Forms</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
        </div>
        <input type="text" name="name" placeholder="Name"></input>
        <label>
          <div>
            <span>Email</span>
          </div>
          <input type="email" name="email" placeholder="Email"></input>
        </label>
        <div>
          <button type="submit">Submit Form</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
