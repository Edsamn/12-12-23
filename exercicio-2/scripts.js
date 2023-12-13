// Crie um programa que peça um número de 1 a 7 e exiba o dia da
// semana correspondente utilizando a estrutura condicional switch.
let diaDaSemana = Number(prompt("Digite um número de 1 a 7"));

switch (diaDaSemana) {
    case 1: document.write("domingo");
        break;
    case 2: document.write("segunda");
        break;
    case 3: document.write("terça");
        break;
    case 4: document.write("quarta");
        break;
    case 5: document.write("quinta");
        break;
    case 6: document.write("sexta");
        break;
    case 7: document.write("sábado");
        break;            
    default: document.write("Número inválido")
        break;
}