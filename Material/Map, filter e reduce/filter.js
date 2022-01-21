const arr = [1,2,3,4,5,6]

function filtrarPares(arr){
    return arr.filter(callback)
}

function callback(item){
    return item % 2 === 0
}

console.log(filtrarPares(arr))
