
function pedir(){

    var area = document.getElementById('nome')
    var texto = prompt('digite o nome:')

if(texto == ''|| texto == null){
   alert ('valor não é valido')
   area.innerHTML = 'digite algo valido';
}

else{
   area.innerHTML=texto;
}

}
function verificar(){
    var aqui = document.getElementById('word')
   var texto = prompt('digite o nome:')

   if (texto>2 && texto<=20){
      alert ('valor é lido aqui')
        aqui.innerHTML='verdadeiro';
     }
     else{
        aqui.innerHTML='falso';
     }
   }