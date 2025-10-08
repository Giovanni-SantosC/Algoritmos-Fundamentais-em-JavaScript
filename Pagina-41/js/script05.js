/* Efetuar a leitura de três valores (variáveis A, B e C) e efetuar o cálculo da equação completa de 
segundo grau, apresentando as duas raízes, se para os valores informados for possível efetuar o 
referido cálculo. Lembre-se de que a variável A deve ser diferente de zero. */

/* a formula de delta então é delta igual B ao quadrado menos 4 vezes A vezes C */

let valorA = parseFloat(prompt("Digite o valor de A:"))
let valorB = parseFloat(prompt("Digite o valor de B:"))
let valorC = parseFloat(prompt("Digite o valor de C:"))

if (valorA != 0) {
    let delta = valorB**2 - 4*valorA*valorC

    if(delta >= 0){

        let equacao01 = ((-valorB + Math.sqrt(delta)) / (2 * valorA))

        let equacao02 = ((-valorB - Math.sqrt(delta)) / (2 * valorA))

        console.log(`Sua primeira equação é ${equacao01} e Sua segunda equação é ${equacao02}`)
    }

    else{
        console.log("Sua equação não tem solução real.")
    }
}

else {
    console.log("Valor A igual a 0.")
}