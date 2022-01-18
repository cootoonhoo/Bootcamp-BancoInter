function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const P1 = [
   {nome: "Ana",
    idade: 10}
]

const P2 = [
    {nome: "Marco",
    idade: 21}
 ]

 const P3 = [
    {nome: "Pedro",
     idade: 19}
 ]

 const P4 = [
    {nome: "Igola",
     idade: 3}
 ]

console.log(calculaIdade.call(P1,15))
console.log(calculaIdade.apply(P2, [3]))