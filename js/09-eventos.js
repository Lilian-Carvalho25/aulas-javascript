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

    if(pagina.classList.contains('modo-noturno') ){
        exemplo1.style.color = "white";
    } else {
        exemplo1.style.color = "black";
    };

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




/* Exemplo 3: simulação de cadastro.
Captura de dados de formulário, cálculos de valores, verificação condicional, criação de HTML via JS, adição de conteúdo/resultados na página (DOM)
*/

//Etapa 1: acessar e selecionar os elementos que serão usados
const formulario = document.querySelector("form");
const campoNome = document.querySelector("#nome");
const campoNota1 = document.querySelector("#nota1");
const campoNota2 = document.querySelector("#nota2");
const divResultados = document.querySelector("#resultados");

/* Etapa 2:
Monitorar o evento de acionamento do formulário, ou seja detectar quando o usuário clica no botão do formulário OU pressiona Enter.
*/

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    /* Usamos o comando acima para anular o comportamento padrão do navegador de tentar fazer um redirecionamento de página ao acionar o formulário. Isso é importante para as ações programadas na função possam ser interpretadas. Também pode aparecer como "e" ou "evt" */   
    
    // Etapa 3: capturar os valores digitados dentro de cada campo (através do value)
    let nome = campoNome.value;
    let nota1 = parseFloat(campoNota1.value);
    let nota2 = parseFloat(campoNota2.value);
    /* parseFloat faz com que os números sejam lidos como números, inclusive os quebrados, diferente do parseInt */

    //Testes
   /*  console.log(nome, nota1, nota2); */

    const media = (nota1 + nota2 / 2);
    const mediaMinima = 7;
    let resultado; 
    if(media >= mediaMinima){
        resultado = "aprovado(a)"
    } else {
       resultado = "reprovado(a)"
    }

    console.log(`O aluno(a) ${nome} tirou as notas ${nota1} e ${nota2}, por isso foi ${resultado}.`);

    /* Programação para colocar os resultados no HTML */

    // 1) Criar o elemento/tag que será colocada no HTML
    let paragrafo = document.createElement("p")

    // 2) Montar o conteúdo da nova tag
    paragrafo.innerHTML = `O aluno(a) ${nome} alcançou a média ${media}, por isso foi ${resultado}`;

    // 3) Adicionar ao HTML de destino (injetar o DOM)
    divResultados.appendChild(paragrafo);
    
    // Limpar os campos
    formulario.reset();

    // Devolve o foco para o campo
    campoNome.focus();
});





