const nome = prompt("Por favor,informe seu nome.");
const idade = prompt("Por favor, informe sua idade.");
alert(`${recado}`)
let recado;
if (idade >= 18 && idade < 60) {
      recado = (`${nome}, você é uma pessoa adulta.`)
} else if (idade >= 60) {
    recado = (`${nome}, você é uma pessoa idosa.`)
} else {
    recado = (`${nome}, você é uma pessoa menor de idade.`)
}
