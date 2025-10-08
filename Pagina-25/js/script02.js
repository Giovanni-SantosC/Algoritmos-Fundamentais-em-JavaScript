/* Ler uma temperatura em graus Fahrenheit e apresentá-la convertida em graus Celsius. A fórmula de 
conversão é C ← (F - 32) * (5/9) , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.  */

fahrenheit = parseFloat(prompt("Digite a sua temperatura em fehrenheit: "))

celsius = (fahrenheit - 32) * (5/9)

console.log(`Sua temperatura em fahrenheit é ${fahrenheit} e em celsius é ${celsius}`)