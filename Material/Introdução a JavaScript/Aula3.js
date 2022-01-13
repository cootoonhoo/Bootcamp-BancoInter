function returnEvenValues(array){
    let evemNums = [];
    for(let i = 0; i<array.length; i++){
        if(array[i] % 2 == 0){
            evemNums.push(array[i]);
        }
        else {
            console.log(`${array[i]} não é par!`)
        }
    }
    console.log(evemNums);
}

let array = [1,2,3,4,5]
returnEvenValues(array);
