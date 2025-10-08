/* Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em 
dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares 
disponível com o usuário, para que seja apresentado o valor em moeda brasileira.  */


let cotacaoDolar = parseFloat(prompt("Digite a cotação do dólar: "))
let quantidadeDolares = parseFloat(prompt("Digite a quantidade de dólares que você possui: "))

let conversaoBrasil = quantidadeDolares * cotacaoDolar

console.log(`Quantidade de dólares que você possui é ${quantidadeDolares} a cotação é ${cotacaoDolar}. Convertendo para real é ${conversaoBrasil.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)