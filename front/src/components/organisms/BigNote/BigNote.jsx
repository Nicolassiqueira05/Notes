import { useState } from "react"
import styles from "./BigNote.module.css"

function BigNote ({Ctitle, Ctext, Ccolor}){

    const [text, setText] = useState(Ctext)
    const [title, setTitle] = useState(Ctitle)
    const [color, setColor] = useState(Ccolor)
    const [colorChange, setColorChange] = useState(false)

    function handleText(e){
        setText(e.target.value)
    }

    function handleTitle(e){
        setTitle(e.target.value)
    }
    function handleColorChange() {
        setColorChange(true)
    }
    function returnColor(e){
        return e
    }


    return(
        <div className={styles.BigNote}>
            <div className={styles.Header}>
                {!colorChange ? (<div className={styles.circle} onClick={handleColorChange}></div>) : (<div onClick={handleColorChange}></div>)}
                <input className={styles.title} type="text" value={title} onChange={handleTitle}/>
                <div className={styles.circle}></div>
            </div>
            <div className={styles.textContainer}>
                <textarea className={styles.text} onChange={handleText} placeholder="Start your note">{text}</textarea>
            </div>
        </div>
    )
}

export default BigNote