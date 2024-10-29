import styles from "./Colors.module.css"
import { useState } from "react"

function Colors ({returnColor, func}){
    const [color, setColor] = useState("")

    function handleClick (e) {
        func(e)
        setColor(e)
        console.log(e)
    }

    return(
        <>
            <div className={styles.colors} onClick={func}>
                <div className={styles.circle} id={styles.green} onClick={() => handleClick("green")} ></div>
                <div className={styles.circle} id={styles.yellow} onClick={() => handleClick("yellow")}></div>
                <div className={styles.circle} id={styles.orange} onClick={() => handleClick("orange")}></div>
                <div className={styles.circle} id={styles.red} onClick={() => handleClick("red")}></div>
                <div className={styles.circle} id={styles.purple} onClick={() => handleClick("purple")}></div>
            </div>
        </>
        
    )
}

export default Colors