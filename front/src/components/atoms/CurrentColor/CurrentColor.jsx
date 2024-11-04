import styles from "./CurrentColor.module.css"

function CurrentColor({ Ccolor, func }) {
    return (
        <div className={styles.colors} onClick={func}>
            <div className={styles.circle} style={{ backgroundColor: Ccolor }}></div>
        </div>
    );
}

export default CurrentColor;