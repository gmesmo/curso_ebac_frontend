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
    } else {
      return false;
    }
  }
}

const alunos = [
  new Aluno("Guilherme", 10),
  new Aluno("Mariane", 3.5),
  new Aluno("Roger", 7),
  new Aluno("Wagner", 6),
];

console.log(alunos);

alunos.forEach((aluno) => {
  if (aluno.aprovado()) {
    console.log(`${aluno.nome} foi aprovado!`);
  }
});
