/* Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula: 
Altura Raio Volume * * 2 π←  */

let altura = parseFloat(prompt("Digite a altura da lata: "))
let raio = parseFloat(prompt("Digite o raio da lata: "))

let volumeLata = 3.14 * (raio * raio) * altura

console.log(`O volume da lata é ${volumeLata}`)