/* Classe pai -> Conta Bancária
    Nela conseguimos acessar o saldo pelo método get Saldo
    e temos operações sacar e depositar
*/

class ContaBancaria{
    constructor(agencia,numero,tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = 0;
    }
    get getSaldo(){
        return this.saldo;
    }
    sacar(value){
        value = Number(value);
        this.saldo = this.saldo - value;
        console.log("Saque feito de R$" + value)
    }
    depositar(value){
        value = Number(value);
        this.saldo = this.saldo + value;
        console.log("Depósito feito de R$" + value)
    }
}

/*
Primeira subclasse - ContaCorrente, nela temos o cartão de crédito onde tiramos o saldo dele e por padrão seu tipo é conta corrente
*/
class ContaCorrente extends ContaBancaria{
    constructor(agencia,numero,cartaoCredito){
    super(agencia,numero);
    this.tipo = "Conta corrente";
    this.cartaoCredito = cartaoCredito;
    }
    get getCartaoCredito(){
        return this.cartaoCredito;
    }
}
/*
Conta Poupança - Herda todos os parâmetros da ContaBancária PAI
*/
class ContaPoupanca extends ContaBancaria{
    constructor(agencia,numero,tipo){
        super(agencia,numero,tipo);
    }
}

/* Conta universitária - Herda todos os parâmetros da ContaBancária, porem seu método saque é limitado a 500 reais */

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia,numero,tipo){
        super(agencia,numero,tipo)
    }
    sacar(value){
        if(value <= 500) super.sacar(value);
        else
        console.log("Sua conta não permite sacar mais que R$500,00")
    }
}


const Pessoa1 = new ContaBancaria('AAAA',231,"Conta Corrente");
Pessoa1.depositar(300);

const Pessoa2 = new ContaUniversitaria('AAAA',231,"Conta Universitária");
Pessoa2.sacar(600);
Pessoa2.sacar(300);
console.log(Pessoa2.tipo+"\n"+Pessoa2.getSaldo);
