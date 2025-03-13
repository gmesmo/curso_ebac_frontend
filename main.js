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
