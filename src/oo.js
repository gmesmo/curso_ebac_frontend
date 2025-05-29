// function Pokemon(nome, tipo) {
//   this.nome = nome;
//   this.tipo = tipo;
// }

// const pikachu = new Pokemon("Pikachu", "elétrico");

class Pokemon {
  #hp = 100;

  constructor(nomeDoPokemon, tipoDoPokemon) {
    this.nome = nomeDoPokemon;
    this.tipo = tipoDoPokemon;
  }

  atacar(nomeDoAtaque) {
    console.log(`${this.nome} atacou com ${nomeDoAtaque}!`);
  }

  recebeuAtaque() {
    this.#hp -= 10;
  }

  exibeHp() {
    console.log(this.#hp);
  }
}

class Pikachu extends Pokemon {
  constructor() {
    super("Pikachu", "elétrico");
  }

  atacar() {
    console.log(`${this.nome} atacou com choque do trovão!`);
  }
}

const pikachuDoAsh = new Pikachu();
const pikachu = new Pokemon("Pikachu", "elétrico");

console.log(pikachu);
console.log(pikachuDoAsh);
// pikachu.atacar("choque do trovão");

pikachuDoAsh.recebeuAtaque();
console.log(pikachuDoAsh.hp);

pikachuDoAsh.atacar();

pikachuDoAsh.exibeHp();

console.log(pikachuDoAsh instanceof Pikachu);
console.log(pikachuDoAsh instanceof Pokemon);
