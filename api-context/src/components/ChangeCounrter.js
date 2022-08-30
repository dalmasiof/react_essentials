import {React,useContext} from 'react'

import { CounterContext } from '../context/CounterContext'

const ChangeCounrter = () => {
    const  {counter,setCounter} = useContext(CounterContext)
  return (
    <div>
        <button onClick={()=>setCounter(counter+1)}>
            Click here to +1
        </button>
    </div>
  )
}

export default ChangeCounrter