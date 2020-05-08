console.log("Trabalhando com listas");

// a palavra new é reservada ao JS, ou seja, ela só pode ser usada em certos contextos.
const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
)

listaDeDestinos.push(`Curitiba`); // adicionando um item na lista

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);


// para remover um item da lista, usamos a propriedade splice

listaDeDestinos.splice(0,1); // primeiro numero é a posição referente a lista, e o segundo número é a quantidade que se quer excluir.

// se quisermos exibir itens especificos da lista, temos a seguinte sintaxe
console.log(listaDeDestinos[1], listaDeDestinos[2]);