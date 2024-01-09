import React from "react";
import styles from "./Usurario.module.css"


function Tarjeta(props) {
    
    const colors = ["#000000","#042326","#0A3A40"]
    const r = Math.floor(Math.random()* colors.length)
    const {id, name, email, phone} = props.info
    
    return(
        <div className={styles.container} style={{background:colors[r]}}>
            <h3>{id}</h3>
            <h1>{name}</h1>
            <h3>{email}</h3>
            <h3>{phone}</h3>
        </div>
    )
}
export default Tarjeta
