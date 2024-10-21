import React from "react"
import Credential from "../../atoms/Credential/Credential.jsx"
import Button from "../../atoms/Button/Button.jsx"
import styles from "../LoginFrame/LoginFrame.module.css"
import { useNavigate } from "react-router-dom"

function LoginFrame () {
    const navigate = useNavigate()
    return(
        <div className={styles.logincontainer}>
            <h1>LOGIN</h1>
            <div className={styles.loginframe}>
                <div className={styles.inputs}>
                    <Credential placeHolder={"Account"} getValue={()=>{}}/>
                    <Credential placeHolder={"Password"} getValue={()=>{}}/>
                    <button className={styles.forgot} onClick={() => navigate("/recover")}>Forgot your password?</button>
                </div>
                <Button onClick={()=>{}} text={"Login"}/>
                <div className={styles.dualtext}>
                    <p>Not a member?</p><button className={styles.link} onClick={()=> navigate("/register")}>Register</button>
                </div>
            </div>
        </div>
    )
}

export default LoginFrame
