const form = document.getElementById("formulario");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const campoA = document.getElementById("campoA").value;
  const campoB = document.getElementById("campoB").value;
  const campoMensagem = document.getElementById("message");

  if (campoB > campoA) {
    campoMensagem.innerHTML = "Form correto! Cambo B maior!";
    campoMensagem.classList.add("success");
    campoMensagem.classList.remove("error");
  } else {
    campoMensagem.innerHTML = "Form errado! Cambo A maior!";
    campoMensagem.classList.add("error");
    campoMensagem.classList.remove("success");
  }
});
