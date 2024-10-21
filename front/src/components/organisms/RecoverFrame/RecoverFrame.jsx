import React from "react"
import Credential from "../../atoms/Credential/Credential.jsx"
import Button from "../../atoms/Button/Button.jsx"
import  styles from "../RecoverFrame/RecoverFrame.module.css"
import { useNavigate } from "react-router-dom"

function RecoverFrame () {
    const navigate = useNavigate()
    return(
        <div className={styles.recovercontainer}>
            <h1>RECOVER</h1>
            <div className={styles.recoverframe}>
                <div className={styles.inputs}>
                    <Credential placeHolder={"User or email"} getValue={()=>{}}/>
                </div>
                <Button onClick={()=>{}} text={"Recover"}/>
                <div className={styles.dualtext}>
                    <p></p><button className={styles.link} onClick={()=> navigate("/login")}>Go back to login</button>
                </div>
            </div>
        </div>
    )
}

export default RecoverFrame
