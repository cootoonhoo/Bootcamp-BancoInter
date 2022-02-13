const Counter = () =>{
    let counterNumber = 0;

    function Increment(){
        counterNumber += 1;
        document.getElementById("CounterBox").innerHTML = counterNumber;
    }
    return(  
        <>
        <h1 id="CounterBox">
            {counterNumber}
        </h1>
        <button onClick={Increment}>
            Aumentar
        </button>
        <button>
            Decrementar
        </button>
        </>
    )
}

export default Counter;