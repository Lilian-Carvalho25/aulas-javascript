const tema = document.querySelector("body");
const botao1 = document.querySelector("#tema-azul");
const botao2 = document.querySelector("#tema-verde");
const botao3 = document.querySelector("#tema-roxo");
const pBlue = document.querySelector("#descricao");
const pGreen = document.querySelector("#descricao");
const pOrange = document.querySelector("#descricao");
let p = document.createElement("p");

botao1.addEventListener("click", function(){
    tema.classList.toggle("tema-azul");

    p.innerHTML = `Azul significa Harmonia e Maturidade.`;
    pBlue.appendChild(p);
    pBlue.style.color = "lightblue"
    return
});

botao2.addEventListener("click", function(){
    tema.classList.toggle("tema-verde");

    p.innerHTML = `Verde significa Saúde de Esperança.`;
    pGreen.appendChild(p);
    pGreen.style.color = "lightgreen"
    return
});

botao3.addEventListener("click", function(){
    tema.classList.toggle("tema-roxo");

    p.innerHTML = `O roxo está ligado às profundezas da mente.`;
    pOrange.appendChild(p);
    pOrange.style.color = "white";
    return
});
