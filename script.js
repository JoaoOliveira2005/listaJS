function adicionarTarefa() {
    let entradaTarefa = document.getElementById("entradaTarefa");
    
    let listaTarefas = document.getElementById("listaTarefas");

    if (entradaTarefa.value.trim() === "") return;

    let itemLista = document.createElement("li");
    itemLista.textContent = entradaTarefa.value;

    let botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "❌";
    botaoExcluir.classList.add("botaoExcluir");
    botaoExcluir.onclick = function () {
        itemLista.remove();
    };

    itemLista.addEventListener("click", function () {
        itemLista.classList.toggle("concluida");
    });

    itemLista.appendChild(botaoExcluir);
    listaTarefas.appendChild(itemLista);
    entradaTarefa.value = "";
}
