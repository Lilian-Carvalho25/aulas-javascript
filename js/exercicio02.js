// Sintaxe 2
// function converteMoeda(dolar, reais){
//     let valorEmReais = dolar * reais;
//     return valorEmReais
// }

// Sintaxe 3
const converteMoeda = (dolar, reais) => {
    let valorEmReais = dolar * reais;
    return valorEmReais
};

// Configurações do real
let configuracoes =  {
    style: "currency",
    currency: "BRL"
};

let resultado = converteMoeda(1000, 4.94)
let valorEmdolar = 1000
console.log(`Valor em dólar: ${valorEmdolar}`);
console.log(`Valor convertido: ${resultado.toLocaleString("pt-br", configuracoes)}`);

alert(`O valor em dólar é ${valorEmdolar} e o valor em real é R$ 4,94`)