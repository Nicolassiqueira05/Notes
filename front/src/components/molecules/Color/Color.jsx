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
            setColor(Ccolor)
        }else{
            setClicked(true)
        }
    }

    return clicked ? (
        <Colors func={handleClick} />
    ) : (
        <CurrentColor func={handleClick} Ccolor={color} />
    );
}

export default Color