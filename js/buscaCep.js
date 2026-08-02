//#region importações

//#endregion

//#region captura da api

//#endregion

//#region captura do input
let buscaCepDisplay = document.querySelector("#displayCep");//area que vai mostrar os dados
let buscaCepSearch = document.querySelector(".buscaCep_search");//onde está as ferramentas de pesquisa

//#region local dos inputs do buscaCep_search
/*
vamos usar o trim() na hora de capturar os valoes.
Permite a captura atualizada e sem espacos em branco,
só nas pontas, mas tá bom.
*/
let inputCep = document.querySelector("#InputUserCep");
let inputUf = document.querySelector("#selectState");
let inputCity = document.querySelector("#InputUserCity");
let inputLog = document.querySelector("#InputUserLog");

let input_vet = [inputCep, inputUf, inputCity, inputLog];

//#endregion

let buscaCepBtn = document.querySelector("#searchEnviate");

if (buscaCepDisplay) {
    input_vet.forEach((element, index) => {
        if (element.value != "") {
            buscaCepBtn.addEventListener('click', () => {
                let btn_state = buscaCepBtn.classList.toggle("deletar");

                if (btn_state) { //se tem o deletar
                    buscaCepBtn.innerHTML = "Limpar";
                } else {
                    buscaCepBtn.innerHTML = "Buscar";
                    window.location.reload();
                }

                buscaCepSearch.addEventListener('input', () => {
                    buscaCepBtn.innerHTML = "Buscar";
                    buscaCepBtn.classList.toggle("deletar", false);
                });
            });
        }
    });
}
//#endregion

//#region funções

//#endregion