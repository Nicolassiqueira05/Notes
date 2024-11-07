import CardNote from "../../organisms/CardNote/CardNote"
import styles from "./Main.module.css"

function Main() {

    const cards = [
        {
            title: "Primeiro Card",
            type: "Nota",
            text: "Esse é o texto do primeiro card",
            color: "#FF5733"
        },
        {
            title: "Segundo Card",
            type: "Aviso",
            text: "Esse é o texto do segundo card",
            color: "#33FF57"
        },
        {
            title: "Terceiro Card",
            type: "Lembrete",
            text: "Esse é o texto do terceiro card",
            color: "#3357FF"
        }
        // dados forjados para teste, depois disso lembrar de ja começar a trabalhar nessa parte da api
    ];

    return(
        <div id={styles.main}>
            <div id={styles.leftbar}></div>
            <div id={styles.content}>
                {cards.map((card, index) => 
                    <CardNote 
                        key={index}
                        title={card.title}
                        type={card.type}
                        text={card.text}
                        color={card.color}
                    />
                    )
                }
            </div>
        </div>
    )
}
export default Main