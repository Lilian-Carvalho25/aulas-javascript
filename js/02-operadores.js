/* Calculo IMC */
// Dados de entrada
let peso = 64;
let altura = 1.64;

// Processamento dos dados
let imc = peso / (altura * altura);

// Saída
console.log(`Peso: ${peso} kg`);
console.log(`Altura: ${altura.toFixed(2)}`);
console.log(`IMC: ${imc.toFixed(2)}`);

console.log("-----------------");


// Ex de desconto em uma loja por exemplo
let preco = 1000;
let desconto = 50;
let valorFinal = preco - desconto;
/* Basicamente isso aqui serve pra você não ter que colocar esssas configurações em cada um, pode ser usado de modo utilitário. */
let configuracoes =  {
    style: "currency",
    currency: "BRL"
};

/* toLocaleString = serve para mostrar coisas que por padrão ficam escondidas, o separador de "." e ",00" são exemplos disso.
Resumidamente isso tudo é a formatação de um valor 
*/
console.log(
    `Preço: ${preco.toLocaleString("pt-br", configuracoes)}`
    );


/* Dois parâmetros -> a língua, e a moeda. Se quiser fazer de outros países é só mudar os parâmetros. */
console.log(
    `Desconto de: ${desconto.toLocaleString("pt-br" , configuracoes)}`
);

console.log(
    `Valor Final: ${valorFinal.toLocaleString("pt-br", configuracoes)}`
);
