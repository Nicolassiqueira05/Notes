import styles from "../Button/Button.module.css"

function Button ({onClick, text}){
    return(
        <button className={styles.c} onClick={onClick}>{text}</button>
    )
}

export default Button