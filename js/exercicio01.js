const nome = prompt("Por favor, informe seu nome.");
const idade = prompt("Por favor, informe sua idade.");

if (idade >= 18 && idade < 60) {
      alert(`${nome}, você é uma pessoa adulta.`)
} else if (idade >= 60) {
      alert(`${nome}, você é uma pessoa idosa.`)
} else {
      alert(`${nome}, você é uma pessoa menor de idade.`)
}
