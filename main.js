const tarefas = [];

$(document).ready(function () {
    $('#form-tarefa').on('submit', function (e) {
        e.preventDefault();



        const inputNomeTarefa = document.getElementById('nome-tarefa');



        if (tarefas.includes(inputNomeTarefa.value)) {
            alert(`Esta tarefa ${inputNomeTarefa.value} já foi incluida.`)
        } else {
            tarefas.push(inputNomeTarefa.value);
            const listaTarefas = $(`
        <tr>
            <td>                              
                <div class="tarefa">
                    <label for="concluido" >${inputNomeTarefa.value}</label>
                </div>       
            <td>
        </tr>`);
            listaTarefas.appendTo('tbody');


            listaTarefas.on('click', function () {
                $(this).addClass('concluido');
            });


        }
        inputNomeTarefa.value = '';


    });
});