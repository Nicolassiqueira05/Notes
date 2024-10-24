import { useState } from "react"

function Note ({title, text, Ccolor}){
    const [color, setColor] = useState(color)

    return(
        <div className="note">
            <div>
                <div className="circle" style={{backgroundColor: `${color}`}}></div>
                <h1>{props.title}</h1>
            </div>
            <div>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default Note