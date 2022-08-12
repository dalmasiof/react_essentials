import {useState} from "react";
const Lists = ()=>{
    const [list] = useState(["Dalmasio","Joao","Pai","Mae"])
    return (<div>
        <ul>
            {list.map((item)=>(
                <li>
                    {item}
                </li>
            ))}
        </ul>
    </div>)
}

export default Lists;