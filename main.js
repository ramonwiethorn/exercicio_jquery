const form = document.getElementById('form-tarefa');
const tarefas = [];
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    AddLinha();
    atualizaTabela();   

    $('tr').on('click', 'td', function() {
        $(this).addClass('tarefa');
    });

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
                    <input type="checkbox" class = "trigger-input" id="concluido"/>
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






