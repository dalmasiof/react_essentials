import {useState} from "react";

const CondRender = () => {
  const [conditional] = useState(false)
  return <div>
    <h1>Is visible?</h1>
    <p>
        {conditional && <p><strong>Yes, it is</strong></p>}
    </p>
  </div>;
};
export default CondRender