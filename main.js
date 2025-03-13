document.addEventListener("DOMContentLoaded", () => {
  const nome = document.querySelector("#nome");
  const username = document.querySelector("#username");
  const avatar = document.querySelector("#avatar");
  const repos = document.querySelector("#repos");
  const followers = document.querySelector("#followers");
  const following = document.querySelector("#following");
  const link = document.querySelector("#profile-link");

  fetch("https://api.github.com/users/gmesmo")
    .then(function (res) {
      if (!res.ok) {
        throw new Error(`Erro na requisição: ${res.status}`);
      }
      return res.json();
    })
    .then(function (json) {
      nome.innerText = json.name;
      username.innerText = json.login;
      avatar.src = json.avatar_url;
      repos.innerText = json.public_repos;
      followers.innerText = json.followers;
      following.innerText = json.following;
      link.href = json.html_url;
    })
    .catch(function (error) {
      nome.innerText = "Não foi possível carregar os dados";
      avatar.src = "https://placehold.co/150";
      link.innerText = "Link indisponível";
    });
});
