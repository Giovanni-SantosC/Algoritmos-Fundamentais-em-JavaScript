/* Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em 
real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível 
com o usuário, para que seja apresentado o valor em moeda americana.  */

let cotacaoDolar = parseFloat(prompt("Digite a cotação do dólar: "))
let quantidadeReais = parseFloat(prompt("Digite a quantidade de reais que você possui: "))

let conversaoDolar = quantidadeReais / cotacaoDolar

console.log(`Quantidade de reais que você possui é ${quantidadeReais} a cotação do dólar é ${cotacaoDolar}. Convertendo para dólar é ${conversaoDolar.toLocaleString('en', { style: 'currency', currency: 'USD' })}`)