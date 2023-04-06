
/* Comandos condicionais:

-> if (SE) / else (SENÃO)
-> else if (SENÃO SE)
-> switch (escolha/análise) / case (caso)

Operadores relacionais:
> (MAIOR QUE)
< (MENOR QUE)
>= (MAIOR OU IGUAL)
<= (MENOR OU IGUAL)
== (IGUALDADE)
!== (DIFERENTE)
*/

const aluno = "Chaves";
let nota1 = 10;
let nota2 = 5;
let faltas = 7;
let media = (nota1 + nota2) / 2;

console.log(`Aluno(a): ${aluno}`);
console.log(`Notas: ${nota1} e ${nota2}`);
console.log(`Média: ${media}`);
console.log(`Faltas: ${faltas}`);

// Critérios de aprovação
const mediaMinima = 7;
const limiteDeFaltas = 10;

/* Se a média obtida pelo aluno(a) for maior ou igual á média mínima da escola, então ele estará reprovado. Caso contrário, ele estará reprovado. */

/* Condicional Composta */
if (media >= mediaMinima && faltas < limiteDeFaltas) {
    console.log("aprovado");
} else {  //Não precisa refazer o cálculo porque não tem outras condições.
    console.log("reprovado");
}

/* Se a média obtida pelo aluno(a) for maior ou igual á média mínima da escola e se suas faltas forem abaixo do limite, então ele estará reprovado. Caso contrário, ele estará reprovado. 

- Adicionamos a const "limiteDeFaltas" -> a let "faltas"
- && significa "e"
- adicionamos a segunda condição
*/



/* Condicional encadeada: mais de duas condições provavelmente. */

/*Algoritmo para análise de desempenho:
- Se a média do aluno for menor que 3 -> PÉSSIMO
- Se a média for menor que 5 -> RUIM
- Se a média for menor que 7 -> REGULAR
- Se a média for menor que 9 -> BOM
- Nenhuma das anteriores -> ÓTIMO
*/


// Váriavel que irá armazenar texto/desempenho
let desempenho; //começa indefinida

/* O else if significa "senão se" ou seja, se a nota não for dessa maneira, será dessa. */
if (media < 3) {
    desempenho = "PÉSSIMO";
} else if (media < 5) {
    desempenho = "RUIM";
} else if (media < 7) {
    desempenho = "REGULAR";
} else if (media < 9) {
    desempenho = "BOM";
} else {
    desempenho = "ÓTIMO";
}

/* Sem o console log os dados ficam armazenados na memória */
console.log(desempenho);

// if/else de uma linha (shorthand)
let idade = 20;

// Versão "normal"
// let resultado;
// if ( idade >= 18 ) {
//     resultado = "maior";
// } else {
//     resultado = "menor";
// }

// Versão abreviada usando operador ternário ?:
let resultado = idade >= 18 ? "maior" : "menor";

console.log(`A pessoa é ${resultado} de idade`);

console.log("-------------------------------------------------------");


/* switch/case/break/default */
/* Algoritmo de um chatbot 
- Se digitar 1: Pedir informações
- Se digitar 2: Abrir uma reclamação
- Se digitar 3: Fazer um elogio
- Se digitar 4: Falar com um atendente humano*/


// prompt faz a janelinha aparecer
// parseInt() faz com que o js entenda os números como números inteiros
let opcao = parseInt( prompt("Digite 1, 2 ou 3") );
let mensagem;

/* switvh opcao -> "analise opcao"
case -> caso for 1 -> mensagem
*/
switch (opcao) {
    case 1: mensagem = "Ok, o que quer saber?";
        break;

    case 2: mensagem = "Poxa, que pena. O que houve?";
        break;

    case 3: mensagem = "Bacana! Conte-me :)";
        break;

    default:
        mensagem = "Não entendi :( vou chamar alguém!";
        break;
}

console.log(`Opção escolhida: ${opcao}`);
console.log(mensagem);



