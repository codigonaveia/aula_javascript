/*document.querySelector('#btnCadastrar').onclick = function(){
    var input = document.querySelector('nome');
    var texto = input.values;
    //Cadastrar();
    //var listar = Listar();
    alert(texto);
}*/

function Cadastrar(){

    localStorage.Nome = document.getElementById("nome").value;
    Listar();
}
function Listar(){
    if(localStorage.Nome){
        document.getElementById("lista").innerHTML =  localStorage.Nome;
    }else{
        document.getElementById("lista").innerHTML = "Não há dados para mostrar";
    }
  
}
function Remover(){
    if(localStorage.Nome){
        localStorage.removeItem("Nome");
    }else{
        document.getElementById("lista").innerHTML = "Não há dados para exluir";
    }
    
}