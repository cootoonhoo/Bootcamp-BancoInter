const Maca = {
    value: 2,

}
const Laranj = {
    value: 3,
}


function mapComThis(arr, thisArg){
    return arr.map(function(item){
        return item * this.value;
    }, thisArg)
}

const nums = [1,2,3]

console.log('this -> maçã',mapComThis(nums, Maca));
console.log('this -> laranja',mapComThis(nums, Laranj));