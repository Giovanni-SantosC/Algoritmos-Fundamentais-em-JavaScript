/* Efetuar a leitura de cinco números inteiros e identificar o maior e o menor valores. */

let numero = parseInt(prompt(`Digite o 1° número: `))

let numeroMaior = numero
let numeroMenor = numero

for(contadora = 2; contadora < 6;contadora++){

    numero = parseInt(prompt(`Digite o ${contadora}° número: `))

    if(numero > numeroMaior){
        numeroMaior = numero
    }

    if(numero < numeroMenor){
        numeroMenor = numero
    }

}

console.log(`Número maior é ${numeroMaior} e numero menor é ${numeroMenor}`)