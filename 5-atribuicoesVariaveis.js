//console.log("Trabalhando com variaveis")

console.log("Trabalhando com atribuições variáveis");

const primeiroNome = "Ricardo";
const sobrenome = "Bugan";

// console.log(nome + "" + sobrenome);

//separar por virgula também faz um espaço entre as duas variaveis
console.log(nome, sobrenome)


// existe uma forma um pouco diferente de montar uma string com variaveis
// basta colocar a string dentro de Crase `` e depois fazer uma interpolação com ${}.
console.log(`Meu nome é ${nome} ${sobrenome}`);

// utilizando esta frase da forma que declaramos as variaveis acima, teremos um erro ao executar o código
// Isto acontece porque declaramos a variavel "nome" como "const" o que significa que o valor da variavel "nome" não vai mudar.
// Assim, teremos que modificar a declaramos para "let", tornando a variavel comum.
const nomeCompleto = primeiroNome + sobrenome;

let idade; // declaração da variavel
idade = 29; //atribuindo valor
