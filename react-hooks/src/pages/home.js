import HookUseState from "../components/HookUseState";
import HookUseEffect from "../components/HookUseEffect";

import {useContext} from "react";
import { SomeContext } from "../components/HookUseContext";

const Home = () => {
  const {contextValue} = useContext(SomeContext);
  
  return (
    <div>
      <h1>home</h1>
      <HookUseState />
      {/* <hr></hr>
      <HookUseEffect /> */}
      <hr></hr>
      Context Value: {contextValue}
      
    </div>
  );
};

export default Home;
