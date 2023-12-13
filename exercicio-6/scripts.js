// Escreva um algoritmo que solicite 2 números e uma operação
// matemática. O algoritmo deve realizar o cálculo com os 2 números
// digitados conforme a operação informada.

let num1 = Number(prompt("Número 1"));
let num2 = Number(prompt("Número 2"));
let operacao = prompt("Operação?");
let resultado;

switch (operacao) {
  case "+":
    resultado = num1 + num2;
    console.log(resultado);
    break;
  case "-":
    resultado = num1 - num2;
    console.log(resultado);
    break;
  case "*":
    resultado = num1 * num2;
    console.log(resultado);
    break;
  case "/":
    resultado = num1 / num2;
    console.log(resultado);
    break;
  default:
    console.log("Operação inválida");
    break;
}
