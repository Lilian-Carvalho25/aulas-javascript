/* Loops (ou estruturas/laços
de repetição) 

Tradicionais: while, do/while, for
Específicos: for/of, for/in */

// Exemplo 1: while (enquanto)
// Este loop SOMENTE funcionará se
// a condição for verdadeira

// Variável de controle de repetição
/* let contador = 1;

while( contador <= 4 ){
    console.log(`Valor de contador: ${contador}`);
    contador++; // incremento
    // contador = contador + 1;
} */

// Exemplo 2: do/while (faça/enquanto)
// Este loop funcionará SEMPRE no mínimo
// uma vez, não importando a condição
/* let contador = 1;
do {
    console.log(`Contador vale ${contador}`);
    contador++;
} while(contador <= 5); */

// Exemplo 3: for (para)
//i, j, k (nomes comuns para variáveis de controle)

// for( variavel de controle; condição; atualização ){
/* for( let i = 1; i <= 5; i++ ){
    console.log(`Valor de i: ${i}`);
} */

// Exemplo 4: loop com array
const alunos = [
    "Daniel", "Raphael", "Camila", "Valeska",
    "Thiago", "Ricardo", "Vinicius", "Chaves",
    "Chapolin"
];

// Guardando o tamanho/comprimento do array
let quantidade = alunos.length; 

for( let i = 0; i < quantidade; i++ ){
    console.log(`Nome: ${alunos[i]}`);
}
