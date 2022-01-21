const lista = [10,35,23,16,18,21]
const saldo = 500


function calc(saldo, lista){
return lista.reduce(function(prev,current){
    return prev - current
}
, saldo)
}

console.log(calc(saldo,lista))