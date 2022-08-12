import {useState} from "react"

const ManageData = () => {
  let value = 10;

  const [number,setNumber] = useState(1);
//define the var name and the prop to set value
  return (
    <div>
      <p>
        Value: <strong>{value}</strong>
      </p>
      <p>
        Value State: <strong>{number}</strong>
      </p>
      <div>
        <button onClick={()=>(setNumber(number+1) )}>
            Click
        </button>
      </div>
    </div>

  );
};

export default ManageData;
