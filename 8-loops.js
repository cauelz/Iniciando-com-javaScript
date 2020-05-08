console.log("Trabalhando com Loops");

// a palavra new é reservada ao JS, ou seja, ela só pode ser usada em certos contextos.
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curtiiba`,
)

const idadeComprador = 15;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos possíveis: ");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;


let contador = 0;
let destinoExiste = false;

while (contador < 4) {
    if(listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador ++;
}

console.log("Destino existe: ", destinoExiste);