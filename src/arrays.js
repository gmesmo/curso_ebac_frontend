const redesSociais = ["Facebook", "X", "Instagram"];

for (let i = 0; i < redesSociais.length; i++) {
  console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`);
}

redesSociais.forEach((redeSocial) => {
  console.log(`Eu tenho perfil na rede social: ${redeSocial}`);
});

const alunos = ["Gustavo", "Julia", "Paula", "Wagner"];

const alunos2 = alunos.map((aluno) => {
  aluno = {
    nome: aluno,
    curso: "Front-end",
  };

  return aluno;
});

alunos2.push({
  nome: "Lucio",
  curso: "Back-end",
});

console.log(alunos2);

const paula = alunos2.findIndex((aluno) => {
  return aluno.nome === "Paulo";
});

console.log(paula);

const todosFrontEnd = alunos2.every((aluno) => {
  return aluno.curso == "Front-end";
});

console.log(todosFrontEnd);

const existeBackEnd = alunos2.some((aluno) => {
  return aluno.curso == "Back-end" && aluno.curso == "Front-end";
});

console.log(existeBackEnd);

const alunosBackEnd = alunos2.filter((aluno) => {
  return aluno.curso == "Back-end";
});

console.log(alunosBackEnd);

const nums = [10, 20, 30, 10];

const soma = nums.reduce((total, num) => {
  return total + num;
});

console.log(soma);

const nomesDosAlunos = alunos2.reduce((total, aluno) => {
  total += `${aluno.nome}, `;
  return total;
}, "");

console.log(nomesDosAlunos);
