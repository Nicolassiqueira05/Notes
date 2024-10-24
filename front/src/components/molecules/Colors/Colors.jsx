import styles from "./Colors.module.css"
import { useState } from "react"

function Colors ({returnColor}){
    const [color, setColor] = useState("")

    return(
        <div className={styles.colors}>
            <div className={styles.circle} id={styles.green} onClick={setColor("green")}></div>
            <div className={styles.circle} id={styles.yellow} onClick={setColor("yellow")}></div>
            <div className={styles.circle} id={styles.orange} onClick={setColor("orange")}></div>
            <div className={styles.circle} id={styles.red} onClick={setColor("red")}></div>
            <div className={styles.circle} id={styles.purple} onClick={setColor("purple")}></div>
        </div>
    )
}

export default Colors