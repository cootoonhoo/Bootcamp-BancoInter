import React, {useState,useEffect} from "react";
import '../IfoodCounter/IfoodCounter.css'

const IfoodCounter = () =>{
    const [value,setValue] = useState(1);
    const [buttonState, setButtonStyle] = useState("counter-button-active")

    function Down(){
        if(value <= 1)
        setButtonStyle("counter-button-desactive")

        if(value >0)
        setValue(value -1)
    }
    function Up(){
        setValue(value +1)
        setButtonStyle("counter-button-active")
    }

    useEffect(()=>{
        document.getElementById("moeda").innerHTML = 2.00 * value;
    }, [value])

    return(
        <div
        className="countex-wrapper">
            <button
            className= {buttonState}
            onClick={Down}> - </button>
            <p>
                {value}
            </p>
            <button
            className="counter-button-active"
            onClick={Up}> + </button>

            <button
            id= "moeda">
                12,00
            </button>
        </div>
    )
}

export default IfoodCounter;