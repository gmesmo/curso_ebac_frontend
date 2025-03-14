function Computador(marca, modelo, preco, cpu, gpu, ram) {
  this.marca = marca;
  this.modelo = modelo;
  this.preco = preco;
  this.cpu = cpu;
  this.gpu = gpu;
  this.ram = ram;
  this.tempoLigar = 2000;

  this.ligar = function () {
    console.log(`O ${this.marca} ${this.modelo} está ligando.`);
    setTimeout(
      function () {
        console.log(`O ${this.marca} ${this.modelo} ligou.`);
      }.bind(this),
      this.tempoLigar
    );
  };
}

function Desktop(
  marca,
  modelo,
  preco,
  cpu,
  gpu,
  ram,
  teclado,
  mouse,
  tempoLigar
) {
  Computador.call(this, marca, modelo, preco, cpu, gpu, ram);
  this.tempoLigar = tempoLigar || 1000;
  this.teclado = teclado;
  this.mouse = mouse;
}

function Notebook(marca, modelo, preco, cpu, gpu, ram, tela, tempoLigar) {
  Computador.call(this, marca, modelo, preco, cpu, gpu, ram);
  this.tempoLigar = tempoLigar || 2500;
  this.tela = tela;
}

const pc1 = new Desktop("Dell", "H5", 6000, "i7", "RTX 3060", 16, "USB", "USB");
const pc2 = new Notebook("Dell", "G5", 7850, "i7", "RTX 3060", 16, "15.6");
const pc3 = new Desktop(
  "Asus",
  "ROG",
  12500,
  "i7",
  "RTX 4080",
  32,
  "USB",
  "USB",
  500
);

pc1.ligar();
pc2.ligar();
pc3.ligar();
