import styles from "./moduleCss.module.css"

const ModuleCss = ()=>{
    let state = "dark"
    return(
        <div className={styles[state == "dark" ? "darkClass" : "lightClass"]}>
           <p>
                 Lorem Ipsum
           </p>
        </div>
    )
}

export default ModuleCss;