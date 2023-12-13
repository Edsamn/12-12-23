// Escreva um programa que pergunte a velocidade de um carro. Caso
// ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
// multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
// km acima da velocidade permitida.

let velocidade = Number(prompt('Velocidade?'));

if (velocidade > 80) {
    let multa = (velocidade - 80) * 5;
    console.log(`Você foi multado em: ${multa}`);
} else {
    console.log('Você está dentro da velocidade permitida.');
}