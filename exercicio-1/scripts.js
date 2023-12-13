// Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o valor correspondente em graus Fahrenheit.

let tempC = Number(prompt("Digite os graus Celsius"));
let tempF = (tempC * 1.8 + 32);

document.write(`A temperatura de ${tempC} graus celsius em Farenheit é ${tempF} graus.`);