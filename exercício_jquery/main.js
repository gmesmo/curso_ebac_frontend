$("button").click(function (e) {
  e.preventDefault();

  const nomeTarefa = $("#nomeTarefa").val();
  if (nomeTarefa) {
    $("#lista-tarefas").append(`<li class="tarefa">${nomeTarefa}</li>`);
    $("#nomeTarefa").val("");
  }
});

$("ul").on("click", "li.tarefa", function (e) {
  console.log(e.target);
  $(e.target).toggleClass("feita");
});
