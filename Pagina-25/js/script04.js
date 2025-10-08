/* Efetuar o cálculo da quantidade de litros de combustível gasta  em uma viagem, utilizando um 
automóvel que faz 12 Km por litro. Para obter o cálculo, o usuário deve fornecer o tempo gasto 
(TEMPO) e a velocidade média (VELOCIDADE) durante a viagem. Desta forma, será possível obter a 
distância percorrida com a fórmula DISTANCIA ← TEMPO * VELOCIDADE. Possuindo o valor da 
distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula 
LITROS_USADOS ← DISTANCIA / 12. Ao final, o programa deve apresentar os valores da velocidade 
média (VELOCIDADE), tempo gasto na viagem (TEMPO), a distancia percorrida (DISTANCIA) e a 
quantidade de litros (LITROS_USADOS) utilizada na viagem.  */

let tempo = parseInt(prompt("Digite quanto tempo durou a viagem: (Em horas)"))
let velocidade = parseFloat(prompt("Digite a velocidade média durante a viagem: (KM)"))

let distancia = tempo * velocidade

let litrosUsados = distancia / 12

console.log(`A corrida durou ${tempo}Hrs`)
console.log(`A velocidade média dessa viagem foi ${velocidade}Km/h`)
console.log(`A distancia percorrida foi ${distancia}`)
console.log(`Litros usados na viagem foi ${litrosUsados}`)