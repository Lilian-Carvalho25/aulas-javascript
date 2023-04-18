/* Gerar valores entre 0 e 10 (sem casa decimal) */
let numeroAleatorio = parseInt( Math.random() * 11 );
console.log(numeroAleatorio);

const formulario = document.querySelector("form");
const palpite = document.querySelector("#palpite");

formulario.addEventListener ("submit", function(event){
    event.preventDefault();

    let palpite = parseFloat(palpite.value);

    if (numeroAleatorio == palpite) {
        console.log("Acertouuuuu");
    } else {
        console.log("Errouuuuuu");
    }
});