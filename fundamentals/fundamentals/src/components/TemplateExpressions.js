const TemplateExpressions = () => {
  /**
   * Template expressions literally runs Js on JSX
   */
  const name = "Dalmasio";
  const programmer = {
    profession: "Developer",
    age: 24,
    role: "Full-Stack",
  };
  return (
    <div>
      <h2>My name is {name}</h2>
      <p>Age: {programmer.age}</p>
      <p>Profession: {programmer.profession}</p>
      <p>Role: {programmer.role}</p>

      <p>
        {4+7}
      </p>
    </div>
  );
};

export default TemplateExpressions;
