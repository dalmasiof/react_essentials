import { useParams } from "react-router-dom";

const Product = ()=>{
    const {id} = useParams();
    return (
        <div>
            <h2>This is product : {id}</h2>
        </div>
    );
}

export default Product;