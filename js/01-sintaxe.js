 /* Shift + alt + A = Comentários em JavaScript. */
        // Ctrl + ; = Comentário de uma linha.


        /* Variáveis e constantes: são recursos para armazenamento e manipulação de dados na memória RAM.
         let -> indica variável (Pré processamento).
        const -> indica constante (Indica constante).
        */

        // Criando variáveis
        let ano = 2023;
        /* apenas os números inteiros não precisam das aspas, todo o resto sim. */
        let curso = "Programaor Web";
        let cidade = "São Paulo"

        // Criando constantes (Algo que não muda)
        const nome = "Tiago";
        const escola = "Senac Penha";

        // Saída de dados (No console)
        console.log("Exemplos");
        console.log(curso);
        console.log(ano);
        console.log(escola);

        // Conta
        let produto = "TV Led";
        let preco = 1500.715;
        // No Javascript o ponto só é usado para representar números quebrados
        let quantidade = 3;
        let total = preco * quantidade;

        console.log(produto);
        console.log(preco, quantidade);
        console.log(total);
        /* Função toFixed(número) determina a quantidade de casas decimais. */
        console.log(total.toFixed(3));

        /* Saída de dados estáticos e dinâmicos */

        /* 1 (moderna) = Template String */
        /* Crase ao invés das aspas */
        console.log(`Olá! Me chamo ${nome} e estou fazendo curso de ${curso} no ${escola}`);

        /* 2 (tradicional) = Concatenação */
        console.log("Olá! me chamo "+nome+"e estou fazendo curso de "+curso+" no "+escola);

        