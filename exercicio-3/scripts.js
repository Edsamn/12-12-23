// Crie um programa que peça um número e verifique se ele é positivo,
// negativo ou zero.

let numero = Number(prompt("Digite um número"))

if (numero < 0) {
    console.log(`${numero} é menor que zero`)
} else if (numero > 0) {
    console.log(`${numero} é maior que zero`)
} else {
    console.log(`${numero} é igual a zero`)
}