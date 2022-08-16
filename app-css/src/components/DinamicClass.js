import "./dynamicClass.css"
const DinamicCss = ()=>{
    let state = "dark"
    return(
        <div className={state == "dark" ? "darkClass" : "lightClass"}>
           <p>
                 Lorem Ipsum
           </p>
        </div>
    )
}

export default DinamicCss;