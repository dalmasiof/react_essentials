const Events = () => {
  const onBtnCLick = (e) => {
    console.log("Button clicked");
    console.log(e);
  };

  const renderResult = (x) => {
    if (x) {
      return <h1>I can generate this!</h1>;
    } else {
      return <h1>or this!</h1>;
    }
  };
  return (
    <div>
      <button onClick={onBtnCLick}>Click Here</button>
      <div>
        {renderResult(true)}
        {renderResult(false)}
      </div>
    </div>
  );
};

export default Events;
