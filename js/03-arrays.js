/* Array = relação de dados indexados. 
Também conhecido como vetores ou matrizes.

A finalidade desse recurso é armazenar uma série de dados num mesmo espaço de memória.*/

// Se você ver colchetes, é porque estão usando array
let alunos = ["Raphael", "Tiago", "Kaiky",];

// Acessando dado pelo índice
/* Cada aluno nesse caso tem um índice, e você pode ver esse índice no console */
console.log(alunos);
console.log(alunos[1]); //Tiago
console.log(alunos[0]); //Raphael

// Exercício
let alimentos = ["Cookies", "Batatas", "Chocolate", "Bombom", "Chocotone"];
console.log(alimentos);

console.log(
    `O nome do terceiro alimento é ${alimentos[2]} e o último é ${alimentos[4]}. Mas não sei o que gosto mais. Fico indecisa entre ${alimentos[1]} e ${alimentos[0]}.`
    );

    console.log("-----------------------");


// Matriz de duas dimensões
/* Array dentro de array. Assim você não precisa criar vários. */
let tecnologias = [
    ["HTML" , "CSS", "JS"],
    ["PHP", "Node", "Java", "SQL"],
    ["Figma", "Photoshop"]
];

// Acessando o JS
console.log(tecnologias[0][2]); /* Acessamos o elemento pai "tecnologias", depois acessamos o índice do primeiro array "0" e depois o índice do JS "2"  */
console.log(tecnologias[1][1]); //Node
console.log(tecnologias[2][1]); //Photoshop


