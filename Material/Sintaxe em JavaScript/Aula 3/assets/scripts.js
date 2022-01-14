var array = ["texto", 1, false, ['array1'], ['array2'], ['array3'], ['array4']];

array.forEach((function(item,index){console.log(item,index)}))

array.push('novo item');
console.log(array);

array.pop();
console.log(array);

array.shift();
console.log(array);

array.unshift('novo item');
console.log(array);

array.indexOf(array.indexOf(false));

array.splice(0,3);
console.log(array);

let novoArray = array.slice(0,3)

let objeto = {
    nome : "Xícara",
    tamanho : 3,
    InterObj : {Inception : "Isso daqui é estrnaho"},
    Bebivel : true
}
console.log(objeto.InterObj.Inception)