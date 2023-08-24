var lista_poderes = document.getElementById("lista_poderes");
var poderes = document.getElementById("poderes");
//vetor para lista de poderes
var vpod = [];

function carregaDados(){
    vpod.push("Super-Força");
    vpod.push("Incendiar");
    vpod.push("Invisibilade");
    vpod.push("Congelamento");
    vpod.push("Telecinese");
    lista_poderes.innerHTML = "";
    //laço no vetor para incluir os poderes na lista
    vpod.forEach(function(item){
        var op = document.createElement("option");
        op.text = item;
        op.value = item;
        lista_poderes.add(op); //adciona a opção na lista
    });

    console.log("numero de itens " + lista_poderes.length);
    var pod ="";
    for(let i = 0; i < lista_poderes.length; i++){
        item = lista_poderes.options[i];
        pod += item.text + ", ";
    }
    console.log(pod);
}

function addPoder(){
    //pegar valor selecionado
    var valor = lista_poderes.options[lista_poderes.selectedIndex].text; 
    //criar uma opção com o valor
    var op = document.createElement("option");
    op.text = valor;
    op.value = valor;
    //adicionar opção na outra caixa de seleção
    poderes.add(op);
    //remover valor da primeira caixa
    lista_poderes.options[lista_poderes.selectedIndex].remove();
    //lista_poderes.selectedIndex -> retorna o indice do item selecionado

}
    //chama a função addPoder quando da duplo clique
    lista_poderes.addEventListener("dblclick", addPoder);
carregaDados();
