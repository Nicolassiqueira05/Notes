import { useState } from "react"
import styles from "./CardNote.module.css"

function CardNote ({key, title, text, color}){

    return(
        <div className={styles.note}>
            <div>
                <div className={styles.circle} style={{backgroundColor: `${color}`}}></div>
                <h1>{title}</h1>
            </div>
            <div>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default CardNote