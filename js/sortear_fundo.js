// FUNÇÃO: sortei uma imagem para o background do card
// function sorteia() {
//   let url = "/img/";
//   let id = Math.floor(Math.random() * (+5 - +1)) + +1;
//   let finalUrl = url + id + ".jpg";
//   console.log(finalUrl);
//   document.getElementById("div3").innerHTML = `
// <img id="fundo" src="${finalUrl}">
// `;
// }


//FUNÇÃO: resgata a imagem selecionada e mostra na div3
function mostraImagem() {
var imagem = document.getElementById("img");

    if (this.files) {  //se tem arquivo selecionado
        var file = new FileReader(); //cria um objeto para ler o arquivo
        file.onload = function (arquivo) { //quando terminar de carregar o arquivo
            document.getElementById("card").src=
                arquivo.target.result;  //mostrar a imagem no elemento img
        }
        file.readAsDataURL(this.files[0]); //carregar arquivo a partir da url
    }
    // this.files[0] --> primeiro arquivo da lista 
}

    if(imagem.value !=null && imagem.value !=" "){ //só mostra se tiver arquivo 
document.getElementById("card").style.display = "block";


}

