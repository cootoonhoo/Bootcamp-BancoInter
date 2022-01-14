function calculadora(){
    const operacao = prompt("Escolha uma operação: \n 1 - Soma(+) \n 2 - Subtração(-) \n 3 - Multiplicação(*) \n 4 - Divisão (/) \n 5 - Divisão inteira (%) \n 6 - Potenciação (**) ")

    if( !operacao || operacao <= 7){
    let n1 = Number(prompt("Insira o primeiro valor:"));
    let n2 = Number(prompt("Insira o segundo valor:"));
    let resultado;
    
    if( !n1 || !n2){
        alert("Valores invalidos!")
        calculadora();
    }

    function soma(){
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`)
    }
    function subtracao(){
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`)
    }
    function multiplicacao(){
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`)
    }
    function divisao(){
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`)
    }
    function mod(){
        resultado = n1 % n2;
        alert(`${n1} % ${n2} = ${resultado}`)
    }
    function exp(){
        resultado = n1 ** n2;
        alert(`${n1} ** ${n2} = ${resultado}`)
    }
    
    if(operacao == 1){
        soma();
        novaOp();
    }
    else if( operacao == 2){
        subtracao();
        novaOp();
    }
    else if( operacao == 3){
        multiplicacao();
        novaOp();1

    }
    else if( operacao == 4){
        divisao();
        novaOp();
    }
    else if( operacao == 5){
        mod();
        novaOp();
    }
    else if( operacao == 6){
        exp();
        novaOp();
    } 
    /*
    switch(operacao){
        case 1:
            soma();
            break;
        case 2:
            subtracao();
            break;
        case 3:
            multiplicacao();
            break;
        case 4:
            divisao();
            break;
        case 5:
            mod();
            break;
        case 6:
            exp();
            break;
    } */
}
    else{
        alert("Alternativa invalida!")
        calculadora();
    }    
}
function novaOp(){
    let op = prompt("Deseja fazer uma nova operação \n 1 - Sim \n 2 - Não")

    if(op == 1){
        calculadora();
    }
    else if(op == 2){
        return;
    }
    else{
        alert("Digite uma alternativa correta!")
        novaOp();
    }
}
calculadora();
