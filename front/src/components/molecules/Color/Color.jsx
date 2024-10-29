import React from "react"

import CurrentColor from "../../atoms/CurrentColor/CurrentColor.jsx"
import Colors from "../../atoms/Colors/Colors.jsx"

import { useState } from "react"

function Color (){
    const [clicked, setClicked] = useState(false)
    const [color, setColor] = useState("green")

    function handleClick(Ccolor){
        if(clicked){
            setClicked(false)
        }else{
            setClicked(true)
        }
        if(Ccolor){
            setColor(Ccolor)
        }
    }

    if(clicked == false){
        return(
                <CurrentColor func={handleClick} Ccolor={color}/>    
        )
        }else{
            return(
                <Colors func={handleClick}/>
            )    
    }
}

export default Color