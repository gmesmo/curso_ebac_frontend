"use strict";

var redesSociais = ["Facebook", "X", "Instagram"];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil na rede social: ".concat(redesSociais[i]));
}
redesSociais.forEach(function (redeSocial) {
  console.log("Eu tenho perfil na rede social: ".concat(redeSocial));
});
var alunos = ["Gustavo", "Julia", "Paula", "Wagner"];
var alunos2 = alunos.map(function (aluno) {
  aluno = {
    nome: aluno,
    curso: "Front-end"
  };
  return aluno;
});
alunos2.push({
  nome: "Lucio",
  curso: "Back-end"
});
console.log(alunos2);
var paula = alunos2.findIndex(function (aluno) {
  return aluno.nome === "Paulo";
});
console.log(paula);
var todosFrontEnd = alunos2.every(function (aluno) {
  return aluno.curso == "Front-end";
});
console.log(todosFrontEnd);
var existeBackEnd = alunos2.some(function (aluno) {
  return aluno.curso == "Back-end" && aluno.curso == "Front-end";
});
console.log(existeBackEnd);
var alunosBackEnd = alunos2.filter(function (aluno) {
  return aluno.curso == "Back-end";
});
console.log(alunosBackEnd);
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (total, num) {
  return total + num;
});
console.log(soma);
var nomesDosAlunos = alunos2.reduce(function (total, aluno) {
  total += "".concat(aluno.nome, ", ");
  return total;
}, "");
console.log(nomesDosAlunos);