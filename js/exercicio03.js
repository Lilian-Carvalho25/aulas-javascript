/* Gerar valores entre 0 e 10 (sem casa decimal) */
let numeroAleatorio = parseInt( Math.random() * 11 );
console.log(numeroAleatorio);

const formulario = document.querySelector("form");
const campoPalpite = document.querySelector("#palpite");
const divResultado = document.querySelector("#resultado");

formulario.addEventListener ("submit", function(event){
    event.preventDefault();

    let palpite = (campoPalpite.value);

    let resultado;

    if (numeroAleatorio == palpite) {
        resultado = "Acertooooou!";
        resultado.style.color = "blue";
    } else {
        resultado = "Errouuuuuu";
        resultado.style.color = "red";
    }

    let h2 = document.createElement("h2");
    
    h2.innerHTML = `${resultado}`;

    divResultado.appendChild(h2);

    campoPalpite.focus();
});
