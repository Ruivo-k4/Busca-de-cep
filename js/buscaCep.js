//#region importações

//#endregion

//#region captura do input
let buscaCepDisplay = document.querySelector("#displayCep");//area que vai mostrar os dados
let buscaCepSearch = document.querySelector(".buscaCep_search");//onde está as ferramentas de pesquisa
let buscaCepTable = document.querySelector("#tableCeps");

//#region local dos inputs do buscaCep_search

/*
vamos usar o .trim() na hora de capturar os valoes.
Permite a captura atualizada e sem espacos em branco,
só nas pontas, mas tá bom.
*/
let inputCep = document.querySelector("#InputUserCep");
let inputUf = document.querySelector("#selectState");
let inputCity = document.querySelector("#InputUserCity");
let inputLog = document.querySelector("#InputUserLog");

//#endregion

//#region botão de envio
let buscaCepBtn = document.querySelector("#searchEnviate");

if (buscaCepDisplay) {
    buscaCepSearch.addEventListener('input', () => {
        //#region inpedindo o user de fazer bosta
        const input_notCep = [inputCity, inputLog, inputUf];

        if (inputCep.value !== "") {
            inputCep.disabled = false;

            input_notCep.forEach((element) => {
                element.disabled = true;
                element.value = "";
            });

        } else if (input_notCep.some(element => element.value.trim() !== "")) {
            inputCep.disabled = true;
            inputCep.value = "";

            input_notCep.forEach((element) => {
                element.disabled = false;
            });

        } else {
            // Se TUDO estiver vazio: destrava todos para o usuário escolher por onde começar
            inputCep.disabled = false;

            input_notCep.forEach((element) => {
                element.disabled = false;
            });
        }
        //#endregion
    });

    inputCep.addEventListener('input', () => {
        const botao = buscaCepBtn.classList.toggle("deletar", false);
        buscaCepBtn.innerHTML = "Buscar";
    });

    buscaCepBtn.addEventListener('click', () => {
        let btn_state = buscaCepBtn.classList.toggle("deletar");//add true

        if (btn_state) { //se tem o deletar
            buscaCepBtn.innerHTML = "Limpar";
            viaCep();
        } else {
            buscaCepBtn.innerHTML = "Buscar";
            window.location.reload();
        }
    });
}
//#endregion

//#region criação da tabela

//#region cabeçalho dinamico
let titlesTable = document.querySelector("#thTable");
const titles = ["Cep", "UF", "Cidade", "Bairro", "Logradouro"]; //titulo dinamico para o futuro

titles.forEach((element) => {
    const th = document.createElement('th');
    th.classList.add("titleTable");

    th.innerHTML = element;

    titlesTable.appendChild(th);
})
//#endregion

//corpo da tabela e API
async function viaCep() {
    let cep = inputCep.value.trim();
    

    let url = '';

    if (inputCep.value.trim() !== '') {
        // URL de busca por CEP único
        url = `https://viacep.com.br/ws/${cep}/json/`;
    } else {
        // URL de busca por Endereço (Retorna vários)
        url = `{https://viacep.com.br/ws/${uf}/Sao Paulo/Brasil/json/`;
    }

    try {
        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error(`Erro na requisição: ${resposta.status}`);
        }

        const dados = await resposta.json();

        if (dados.erro) {
            throw new Error('CEP não encontrado.');
        }

        const dados_info = ['cep', 'uf', 'localidade', 'bairro', 'logradouro']; //informações que irão ser capturadas


        const tr = document.createElement('tr');
        tr.classList.add("linTable");
        //#region criando a tabela

        
        dados_info.forEach((info) => {
            const td = document.createElement('td');
            td.classList.add("colTable");

            td.innerHTML = dados[info] || ''; // ||'' => se der ruim fica vazio inicialmente

            tr.appendChild(td);
        })

        buscaCepTable.appendChild(tr);

        //#endregion

    } catch (error) {
        console.error('Erro ao buscar posts:', error);
        buscaCepTable.innerHTML = '<p style="color: red;">Erro ao carregar os posts.</p>';
    }
}
//#endregion

//#endregion

//#region funções

//#endregion