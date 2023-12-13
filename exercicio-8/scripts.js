// Faça um algoritmo que leia a idade e peso de um atleta e imprima
// a sua categoria, de acordo com a seguinte tabela:

// Idade Peso Categoria
// Até 12 anos - Infantil
// 13 a 16 anos Até 40kg Juvenil leve
// Acima de 40kg Juvenil pesado
// 17 a 24 anos Até 45kg Sênior leve
// Acima de 45kg até 60kg Sênior médio

// Acima de 60kg Sênior pesado
// Acima de 24 anos - Veterano

let idade = Number(prompt('Digite a idade de seu atleta'));
let peso = parseFloat(prompt('Digite o peso de seu peso'));

if (idade <= 12) {
    document.write('Categoria infantil.');
} else if (idade > 12 && idade <= 16) {
    if (peso <= 40) {
        document.write('Categoria juvenil leve');
    } else {
        document.write('Categoria juvenil pesado.');
    }
} else if (idade > 17 && idade <= 24) {
    if (peso <= 45) {
        document.write('Categoria sênior leve.');
    } else if (peso >= 60) {
        document.write('Categoria sênior médio.');
    } else {
        document.write('Categoria sênior pesado.');
    }
} else {
    document.write('Categoria veterano.');
}