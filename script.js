/*Exercício 1*/

var readline = require("readline-sync");

var numero = Number(readline.question("Informe o número: "));
for (let i=1;i<=10;i++){
    console.log(`${numero} x ${i} = ${numero * i}`);
};

/*Exercício 2*/
var numeroum = Number(readline.question("Informe o número: "));
var soma = 0;
for (let i=1; i<=numeroum; i++){
    soma += i;
} console.log(soma);

/*Exercício 3*/
var numerodois = Number(readline.question("Informe o número: "));
var somaum = 0;
for (let i=1; i<=numerodois; i++){
    if (numerodois % i === 0){
        somaum += i;
    }
} console.log(somaum - numerodois);

/*Exercício 4*/
var numerotres = Number(readline.question("Informe o número: "));
