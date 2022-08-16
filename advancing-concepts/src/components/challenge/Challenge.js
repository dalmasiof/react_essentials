import UserDetails from "./UserDetails";

const challenge = ()=>{
    let arrayPeople = [{
        id:1,
        name:"Dalmasio Filho",
        age:24,
        role:"Full-stack Developer"

    },
    {
        id:2,

        name:"Joao Pedro",
        age:15,
        role:"back-end Developer"

    },
    {
        id:3,

        name:"Dalmasio Pai",
        age:51,
        role:"DBA"

    }]
    return (
        <div>
            {arrayPeople.map((val,i)=>(
                <UserDetails props={val}>

                </UserDetails>
            ))}
        </div>
    );
}

export default challenge;