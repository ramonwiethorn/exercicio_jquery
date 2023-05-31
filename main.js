const form = document.getElementById('form-tarefa');
const tarefas = [];
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    AddLinha();
    atualizaTabela();
    concluido()   


})

function AddLinha(){
    const inputNomeTarefa = document.getElementById('nome-tarefa');

    console.log(inputNomeTarefa.value);
    
    if(tarefas.includes(inputNomeTarefa.value)){
        alert(`Esta tarefa ${inputNomeTarefa.value} já foi incluida.`)
    } else{
    tarefas.push(inputNomeTarefa.value);

    let linha = '<tr>'
    linha += `<td>                              
                <div class="tarefa">
                    <label for="concluido" >${inputNomeTarefa.value}</label>
                    </div>       
                <td>`;
    linha += `</tr>`;

    linhas += linha;
    }
    inputNomeTarefa.value = '';
}

function atualizaTabela(){

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


function concluido(){
    $('tr').on('click', function() {
        $('label').addClass('concluido');
    });
}



