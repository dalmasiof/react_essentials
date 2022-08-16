const CssInlineCoponent = ()=>{
    let variable = 11;

    return(
        <div>
            <div>
                <h2 style={variable <= 10? ({color:"purple"}) : ({color:"green"})}>
                    Here is less than 10
                </h2>
            
            </div>
        </div>
    )
}

export default CssInlineCoponent;