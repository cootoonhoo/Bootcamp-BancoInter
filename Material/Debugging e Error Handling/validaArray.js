function verificaArray(array, num){
    try{
    if(!array && !num) throw new ReferenceError("Faltou os parametros")
    if(array.lenght != num) throw new RangeError("O tamanho do array é diferente do indice argumentado")
    if(typeof(array) !== "object") throw new TypeError("O array não é do tipo obj")
    if(typeof (num) !== Number) throw TypeError("Os elementos do array não são numeros")
    }
    catch(e){
        if (e instanceof ReferenceError){
            console.log("Este erro é um reference error")
            console.log(e.name)
            console.log(e.stack)
        }
        else if (e instanceof RangeError){
            console.log("Este erro é um range error")
            console.log(e.name)
            console.log(e.stack)
        }
        else if (e instanceof TypeError){
            console.log("Este erro é um type error")
            console.log(e.name)
            console.log(e.stack)
        }
        else {
            console.log("Ocorreu um tipo de erro não esperado" + e)
        }
    }
}
console.log(verificaArray())