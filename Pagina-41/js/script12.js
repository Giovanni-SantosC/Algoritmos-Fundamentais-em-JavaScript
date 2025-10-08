/* 
Elaborar um programa que efetue a leitura do nome e do sexo de uma pessoa, apresentando com 
saída uma das seguintes mensagens: "Ilmo Sr.", se o sexo informado como masculino, ou a 
mensagem "Ilma Sra.", para o sexo informado como feminino. Apresente também junto da 
mensagem de saudação o nome previamente informado.  */

let nome = prompt("Digite seu nome: ")
let sexo = prompt("Digite seu sexo (F/M)")

sexoGrande = sexo.toUpperCase()

if(sexoGrande == "M"){
    console.log(`Olá ${nome}. Ilmo Sr `)
}

else if (sexoGrande == "F"){
    console.log(`Olá ${nome}. Ilmo Sra `)
}

else{
    console.log("Digitação do sexo incorreta.")
}