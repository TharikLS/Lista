const input = document.getElementById('Tarefas');
const btnAdd = document.getElementById('Adicionar');
const main = document.getElementById('Lista');
let contador = 0;

// Função para nova task
function AddTarefa() {
    const valorinput = input.value.trim();
    
    if (valorinput) {
        ++contador;

        // Cria nova task
        const novoitem = document.createElement('div');
        novoitem.id = contador;
        novoitem.className = 'item';

        novoitem.innerHTML = `
            <div class="item-icone">
                <span id="icone_${contador}" class="material-symbols-outlined unchecked">radio_button_unchecked</span>
            </div>
            <div class="item-nome">
                ${valorinput}
            </div>
            <div class="item-botao">
                <button class="delete">
                    <span class="material-symbols-outlined">delete</span>Excluir
                </button>
            </div>
        `;

        main.appendChild(novoitem);

        input.value = "";
        input.focus();
    }
}

// Deletar uma task
function Deletar(id) {
    const tarefa = document.getElementById(id);
    if (tarefa) {
        tarefa.remove();
    }
}

// Adicionar uma task
input.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        AddTarefa(); 
    }
});

main.addEventListener('click', function(event) {
    const target = event.target;
    const parentItem = target.closest('.item');

    if (parentItem) {
        const id = parentItem.id;

        if (target.classList.contains('delete') || target.closest('.delete')) {
            Deletar(id);
        } else if (target.classList.contains('item-icone') || target.closest('.item-icone') || target.classList.contains('item-nome') || target.closest('.item-nome')) {
            Check(id);
        }
    }
});

// função para dar um check
function Check(id) {
    const item = document.getElementById(id);
    if (item) {
        const icone = document.getElementById('icone_' + id);
        item.classList.toggle('item-clicado');

        if (icone) {
            icone.classList.toggle('unchecked');
            icone.classList.toggle('check_circle');
            icone.textContent = icone.classList.contains('check_circle') ? 'check_circle' : 'radio_button_unchecked';
        }
    }
}
