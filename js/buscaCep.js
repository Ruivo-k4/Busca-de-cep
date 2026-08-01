//#region importações

//#endregion

//#region captura da api

//#endregion

//#region captura do input
let buscaCepDisplay = document.querySelector("#displayCep");//area que vai mostrar os dados
let buscaCepSearch = document.querySelector(".buscaCep_search");//onde está as ferramentas de pesquisa

let inputUser = document.querySelector("#InputUser");
let inputUser_value = inputUser.value; //captura o que foi digitado

let buscaCepBtn = document.querySelector("#searchEnviate");

if(buscaCepDisplay){
    buscaCepBtn.addEventListener('click', () => {
        buscaCepBtn.innerHTML = "Apagar";
        
        buscaCepSearch.addEventListener('input', () => {
            buscaCepBtn.innerHTML = "Enviar";
        });
    });
}
//#endregion

//#region funções

//#endregion