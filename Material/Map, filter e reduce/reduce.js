const arr = [1,2,3,4,5,6,7,8,9]

function somaNum(arr){
    return arr.reduce(function(prev, current){
        return prev + current;        
    })
}

console.log(somaNum(arr))