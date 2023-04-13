/* Métodos/Funções de acesso/seleção do DOM 
- .getElementById("identificador") -> acesso/seleção de 1 elemento no DOM somente pelo id.

- .querySelector("seletor qualquer") -> acesso/seleção de 1 elemento no DOM atráves de um seletor CSS.

- .querySelectorAll("seletor/res qualquer") -> acesso/seleção de 1 ou mais elementos no DOM através de um ou mais seletores CSS.
*/


/* Exemplos: */

// Exemplo 1: getElementById()
const titulo = document.getElementById("exemplo1");      //a const é para guardar dados.
console.log(titulo);

// Modificando o conteúdo dinamicamente 
titulo.textContent = "Brincando com JS!";    
/*textContent -> para mudar o texto. 
innerHTML -> Se quiser colocar alguma tag junto com o texto
*/

// "Injetando" CSS inline
titulo.style.color = "lightblue";     //style -> para mudar características do CSS
titulo.style.textAlign = "center";
titulo.style.background = "black";
titulo.style.padding = "40px";
titulo.style.margin = "0";



// Exemplo 2: queryselector
const exemplo2 = document.querySelector("h2");
console.log(exemplo2);

// Adicionando classe CSS via JS
exemplo2.classList.add("destaque-item");   // classList.add -> adicionando uma classe


// Exemplo 3: queryselectorAll
const links = document.querySelectorAll("li a");
console.log(links);
//console.log(links[2]);   //essa seleção é usada porque com links um array é criado automaticamente

/* Na práticam o resultado do querySelectorAll SEMPRE será um ARRAY (ou NodeList) */

/* Aplicando o atributo target="blank" aos links selecionados */
for(let link of links){
    link.setAttribute("target", "_blank");   //setAttribute serve para adicionar atributos
}   //primeiro o atributo, depois o valor