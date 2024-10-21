import React from "react"
import Credential from "../../atoms/Credential/Credential.jsx"
import Button from "../../atoms/Button/Button.jsx"
import  styles from "../RegisterFrame/RegisterFrame.module.css"
import { useNavigate } from "react-router-dom"

function LoginFrame () {
    const navigate = useNavigate()
    return(
        <div className={styles.registercontainer}>
            <h1>REGISTER</h1>
            <div className={styles.registerframe}>
                <div className={styles.inputs}>
                    <Credential placeHolder={"Account"} getValue={()=>{}}/>
                    <Credential placeHolder={"Password"} getValue={()=>{}}/>
                    <Credential placeHolder={"Confirm Password"} getValue={()=>{}}/>
                </div>
                <Button onClick={()=>{}} text={"Register"}/>
                <div className={styles.dualtext}>
                    <p>Already a member?</p><button className={styles.link} onClick={()=> navigate("/login")}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginFrame
