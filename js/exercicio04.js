const tema = document.querySelector("body");
const botao1 = document.querySelector("#tema-azul");
const botao2 = document.querySelector("#tema-verde");
const botao3 = document.querySelector("#tema-roxo");
const pBlue = document.querySelector("#descricao");
const pGreen = document.querySelector("#descricao");
const pOrange = document.querySelector("#descricao");
let p = document.createElement("p");

// botao1.addEventListener("click", function(){
//     tema.classList.toggle("tema-azul");

//     p.innerHTML = `Azul significa Harmonia e Maturidade.`;
//     pBlue.appendChild(p);
//     pBlue.style.color = "lightblue"
// });

botao1.addEventListener("click", function(){


    tema.classList.toggle("tema-azul");
    if (tema.classList.toggle("tema-verde")) {
        tema.classList.remove("tema-verde");
    }

    if (tema.classList.toggle("tema-roxo")) {
        tema.classList.remove("tema-roxo");
    }

    p.innerHTML = `Azul significa Harmonia e Maturidade.`;
    pBlue.appendChild(p);
    pBlue.style.color = "lightblue"
});

// botao2.addEventListener("click", function(){
//     tema.classList.toggle("tema-verde");

//     p.innerHTML = `Verde significa Saúde de Esperança.`;
//     pGreen.appendChild(p);
//     pGreen.style.color = "lightgreen"
// });

botao2.addEventListener("click", function(){
    if (tema.classList.toggle("tema-roxo")) {
        tema.classList.remove("tema-roxo");
    }

    if (tema.classList.toggle("tema-azul")) {
        tema.classList.remove("tema-azul");
    }
    tema.classList.toggle("tema-verde");

    p.innerHTML = `Verde significa Saúde de Esperança.`;
    pGreen.appendChild(p);
    pGreen.style.color = "lightgreen"

});

botao3.addEventListener("click", function(){
    tema.classList.toggle("tema-roxo");

    p.innerHTML = `O roxo está ligado às profundezas da mente.`;
    pOrange.appendChild(p);
    pOrange.style.color = "white";
});
