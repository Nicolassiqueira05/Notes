import React, { useState } from "react"
import Credential from "../../atoms/Credential/Credential.jsx"
import Button from "../../atoms/Button/Button.jsx"
import styles from "../LoginFrame/LoginFrame.module.css"
import { useNavigate } from "react-router-dom"

function LoginFrame () {
    const navigate = useNavigate()

    const [Account, setAccount] = useState('')
    const [Password, setPassword] = useState('')
    const [Data, setData] = useState('')

    const login = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8080/api/login", {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userName: "nicolas",
                    userPassword: "123",
                }),
            });
    
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status} - ${response.statusText}`);
            }
    
            const result = await response.json(); // Adicionado await aqui
            console.log(result);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return(
        <div className={styles.logincontainer}>
            <h1>LOGIN</h1>
            <div className={styles.loginframe}>
                <div className={styles.inputs}>
                    <Credential placeHolder={"Account"} getValue={setAccount}/>
                    <Credential placeHolder={"Password"} getValue={setPassword}/>
                    <button className={styles.forgot} onClick={() => navigate("/recover")}>Forgot your password?</button>
                </div>
                <Button onClick={login} text={"Login"}/>
                <div className={styles.dualtext}>
                    <p>Not a member?</p><button className={styles.link} onClick={()=> navigate("/register")}>Register</button>
                </div>
            </div>
        </div>
    )
}
export default LoginFrame
