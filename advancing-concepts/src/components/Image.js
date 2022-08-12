import Night from "../assets/night.webp";

const Image = () => {
  return (
    <div>
      <h1>Images</h1>
      <div>
        {/*Image from public */}
        <img src="city.webp" />
      </div>
      <div>
        {/*Image from asstes */}
        <img src={Night} />
      </div>
    </div>
  );
};
 export default Image;