/* Gerar valores entre 0 e 10 (sem casa decimal) */
let numeroAleatorio = parseInt( Math.random() * 11 );
console.log(numeroAleatorio);

const formulario = document.querySelector("form");
const campoPalpite = document.querySelector("#palpite");
const divResultado = document.querySelector("#resultado");
let h2 = document.createElement("h2");

formulario.addEventListener ("submit", function(event){
    event.preventDefault();

    let palpite = (campoPalpite.value);

    let resultado, cor;

    if (numeroAleatorio == palpite) {
        resultado = "Parabéns, você acertou!";
        cor = "blue";
    } else {
        resultado ="Você errou, tente novamente :(";
        cor = "red";
    };
    
    h2.innerHTML = `${resultado}`;
    h2.style.color = cor;

    divResultado.appendChild(h2);

    campoPalpite.focus();
});
