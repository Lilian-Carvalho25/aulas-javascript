
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





