/* Objetos -> estrutura de dados não-indexados baseada em pares compostos por uma chave e um valor.
Estes pares são conhecidos como Propriedade ou Atributos.
*/

// EX 1: Objetos simples
// As {} estão associados aos objetos


/* titulo (chave), senhor dos anéis (valor), o todo é propriedade */
let livro = {
    titulo : "Senhor dos Anéis",
    ano : 1954,
    volumes : 3,
    autor: "J.R.R Tolkien"
};

console.log(livro.titulo);
console.log(livro.ano);
console.log(livro.volumes);
console.log(livro.autor);

console.log("--------------------");

// EX: Objeto com array e outro objeto

let pessoa = {
    nome: "Lilian Carvalho",
    idade: "18",
    // Array dentro de objeto. As aspas estão aí porque é um texto, um dado.
    telefones: ["11-40002-8922", "11-93454-12743"],
    endereco: {
        logadouro: "Rua Alguma Coisa",
        numero: "81",
        bairro: "Penha",
        cidade: "São Paulo"
    }
}

console.log(pessoa.nome); //Nome
console.log(pessoa.telefones[1]); //telefones
console.log(pessoa.endereco.bairro); //bairro
console.log(pessoa.endereco.numero); //numero
console.log(pessoa.endereco.cidade); //cidade


//EX 3: Array com objetos
//Objetos dentro de array
let livros = [
    {
        titulo: "Inside Out",
        autor: "Nick Mason",
        ano: 2012
    },
    {
        titulo: "O Hobbit",
        autor: "J.R.R Tolkien",
        ano: 1950
    },
    {
        titulo: "Game of Thrones",
        autor: "George R.R Martin",
        ano: 2010
    }
]

console.log(livros[1].titulo); //O Hobbit
console.log(livros[0].autor); //Nick Mason

// Exercício

let pedido = {
    codigo: "34fj3",
    produtos: ["Carro", "Casa", "Celular"],
    data: "06/04/2023",
    preco: 5000,
    prazo: 20
}

let configuracoes =  {
    style: "currency",
    currency: "BRL"
};

console.log(`Referente ao pedido ${pedido.codigo} os produtos foram comprados em ${pedido.data} custando ${pedido.preco.toLocaleString("pt-br", configuracoes)}. O prazo de entrega é de ${pedido.prazo} dias úteis.`);