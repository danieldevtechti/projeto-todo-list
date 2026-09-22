const inputTarefa = document.getElementById('input-tarefa');
const btnAdicionar = document.getElementById('btn-adicionar');
const listaTarefas = document.getElementById('lista-tarefas');

btnAdicionar.addEventListener('click', () => {
    const textoTarefa = inputTarefa.value.trim();
    if (textoTarefa === "") return;

    criarElementoTarefa(textoTarefa);
    inputTarefa.value = "";
});

function criarElementoTarefa(texto) {
    const li = document.createElement('li');
    li.innerText = texto;

    li.addEventListener('click', () => {
        li.classList.toggle('feito');
    });

    const btnDeletar = document.createElement('button');
    btnDeletar.innerText = 'X';
    btnDeletar.addEventListener('click', (e) => {
        e.stopPropagation(); 
        li.remove();
    });

    li.appendChild(btnDeletar);
    listaTarefas.appendChild(li);
}