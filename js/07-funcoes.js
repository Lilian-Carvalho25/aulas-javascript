/* Funções nativas (Já existentes no javascript) já usadas:
log(), prompt(), alert(), toLocaleString(), parseInt()
*/

/* Funções personalizadas:
- Organização de lógica, com separação de responsabilidades.
- Reaproveitamento de código.
*/

// Sintaxe 1 (tradicional) -> função anônima/literal
const exemplo1 = function(){
    // corpo da função (ações)
    console.log("Função anônima!");
};

/* Observação: para a função fazer o que foi programada para fazer, em algum momento ela precisa ser "chamada/invocada". */
//Chamando a função
exemplo1();

/* Sintaxe 2 (tradicional)
Função nomeada/declarada
*/
function exemplo2(){
    //corpo da função (ações)
    console.log("Função nomeada!");
}
exemplo2();

/* Sintaxe 3 (moderna/atual): 
Arrow Function (função "flecha/seta")
*/

/* Observação: esta é a sintaxe usada nos frameworks JS mais populares: React, Angular, Vue, React Native */
const exemplo3 = () => {
    console.log("Arrow Function!");
}
exemplo3();

console.log("----------------");

/* Funções com parâmetros/argumentos
Parâmetros (ou argumentos) são dados passados para a função "entender" o que ela deve processar/fazer

Exemplo: uma função que calcule um frete precisa pelo menos de um parâmetro com o CEP do local de entrega.*/

// usuario e senha são os parâmetros
function login(usuario, senha){

    /* Suposição: base de dados com usuário liliancsribeiro e senha 123abc */
    if(usuario == "liliancsribeiro" && senha == "123abc"){
        console.log("Dados corretos, usuário entrou");
    } else {
        console.log("Dados incorretos, acesso bloqueado");
    }
}

login("liliancsribeiro", "123abc");

console.log("---------------------");

function soma(valor, valor2){
    // O valor está armazenado em "total"
    // Variável de escopo LOCAL
    let total = valor + valor2;
    return total;
}

let resultadoA = soma(10, 500)
let resultadoB = soma(1450, 500)
let resultadoC = soma(15345, 500)
console.log(resultadoA);
console.log(resultadoB);
console.log(resultadoC);

console.log("-------------------");

// Versão 1: sintaxe tradicional

// function dobra(valor){
//     /* let resultadoDobrado = valor * 2;
//     return resultadoDobrado; */

//     return valor * 2;
// }


// Versão 2: sintaxe arrow function com return explícito

// const dobra = (valor) => {
//     return valor * 2;
// };



/* Versão 3: sintaxe arrow function com return implícito.

Observação: quando a arrow function possui somente UM parâmetro, você pode omitir os parênteses. E se a arrow function faz apenas uma única operação/retorno, você também pode omitir as chaves e a palavra return. Na práticam você consegue criar uma função de uma única linha com arrow function.*/

const dobra = valor => valor * 2;

let exemploDobra = dobra(10);
console.log(exemploDobra);
