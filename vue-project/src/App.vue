<script setup>
import { reactive } from "vue";

const nome = "Guilherme";

const meuObjeto = {
  nome: "Guilherme",
  filmeFavorito: "Interestellar",
};

function dizOla(nome) {
  return `${nome} diz oi`;
}

const linkDaImagem =
  "https://cienciahoje.org.br/wp-content/uploads/2018/11/legiao_vpZw6kWY8GuK9cqCh5DJEFafL437IyAz02smlNgRoO.png.jpeg";
const linkGwen =
  "https://ca-times.brightspotcdn.com/dims4/default/8e8801e/2147483647/strip/true/crop/2640x1760+959+0/resize/2400x1600!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fcb%2Fb0%2F7007d68042bcb773e30a57cf7350%2Fet-spiderman-across-the-spiderverse-2023-004.JPG";
const botaoDesabilitado = true;

const gostaDoAranha = false;
const gostaDaGwen = false;

const estado = reactive({
  contador: 0,
  email: ``,
  saldo: 5000,
  transferindo: 0,
  nomes: ["Guilherme", "Paulo", "Luisa"],
  nomeAInserir: "",
});

function incrementar() {
  estado.contador++;
}

function decrementar() {
  estado.contador--;
}

function alteraEmail(evento) {
  estado.email = evento.target.value;
}

function mostraSaldoFuturo() {
  const { saldo, transferindo } = estado;
  return saldo - transferindo;
}

function cadastraNome() {
  if (estado.nomeAInserir.length >= 3) {
    estado.nomes.push(estado.nomeAInserir);
  } else {
    alert("Digite mais caracteres");
  }
}
</script>

<template>
  <h1>{{ dizOla(nome) }}</h1>

  <img v-if="gostaDoAranha" :src="linkDaImagem" alt="Homem aranha" />
  <img v-else-if="gostaDaGwen" :src="linkGwen" alt="Spider Gwen" />
  <h2 v-else>Náo curte heróis</h2>

  <button :disabled="botaoDesabilitado">Enviar mensagem</button>

  <br />
  <hr />

  {{ estado.contador }}

  <button @click="incrementar" type="button">+</button>
  <button @click="decrementar" type="button">-</button>

  <br />
  <hr />

  {{ estado.email }}

  <input type="email" @keyup="alteraEmail" />

  <br />
  <hr />

  Saldo: {{ estado.saldo }} <br />
  Transferindo: {{ estado.transferindo }}<br />
  Saldo depois da transferência: {{ mostraSaldoFuturo() }}<br />
  <input
    @keyup="(evento) => (estado.transferindo = evento.target.value)"
    :class="{ invalido: estado.transferindo > estado.saldo }"
    type="number"
    placeholder="Quantia para transferir"
  />

  <br />
  <hr />

  <ul>
    <li v-for="nome in estado.nomes">
      {{ nome }}
    </li>
  </ul>
  <input
    @keyup="(evento) => (estado.nomeAInserir = evento.target.value)"
    type="text"
    placeholder="Digite um novo nome"
  />
  <button @click="cadastraNome" type="button">Cadastrar nome</button>

  <h3 v-for="nome in estado.nomes">{{ nome }}</h3>
</template>

<style scoped>
img {
  max-width: 200px;
}

.invalido {
  outline: 1px red solid;
}
</style>
