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
    if(inputElement.value.length >=27){
        var init = inputElement.value.slice(0,26) 
        var sub = inputElement.value.slice(26)
        li.appendChild(document.createTextNode(init + "-"))
        li.appendChild(document.createElement("br"))
        li.appendChild(document.createTextNode(sub))
        ul.appendChild(li)
    }else{
        li.appendChild(document.createTextNode(inputElement.value))
        ul.appendChild(li)
    }
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