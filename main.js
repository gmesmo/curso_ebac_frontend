function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
  this.modelo = modelo;
  this.fabricante = fabricante;
  this.anoModelo = anoModelo;
  this.anoFabricacao = anoFabricacao;
  this.acelerar = function () {
    console.log("O carro acelerou");
  };
}

const carroDoJoao = new Carro("Fiesta", "Ford", 2020, 2019);
const carroDaMaria = new Carro("Ka", "Ford", 2021, 2020);

const nome = "Guilherme";
const idade = 30;
const ehMaiorDeIdade = true;
const conhecimentos = ["HTML", "CSS", "JavaScript"];

const pessoa = {
  nome: nome,
  idade: idade,
  ehMaiorDeIdade: ehMaiorDeIdade,
  conhecimentos: conhecimentos,
};

console.log(pessoa.nome);
console.log(pessoa["nome"]);
