import { useState } from "react";

const SmartCounter = () =>{
    const [valor, incrementarValor] = useState(1);
    return(
        <>
        <p>{valor}</p>
        <button
        onClick={()=>incrementarValor(valor + 1)}>
            Aumentar
        </button>
        </>
    )
}
export default SmartCounter;