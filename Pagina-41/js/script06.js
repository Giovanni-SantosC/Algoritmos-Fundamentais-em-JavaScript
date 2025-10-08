/* 
Efetuar a leitura de três valores (variáveis A, B e C) e apresentá-los dispostos em ordem crescente.  */

let numero01 = parseInt(prompt("Digite o primeiro valor: "))
let numero02 = parseInt(prompt("Digite o segundo valor: "))
let numero03 = parseInt(prompt("Digite o terceiro valor: "))

if (numero01 < numero02 && numero01 < numero03) {

    if (numero02 < numero03) {
        console.log(`Numero na ordem crescente é ${numero01}, ${numero02}, ${numero03}`)
    }

    else {
        console.log(`Numero na ordem crescente é ${numero01}, ${numero03}, ${numero02}`)
    }
}

else if(numero02 < numero01 && numero02 < numero03){

    if (numero01 < numero03) {
        console.log(`Numero na ordem crescente é ${numero02}, ${numero01}, ${numero03}`)
    }

    else{
        console.log(`Numero na ordem crescente é ${numero02}, ${numero03}, ${numero01}`)
    }
}

else{
    if(numero02 < numero01){
        console.log(`Numero na ordem crescente é ${numero03}, ${numero02}, ${numero01}`)
    }

    else{
        console.log(`Numero na ordem crescente é ${numero03}, ${numero01}, ${numero02}`)
    }
}