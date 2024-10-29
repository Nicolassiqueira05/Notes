import styles from "./CurrentColor.module.css"
import { useState } from "react"

function CurrentColor ({Ccolor, func}){

    function handleClick () {

    }

    return(
        <>
            <div className={styles.colors} onClick={func}>
                <div className={styles.circle} id={styles.green} style={{backgroundColor: Ccolor}} onClick={() => handleClick()}></div>
            </div>
        </>
    )
}

export default CurrentColor