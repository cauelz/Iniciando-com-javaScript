console.log("Trabalhando com condicionais");

// a palavra new é reservada ao JS, ou seja, ela só pode ser usada em certos contextos.
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
)

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idades");
//     listaDeDestinos.splice(0, 1);
// } else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(0, 1);
// } else {

//     console.log("Não é maior de idade e não posso vender");
// }


if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem");
    listaDeDestinos.splice(0, 1); // removendo item
} else {

    console.log("Não é maior de idade e não posso vender");
}

// \n ele adiciona uma nova linha, é uma forma de pularmos de linha.
console.log("Embarque: \n\n");

if(idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem!");
} else {
    console.log("Você não pode embarcar");
}


// usar alt + shift + f para identar as chaves

console.log(listaDeDestinos[1], listaDeDestinos[2]);

console.log(listaDeDestinos);