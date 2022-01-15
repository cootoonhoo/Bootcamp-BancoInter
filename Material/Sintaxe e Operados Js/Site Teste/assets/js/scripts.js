let num1 = Number(prompt("Digite o 1º número:"))
let num2 = Number(prompt("Digite o 2º número:"))

verificar(num1,num2);

function verificar(a,b){
    let r= ""; // Criando uma string vazia
    const saoIguais = a === b;
    const som = a + b;

    r = r.concat(`Os numeros ${a} e ${b} `); // Concatenando o texto

    saoIguais ? r = r.concat("sao iguais. "): r = r.concat("nao sao iguais. ");
    r = r.concat(`Sua soma e ${som}, `);
    som > 10 ? r = r.concat("que é maior que 10 e "):r = r.concat("que é menor que 10 e ");
    som > 20 ? r = r.concat("maior que 20."):r = r.concat("menor que 20.");
    
    alert(r);
    console.log(r);
}