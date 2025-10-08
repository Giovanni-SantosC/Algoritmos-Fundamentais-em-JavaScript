/* Efetuar a leitura de quatro números inteiros e apresentar os números que são divisíveis por 2 e 3.  */

for(contadora = 1; contadora < 5;contadora++){
    let numero01 = parseInt(prompt(`Digite o ${contadora}° valor: `))

    if(numero01 % 2 == 0 || numero01 % 3 == 0){
        console.log(`Número ${numero01} divisível por 2 ou 3`)
    }
}