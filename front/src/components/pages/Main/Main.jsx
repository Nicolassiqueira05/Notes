import BigNote from "../../organisms/BigNote/BigNote"
import styles from "./Main.module.css"

function Main() {
    return(
        <div id={styles.main}>
            <div id={styles.leftbar}></div>
            <div id={styles.content}>
                <BigNote Ctitle={"Teste"} Ctext={"anotações"} Ccolor={"white"}/>
            </div>
        </div>
    )
}
export default Main