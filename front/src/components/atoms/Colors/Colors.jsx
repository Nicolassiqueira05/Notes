import styles from "./Colors.module.css"

function Colors ({ func }) {
    function handleClick(color) {
        func(color);
    }

    return (
        <div className={styles.colors}>
            <div className={styles.circle} id={styles.green} onClick={() => handleClick("green")}></div>
            <div className={styles.circle} id={styles.yellow} onClick={() => handleClick("yellow")}></div>
            <div className={styles.circle} id={styles.orange} onClick={() => handleClick("orange")}></div>
            <div className={styles.circle} id={styles.red} onClick={() => handleClick("red")}></div>
            <div className={styles.circle} id={styles.purple} onClick={() => handleClick("purple")}></div>
        </div>
    );
}

export default Colors;