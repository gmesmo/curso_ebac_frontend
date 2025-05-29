class Aluno {
  #nota = 0;

  constructor(nomeDoAluno, notaDoAluno) {
    this.nome = nomeDoAluno;
    this.#nota = notaDoAluno;
  }

  exibeNota() {
    console.log(this.#nota);
  }

  aprovado() {
    if (this.#nota >= 6) {
      return true;
    }
  }
}

const guilherme = new Aluno("Guilherme", 10);
const mariane = new Aluno("Mariane", 3.5);
const roger = new Aluno("roger", 6);

let aprovados = [];
