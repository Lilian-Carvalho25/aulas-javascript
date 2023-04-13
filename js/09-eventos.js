// Exemplo 1:

const exemplo1 = document.querySelector("span");
console.log(exemplo1);

/* Ouvinte/monitor de evento: faz com que quando você executar a função, algo aconteça.
- addEventListener 
("tipo de evento", função com as ações)*/

exemplo1.addEventListener("click", function(){           
    exemplo1.textContent = "BELEZA!";
    exemplo1.style.fontFamily = "Verdana";
    exemplo1.style.textTransform = "uppercase";
    exemplo1.style.color = "purple";
});

exemplo1.addEventListener("mouseout", function(){
    exemplo1.textContent = "Exemplo 1:";
    /* exemplo1.style.all = "unset"; */
    exemplo1.style.fontFamily = "Times New Roman";
    exemplo1.style.textTransform = "normal";
    exemplo1.style.color = "black";
});



/* Exemplo 2: modo noturno */
// Etapa 1: selecionar o objeto/elemento que será modificado
const pagina = document.querySelector("body");

// Etapa 2: selecionar o objeto/elemento que será o responsável por ativar/desativar a classe 
const botao = document.querySelector("#noturno");

// Etapa 3: programação do evento de clique no botão
botao.addEventListener("click", function(){
   /*  console.log("clicou"); */

// Etapa 4: alterar (ativar/desativar) a classe na pagina
    pagina.classList.toggle("modo-noturno");

// Etapa 5: condicional para mudar o texto do botão
    if(botao.textContent == "Ativar"){
        botao.textContent = "Desativar";
    } else {
        botao.textContent = "Ativar";
    }
});

