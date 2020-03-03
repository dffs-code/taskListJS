var list = []
var inputElement

function insertTask(){
    inputElement = window.document.getElementById("name")
    
    if(inputElement.value.length < 1){
        alert("Insira alguma tarefa a ser realizada")
        return
    }
    else{
        list.push(inputElement)//insert on the list
        }

    for(var i in list){
        console.log(list[i].value)
    }

    //incluindo no html
    var ul = document.getElementById('list')//creating list
    var li = document.createElement('li')//creating element
    
    //adicionando checkbox
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.value = 1;
    checkbox.name = "todo";
    checkbox.className = "todo";

    //atribuindo childs
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(inputElement.value))
    ul.appendChild(li)

    inputElement.value = ''
}
function deleteTask(){
    var boxes = document.getElementsByClassName('todo');
    if(boxes.length<1){//verificando list vazia
        alert("list vazia, insira uma tarefa")
    }else{
        var res = confirm("Tem certeza que deseja excluir as tarefas selecionadas??")
        if(res){
            for(var i = 0; i<boxes.length; i++){
                box = boxes[i];
                if(box.checked){
                    box.parentNode.parentNode.removeChild(box.parentNode)
                    list.splice(i)
                }
            }
        }else
        alert("Operação Cancelada")
    }
}

$(document).ready(function() {
    $('#button').draggable();
  });